import test from 'ava';
import setMap from './index.js';

test('main', t => {
	t.true(setMap(new Set(['foo', 'bar']), value => `yo${value}`).has('yofoo'));
});
