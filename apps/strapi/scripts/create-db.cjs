const mysql = require('mysql2/promise')
const fs = require('node:fs')
const path = require('node:path')

const loadDotEnv = () => {
  const envPath = path.join(process.cwd(), '.env')
  if (!fs.existsSync(envPath))
    return

  const raw = fs.readFileSync(envPath, 'utf8')
  for (const line of raw.split(/\r?\n/)) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#'))
      continue
    const eqIndex = trimmed.indexOf('=')
    if (eqIndex <= 0)
      continue
    const key = trimmed.slice(0, eqIndex).trim()
    let value = trimmed.slice(eqIndex + 1).trim()
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'")))
      value = value.slice(1, -1)
    if (process.env[key] == null)
      process.env[key] = value
  }
}

const main = async () => {
  loadDotEnv()

  const host = process.env.DATABASE_HOST || '127.0.0.1'
  const port = Number(process.env.DATABASE_PORT || 3306)
  const user = process.env.DATABASE_USERNAME || 'root'
  const password = process.env.DATABASE_PASSWORD || '123456'
  const database = process.env.DATABASE_NAME || 'vue_bag_admin'

  const connection = await mysql.createConnection({
    host,
    port,
    user,
    password,
    multipleStatements: true,
  })

  const safeDbName = database.replace(/`/g, '``')
  await connection.query(
    `CREATE DATABASE IF NOT EXISTS \`${safeDbName}\` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`
  )

  const [rows] = await connection.query('SHOW DATABASES LIKE ?', [database])
  await connection.end()

  if (!Array.isArray(rows) || rows.length === 0) {
    throw new Error(`Database not found after creation attempt: ${database}`)
  }

  process.stdout.write(`created database ${database}\n`)
}

main().catch((err) => {
  process.stderr.write(`${err?.stack || err}\n`)
  process.exit(1)
})
