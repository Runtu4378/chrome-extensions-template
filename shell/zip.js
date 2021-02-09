const path = require('path')
const AdmZip = require('adm-zip')

const packageJSON = require('../package.json')

const extensionsName = packageJSON.name
const extensionsVersion = packageJSON.version

const zip = new AdmZip()

zip.addLocalFolder(
  path.resolve(__dirname, '../extensions'),
  extensionsName,
)

zip.writeZip(path.resolve(__dirname, `../${extensionsName}_${extensionsVersion}.zip`))
