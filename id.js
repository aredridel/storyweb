const crypto = require('crypto')
const basex = require('base-x')
const base = basex('123456789ABCDEFGHJKLMNPQRSTUVWXYZ')

module.exports = function getId() {
    return base.encode(crypto.randomBytes(4))
}
