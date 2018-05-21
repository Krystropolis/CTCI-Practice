// Instructions: Given 2 strings, write code to check whether s2 is a rotation of s1, using only one call to isSubstring

/*
 * @param {string} s1 the initial string
 * @param {string} s2 the string to compare
 * @return {boolean} true is s2 is a substring of s1
 */
const isSubstring = (s1, s2) => {
	if (s2 && s2.length < s1.length) {
		let index = s1.indexOf(s2);
		if (index !== -1) {
			return true;
		}
	}
	return false;
};

/*
 * @param {string} s1 the initial string
 * @param {string} s2 the string to compare
 * @return {boolean} true is s2 is a rotation of s1
 */
const isRotation = (s1, s2) => {
	// combine s1 with itself, all possible rotations will be covered
	const dupS1 = s1 + s1;
	return isSubstring(dupS1, s2);
};

/* TESTS */
// should return true
console.log(isRotation('applebananahoping', 'opingapplebananah'));
// should return false
console.log(isRotation('applebananahoping', 'opingapplebononah'));
// should return false
console.log(isRotation('', 'opingapplebononah'));
// should return false
console.log(isRotation('applebananahoping', ''));
// should return false
console.log(isRotation('applebananahoping', 'hopingbananaapple'));
