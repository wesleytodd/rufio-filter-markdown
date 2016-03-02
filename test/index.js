/* global describe, it */
var assert = require('assert');
var fs = require('fs');
var path = require('path');
var markdownFilter = require('../')();
var file = path.join(__dirname, 'fixtures', 'item.md');
var renderedFile = '<h1>Test File</h1>\n<p>With some <strong>content</strong> and <a href="http://rufiojs.com">a link</a>.</p>\n';

describe('rufio-filter-markdown', function () {
	it('should load and parse markdown from a stream', function (done) {
		fs.createReadStream(file)
			.pipe(markdownFilter())
			.on('data', function (c) {
				assert.equal(c.toString(), renderedFile);
				done();
			});
	});
});
