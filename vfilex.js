const { pathToFileURL, fileURLToPath } = require('url')

Object.defineProperties(require('vfile').prototype, {
    url: {
        get: function () {
            return pathToFileURL(this.path)
        },
        set: function (u) {
            this.path = fileURLToPath(u)
        },
        enumerable: true
    }

})
