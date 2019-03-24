const unified = require('unified')
const markdown = require('remark-parse')
const stringify = require('remark-stringify')
const frontmatter = require('remark-frontmatter')
const squeeze = require('remark-squeeze-paragraphs')

const parser = unified()
    .use(markdown)
    .use(stringify)
	.use(frontmatter)
    .use(squeeze)

module.exports = parser
