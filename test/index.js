import test from 'tape';
import lib from '../src';

test('exports', t => {
	t.is(typeof lib, 'function');
	t.end();
});
