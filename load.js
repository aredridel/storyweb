const parser = require('./parser')

const { promisify } = require('util');
const readFile = promisify(require('fs').readFile)
const url = require('url')

const vfile = require('to-vfile')

module.exports = async function (u) {
	const path = url.fileURLToPath(u)
	const file = await vfile.read(path, 'utf-8')
    const ast = parser.parse(file)
    return { type: 'file', url: u, ast }
}
