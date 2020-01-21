import test from 'tape';
import lib from '../src';

const FOO = 'Fri Nov 01 2019';
const BAR = new Date('2019-12-20');
const BAZ = 1579581378734;

test('exports', t => {
	t.is(typeof lib, 'function');
	t.end();
});


test('exec :: string', t => {
	// Nov 2019
	const output = lib(FOO);
	t.true(Array.isArray(output));
	t.is(output.length, 5);
	t.deepEqual(output, [
		[ 0,  0,  0,  0,  0,  1,  2],
		[ 3,  4,  5,  6,  7,  8,  9],
		[10, 11, 12, 13, 14, 15, 16],
		[17, 18, 19, 20, 21, 22, 23],
		[24, 25, 26, 27, 28, 29, 30],
	]);
	t.end();
});


test('exec :: Date', t => {
	// Dec 2019
	const output = lib(BAR);
	t.true(Array.isArray(output));
	t.is(output.length, 5);
	t.deepEqual(output, [
		[ 1,  2,  3,  4,  5,  6,  7],
		[ 8,  9, 10, 11, 12, 13, 14],
		[15, 16, 17, 18, 19, 20, 21],
		[22, 23, 24, 25, 26, 27, 28],
		[29, 30, 31,  0,  0,  0,  0],
	]);
	t.end();
});


test('exec :: number', t => {
	// Jan 2020
	const output = lib(BAZ);
	t.true(Array.isArray(output));
	t.is(output.length, 5);
	t.deepEqual(output, [
		[ 0,  0,  0,  1,  2,  3,  4],
		[ 5,  6,  7,  8,  9, 10, 11],
		[12, 13, 14, 15, 16, 17, 18],
		[19, 20, 21, 22, 23, 24, 25],
		[26, 27, 28, 29, 30, 31,  0],
	]);
	t.end();
});

test('offset :: Monday start', t => {
	// Jan 2020
	const output = lib(BAZ, 1);
	t.true(Array.isArray(output));
	t.is(output.length, 5);
	t.deepEqual(output, [
		[ 0,  0,  1,  2,  3,  4,  5],
		[ 6,  7,  8,  9, 10, 11, 12],
		[13, 14, 15, 16, 17, 18, 19],
		[20, 21, 22, 23, 24, 25, 26],
		[27, 28, 29, 30, 31,  0,  0],
	]);
	t.end();
});

test('offset :: Tuesday start', t => {
	// Jan 2020
	const output = lib(BAZ, 2);
	t.true(Array.isArray(output));
	t.is(output.length, 5);
	t.deepEqual(output, [
		[ 0,  1,  2,  3,  4,  5,  6],
		[ 7,  8,  9, 10, 11, 12, 13],
		[14, 15, 16, 17, 18, 19, 20],
		[21, 22, 23, 24, 25, 26, 27],
		[28, 29, 30, 31,  0,  0,  0],
	]);
	t.end();
});

test('offset :: Friday start', t => {
	// Jan 2020
	const output = lib(BAZ, 5);
	t.true(Array.isArray(output));
	t.is(output.length, 6);
	t.deepEqual(output, [
		[ 0,  0,  0,  0,  0,  1,  2],
		[ 3,  4,  5,  6,  7,  8,  9],
		[10, 11, 12, 13, 14, 15, 16],
		[17, 18, 19, 20, 21, 22, 23],
		[24, 25, 26, 27, 28, 29, 30],
		[31,  0,  0,  0,  0,  0,  0],
	]);
	t.end();
});

test('offset :: Friday start :: negative', t => {
	// Jan 2020
	const output = lib(BAZ, -2);
	t.true(Array.isArray(output));
	t.is(output.length, 6);
	t.deepEqual(output, [
		[ 0,  0,  0,  0,  0,  1,  2],
		[ 3,  4,  5,  6,  7,  8,  9],
		[10, 11, 12, 13, 14, 15, 16],
		[17, 18, 19, 20, 21, 22, 23],
		[24, 25, 26, 27, 28, 29, 30],
		[31,  0,  0,  0,  0,  0,  0],
	]);
	t.end();
});

test('offset :: Friday start :: large negative', t => {
	// Jan 2020
	const output = lib(BAZ, -16);
	t.true(Array.isArray(output));
	t.is(output.length, 6);
	t.deepEqual(output, [
		[ 0,  0,  0,  0,  0,  1,  2],
		[ 3,  4,  5,  6,  7,  8,  9],
		[10, 11, 12, 13, 14, 15, 16],
		[17, 18, 19, 20, 21, 22, 23],
		[24, 25, 26, 27, 28, 29, 30],
		[31,  0,  0,  0,  0,  0,  0],
	]);
	t.end();
});

test('offset :: Saturday start', t => {
	// Jan 2020
	const output = lib(BAZ, -1);
	t.true(Array.isArray(output));
	t.is(output.length, 5);
	t.deepEqual(output, [
		[ 0,  0,  0,  0,  1,  2,  3],
		[ 4,  5,  6,  7,  8,  9, 10],
		[11, 12, 13, 14, 15, 16, 17],
		[18, 19, 20, 21, 22, 23, 24],
		[25, 26, 27, 28, 29, 30, 31],
	]);
	t.end();
});
