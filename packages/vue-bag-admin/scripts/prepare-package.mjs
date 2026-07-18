import { cp, mkdir, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const packageRoot = path.resolve(__dirname, '..')
const distRoot = path.join(packageRoot, 'dist')

const bundledPackages = [
  ['core', path.resolve(packageRoot, '../core/dist')],
  ['request', path.resolve(packageRoot, '../request/dist')],
  ['ui', path.resolve(packageRoot, '../ui/dist')],
  ['host-vue', path.resolve(packageRoot, '../host-vue/dist')]
]

async function prepareBundledTypes() {
  await mkdir(distRoot, { recursive: true })

  for (const [folderName, sourceDir] of bundledPackages) {
    const targetDir = path.join(distRoot, folderName)
    await rm(targetDir, { recursive: true, force: true })
    await cp(sourceDir, targetDir, { recursive: true })
  }

  const entryDts = `${bundledPackages
    .map(([folderName]) => `export * from './${folderName}/index';`)
    .join('\n')}\n`

  await writeFile(path.join(distRoot, 'index.d.ts'), entryDts, 'utf8')
}

prepareBundledTypes().catch((error) => {
  console.error('[vue-bag-admin] Failed to prepare bundled package assets.')
  console.error(error)
  process.exitCode = 1
})
