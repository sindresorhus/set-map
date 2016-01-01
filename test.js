import test from 'ava';
import fn from './';

test(t => {
	t.true(fn(new Set(['foo', 'bar']), x => 'yo' + x).has('yofoo'));
});
