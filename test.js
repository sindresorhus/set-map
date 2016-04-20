import test from 'ava';
import m from './';

test(t => {
	t.true(m(new Set(['foo', 'bar']), x => 'yo' + x).has('yofoo'));
});
