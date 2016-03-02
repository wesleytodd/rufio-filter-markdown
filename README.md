# rufio-filter-markdown

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Build Status](https://travis-ci.org/wesleytodd/rufio-filter-markdown.svg?branch=master)](https://travis-ci.org/wesleytodd/rufio-filter-markdown)
[![js-happiness-style](https://img.shields.io/badge/code%20style-happiness-brightgreen.svg)](https://github.com/JedWatson/happiness)

[npm-image]: https://img.shields.io/npm/v/rufio-filter-markdown.svg
[npm-url]: https://npmjs.org/package/rufio-filter-markdown
[downloads-image]: https://img.shields.io/npm/dm/rufio-filter-markdown.svg
[downloads-url]: https://npmjs.org/package/rufio-filter-markdown

## Install

```
$ npm install --save rufio-filter-markdown
```

## Usage

```javascript
var fs = require('fs');
var markdownFilter = require('rufio-filter-makrdown')({
	// Options defaults
	remarkable: 'commonmark'
});

// Pipe file content to the filter
fs.createReadStream('./file.md')
	.pipe(markdownFilter())
	.on('data', function (c) {
		// `c` is the rendered markdown as a buffer
		console.log(c.toString());
	});
```
