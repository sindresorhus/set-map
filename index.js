'use strict';
module.exports = function (val, cb) {
	if (!(val instanceof Set)) {
		throw new TypeError('Expected a Set');
	}

	var set = new Set();

	val.forEach(function (el) {
		set.add(cb(el));
	});

	return set;
};
