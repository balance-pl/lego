const { writeFileSync } = require('fs')
const { resolve } = require('path')

function requireUncached(module) {
  delete require.cache[require.resolve(module)]
  return require(module)
}

const pkgFilePath = resolve(__dirname, '../dist/package.json')
const pkgJson = requireUncached(pkgFilePath)
delete pkgJson.scripts.prepare

writeFileSync(pkgFilePath, JSON.stringify(pkgJson, null, 2))
