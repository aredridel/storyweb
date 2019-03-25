const klaw = require('klaw')
const { extname } = require('path')

class Repo {
    constructor(root) {
        this.root = root
    }

    get files() {
        return klaw(this.root, {
            filter: x => x != '.git' && extname(x) == '.md'
        })
    }
}

module.exports = Repo
