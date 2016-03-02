var through2 = require('through2');
var Remarkable = require('remarkable');

module.exports = function createMarkdownFilter (opts) {
	opts = opts || {};
	opts.remarkable = opts.remarkable || 'commonmark';

	// Only make one instance of remarkable
	var remarkable;

	return function markdownFilter (item) {
		var _content = '';
		remarkable = remarkable || new Remarkable(opts.remarkable);

		return through2(function (chunk, enc, done) {
			_content += chunk;
			done();
		}, function (done) {
			this.push(remarkable.render(_content));
			done();
		});
	};
};
