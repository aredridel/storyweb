const unified = require('unified')

const { promisify } = require('util');
const writeFile = promisify(require('fs').writeFile)
const url = require('url')

const parser = require('./parser')

module.exports = async function (node) {
	const path = url.fileURLToPath(node.url)
    const content = parser.stringify(node.ast)
	const file = await writeFile(path, content)
}
