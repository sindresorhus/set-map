'use strict';
var test = require('ava');
var setMap = require('./');

test(function (t) {
	t.assert(setMap(new Set(['foo', 'bar']), function (el) {
		return 'yo' + el;
	}).has('yofoo'));

	t.end();
});
