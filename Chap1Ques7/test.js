const setToZero = require('./C1Q7');

const matrix1 = [],
	matrix2 = [[1]],
	matrix3 = [[0, 1], [1, 1]],
	matrix4 = [[0, 1, 1], [1, 1, 1], [0, 1, 0], [1, 1, 0]];

test('Return empty matrix', () => {
	expect(setToZero(matrix1)).toEqual([]);
});

test('Return matrix without updated rows and columns', () => {
	expect(setToZero(matrix2)).toEqual([[1]]);
});

test('Return matrix with updated rows and columns', () => {
	expect(setToZero(matrix4)).toEqual([
		[0, 0, 0],
		[0, 1, 0],
		[0, 0, 0],
		[0, 0, 0],
	]);
});
