'use strict';
module.exports = function (val, cb) {
	var set = new Set();

	val.forEach(function (el) {
		set.add(cb(el));
	});

	return set;
};
