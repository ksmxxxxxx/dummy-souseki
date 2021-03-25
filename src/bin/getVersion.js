import fs from 'fs'
const packageJson = JSON.parse(fs.readFileSync(new URL('../../package.json', import.meta.url), 'utf-8'))

const getVersion = () => { return packageJson.version }

export default getVersion
