// Instructions: Write an algorithm such that if an element in an MxN matrix is 0, it's entire row and column is set to 0

/*
 * @param {object} an MxN matrix
 * @return {object} the modified matrix
 */
const setToZero = matrix => {
	// if an empty matrix has been supplied
	if (!matrix.length) {
		return matrix;
	}

	// the number of rows and columns
	const mRows = matrix.length,
		mCols = matrix[0].length;

	// the affected rows and columns
	let rows = {},
		cols = {};

	// Time complexity: O(MN), must go through each item at least once
	for (let x = 0; x < mRows; x++) {
		for (let y = 0; y < mCols; y++) {
			if (matrix[x][y] === 0) {
				rows[x] = 1;
				cols[y] = 1;
			}
		}
	}

	// if the row or column exists within the affected objects, set the matrix val to 0
	for (let x = 0; x < mRows; x++) {
		for (let y = 0; y < mCols; y++) {
			if (rows[x] || cols[y]) {
				matrix[x][y] = 0;
			}
		}
	}
	return matrix;
};

module.exports = setToZero;

/*** Uncomment for testing in Node without using jest/test.js file ***/
// // print matrix in a readable form
// const prettyPrint = matrix => {
// 	// print each row of the matrix
// 	for (let row = 0; row < matrix.length; row++) {
// 		console.log(matrix[row]);
// 	}
// };

// // sample matrices
// const matrix1 = [],
// 	matrix2 = [[1, 0]],
// 	matrix3 = [[0, 1], [1, 1]],
// 	matrix4 = [[0, 1, 1], [1, 1, 1], [0, 1, 0], [1, 1, 0]];

// // tests
// prettyPrint(setToZero(matrix1));
// prettyPrint(setToZero(matrix2));
// prettyPrint(setToZero(matrix3));
// prettyPrint(setToZero(matrix4));
