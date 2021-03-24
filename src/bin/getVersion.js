import fs from 'fs'
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf-8'))

const getVersion = () => { return packageJson.version }

export default getVersion
