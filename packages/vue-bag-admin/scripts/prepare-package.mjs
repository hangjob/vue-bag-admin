import { cp, mkdir, readdir, readFile, rm, stat, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const packageRoot = path.resolve(__dirname, '..')
const distRoot = path.join(packageRoot, 'dist')

const runtimePackages = [
  {
    specifier: '@bag/core',
    distFolder: 'core',
    sourceDir: path.resolve(packageRoot, '../core/dist')
  },
  {
    specifier: '@bag/request',
    distFolder: 'request',
    sourceDir: path.resolve(packageRoot, '../request/dist')
  },
  {
    specifier: '@bag/ui',
    distFolder: 'ui',
    sourceDir: path.resolve(packageRoot, '../ui/dist')
  },
  {
    specifier: '@bag/host-vue',
    distFolder: 'host-vue',
    sourceDir: path.resolve(packageRoot, '../host-vue/dist')
  }
]
const bundledPackages = [...runtimePackages]

const bundledPackageMap = new Map(
  bundledPackages.map(({ specifier, distFolder }) => [specifier, distFolder])
)

async function listFilesRecursively(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(directory, entry.name)
      if (entry.isDirectory()) {
        return listFilesRecursively(entryPath)
      }
      return [entryPath]
    })
  )

  return files.flat()
}

function resolveBundledImport(filePath, packageName) {
  const folderName = bundledPackageMap.get(packageName)
  if (!folderName) {
    return null
  }

  const extension = path.extname(filePath)
  const targetPath =
    extension === '.js'
      ? path.join(distRoot, folderName, 'index.js')
      : path.join(distRoot, folderName, 'index')

  let relativeImport = path.relative(path.dirname(filePath), targetPath).replaceAll('\\', '/')
  if (!relativeImport.startsWith('.')) {
    relativeImport = `./${relativeImport}`
  }

  return relativeImport
}

async function rewriteBundledImports() {
  const bundledDistFiles = await listFilesRecursively(distRoot)
  const targetFiles = bundledDistFiles.filter((filePath) => {
    const extension = path.extname(filePath)
    return extension === '.js' || extension === '.ts'
  })

  for (const filePath of targetFiles) {
    const fileStat = await stat(filePath)
    if (!fileStat.isFile()) {
      continue
    }

    const source = await readFile(filePath, 'utf8')
    let rewritten = source

    for (const { specifier } of bundledPackages) {
      const resolvedImport = resolveBundledImport(filePath, specifier)
      if (!resolvedImport) {
        continue
      }

      rewritten = rewritten.replaceAll(`'${specifier}'`, `'${resolvedImport}'`)
      rewritten = rewritten.replaceAll(`"${specifier}"`, `"${resolvedImport}"`)
    }

    if (rewritten !== source) {
      await writeFile(filePath, rewritten, 'utf8')
    }
  }
}

async function prepareBundledTypes() {
  await mkdir(distRoot, { recursive: true })

  for (const { distFolder, sourceDir } of bundledPackages) {
    const targetDir = path.join(distRoot, distFolder)
    await rm(targetDir, { recursive: true, force: true })
    await cp(sourceDir, targetDir, { recursive: true })
  }

  const runtimeEntryDts = runtimePackages
    .map(({ distFolder }) => `export * from './${distFolder}/index';`)
    .join('\n')
  const runtimeEntryJs = runtimePackages
    .map(({ distFolder }) => `export * from './${distFolder}/index.js';`)
    .join('\n')
  const entryDts = `${runtimeEntryDts}\n`
  const entryJs = `${runtimeEntryJs}\n`
  await writeFile(path.join(distRoot, 'index.d.ts'), entryDts, 'utf8')
  // 统一由 prepare 脚本生成聚合入口，避免运行时代码和复制进来的子包 dist 脱节。
  await writeFile(path.join(distRoot, 'index.js'), entryJs, 'utf8')
  await rewriteBundledImports()
}

prepareBundledTypes().catch((error) => {
  console.error('[vue-bag-admin] Failed to prepare bundled package assets.')
  console.error(error)
  process.exitCode = 1
})
