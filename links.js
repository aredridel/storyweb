const url = require('url')

module.exports = function getLinks(base, ast) {
  if (ast.type == 'link') {
    return [ast]
  } else if (ast.children) {
    return ast.children.map(e => getLinks(base, e)).reduce((a, e) => a.concat(e), [])
  } else {
    return []
  }
}
