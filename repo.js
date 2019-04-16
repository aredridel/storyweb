const klaw = require('klaw')
const { extname, basename } = require('path')
const vfile = require('to-vfile')

require('./vfilex')

class Repo {
    constructor(root, process) {
        this.root = vfile(root)
        this.process = process
    }

    async *[Symbol.asyncIterator]() {
        for await (const file of klaw(this.root, {
            filter: x => basename(x) != '.git' && basename(x) != 'node_modules'
        })) {
            if (extname(file.path) == '.md') yield this.read(file.path)
        }
    }

    async read(path) {
        const vf = await vfile.read(file.path, 'utf-8')
        if (this.process) {
            await this.process(vf)
        }
        return vf
    }
}

module.exports = Repo
