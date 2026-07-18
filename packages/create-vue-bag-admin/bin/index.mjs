#!/usr/bin/env node

import { cp, mkdir, readdir, readFile, stat, writeFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const HELP_TEXT = `
Usage:
  create-vue-bag-admin <project-name> [options]

Options:
  --bag-version <version>  Set @bag/* dependency version, default: latest
  --template <name>        Template name, default: basic
  --force                  Allow writing into a non-empty target directory
  -h, --help               Show help
`.trim()

const TEXT_FILE_RE = /\.(json|ts|js|mjs|cjs|vue|html|md|env|css)$/i

const args = process.argv.slice(2)
if (args.length === 0 || args.includes('-h') || args.includes('--help')) {
  console.log(HELP_TEXT)
  process.exit(0)
}

const options = {
  bagVersion: 'latest',
  template: 'basic',
  force: false
}

const positionals = []

for (let index = 0; index < args.length; index += 1) {
  const arg = args[index]
  if (arg === '--bag-version') {
    options.bagVersion = args[index + 1] ?? options.bagVersion
    index += 1
    continue
  }
  if (arg === '--template') {
    options.template = args[index + 1] ?? options.template
    index += 1
    continue
  }
  if (arg === '--force') {
    options.force = true
    continue
  }
  positionals.push(arg)
}

const projectName = positionals[0]
if (!projectName) {
  console.error('Missing project name.\n')
  console.error(HELP_TEXT)
  process.exit(1)
}

const templateDir = path.resolve(__dirname, '../templates', options.template)
const targetDir = path.resolve(process.cwd(), projectName)

const pathExists = async (targetPath) => {
  try {
    await stat(targetPath)
    return true
  } catch {
    return false
  }
}

const ensureTargetDir = async () => {
  const exists = await pathExists(targetDir)
  if (!exists) {
    await mkdir(targetDir, { recursive: true })
    return
  }

  const entries = await readdir(targetDir)
  if (entries.length > 0 && !options.force) {
    console.error(`Target directory is not empty: ${targetDir}`)
    console.error('Use --force if you want to continue.')
    process.exit(1)
  }
}

const renderTemplateFiles = async (dirPath, replacements) => {
  const entries = await readdir(dirPath, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name)
    if (entry.isDirectory()) {
      await renderTemplateFiles(fullPath, replacements)
      continue
    }

    if (!TEXT_FILE_RE.test(entry.name)) {
      continue
    }

    const raw = await readFile(fullPath, 'utf8')
    const rendered = Object.entries(replacements).reduce(
      (content, [key, value]) => content.replaceAll(`__${key}__`, value),
      raw
    )
    await writeFile(fullPath, rendered, 'utf8')
  }
}

const run = async () => {
  const templateExists = await pathExists(templateDir)
  if (!templateExists) {
    console.error(`Unknown template: ${options.template}`)
    process.exit(1)
  }

  await ensureTargetDir()
  await cp(templateDir, targetDir, { recursive: true, force: true })
  await renderTemplateFiles(targetDir, {
    PROJECT_NAME: projectName,
    BAG_VERSION: options.bagVersion
  })

  console.log(`\nScaffold created at ${targetDir}\n`)
  console.log('Next steps:')
  console.log(`  cd ${projectName}`)
  console.log('  pnpm install')
  console.log('  pnpm dev')
  console.log('\nDemo account:')
  console.log('  username: admin')
  console.log('  password: 123456')
}

run().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error))
  process.exit(1)
})
