var MarkdownIt = require('markdown-it'),
  md = new MarkdownIt();

function toText(token) {
  if (token.children) {
    return token.children.map(toText).join('');
  } else if (token.type === 'paragraph_close' || token.type === 'heading_close') {
    return '\n';
  }

  return token.content;
}

module.exports = function markdown2text(markdown) {
  return md.parse(markdown).map(toText).join('');
};
