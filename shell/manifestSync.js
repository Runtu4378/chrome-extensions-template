const path = require('path')
const fs = require('fs')

const ENCODING = 'utf-8'
const SYNC_KEY = {
  'name': 'name',
  'version': 'version',
  'description': 'description',
}

const readJson = (filePath) => {
  const buffer = fs.readFileSync(filePath, ENCODING)
  const json = JSON.parse(buffer.toString())

  return json
}

const manifestPath = path.resolve(__dirname, '../extensions/manifest.json')
const packageJSONPath = path.resolve(__dirname, '../package.json')

const manifestContent = readJson(manifestPath)
const packageJSONContent = readJson(packageJSONPath)

console.log(manifestContent)
console.log(packageJSONContent)

Object.keys(SYNC_KEY).forEach(key => {
  const manifestValueKey = SYNC_KEY[key]

  console.log(key)
  console.log(key in packageJSONContent)
  if (key in packageJSONContent) {
    manifestContent[manifestValueKey] = packageJSONContent[key]
  }
})

fs.writeFileSync(manifestPath, new Buffer(JSON.stringify(manifestContent, null, 2), ENCODING))
