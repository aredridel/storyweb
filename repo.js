const klaw = require('klaw')
const { extname, basename } = require('path')
const vfile = require('to-vfile')

class Repo {
    constructor(root) {
        this.root = root
    }

    async *[Symbol.asyncIterator]() {
        for await (const file of klaw(this.root, {
            filter: x => basename(x) != '.git' && basename(x) != 'node_modules'
        })) {
            if (extname(file.path) == '.md') yield vfile.read(file.path, 'utf-8')
        }
    }
}

module.exports = Repo
