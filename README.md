# markdown2text

Trivial utility project to convert markdown to plaintext using
`markdown-it`.

Slapped together in the middle of another project, don't expect
much.

## Usage

CLI:

```
npm i markdown2text
echo "# yo\ntext and a [link](https://gjp.cc)" | markdown2text
# Outputs:
#   yo
#   text and a link
```

Library:

```
const markdownToText = require('markdown2text');
console.log(markdownToText('a [link](https://gjp.cc)'));
// Outputs: "a link"
```
