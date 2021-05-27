// Interviews based on the HOLA MUNDO youtube channel
// https://www.youtube.com/channel/UC4FHiPgS1KXkUMx3dxBUtPg
// My own scheme of solution

// 1.- Multiply two number without using "*" --------------------------------
console.log('1.--------------');
// DATA:
const a = 50;
const b = 50;
console.log('Data: a: ' + a + ' b: ' + b);

// EXPECTED:
const expected = (a, b) => {
	return a * b;
};
const expectedResult = expected(a, b);
console.log('Expected: ', expectedResult);

// CODE:
const multiply = (a, b) => {
	let result = 0;
	const positiveB = b > 0 ? true : false;

	for (i = 0; i < Math.abs(b); i++) {
		result = positiveB ? result + a : result - a;
	}

	return result;
};

const multiplyResult = multiply(a, b);
console.log('Result: ', multiplyResult);

// TEST:
expectedResult === multiplyResult
	? console.log(`%c TEST PASS`, 'color:green; font-weight:bold;')
	: console.log(`%c TEST FAIL`, 'color:red; font-weight:bold;');

console.log('2.--------------');

// 2.- Find the biggest value of an array using just one line by iterating of code ------------

// DATA:
const arrayData2 = [50, -1500, 1000, 0, 1, 54];
console.log('Data: ', arrayData2);

// EXPECTED:
const expectedResult2 = 1000;
console.log('Expected: ', expectedResult2);

//CODE:
// The reduce() method applies a reducer function on each of the array elements and
// returns an output value.
// reduce((accumulator, currentValue) => { ... }, initialValue)
// "acc" have a initialValue = 0)
const biggest = (arr) => arr.reduce((acc, val) => (acc > val ? acc : val));

const biggestResult = biggest(arrayData2);
console.log('Result: ', biggestResult);

// TEST:
expectedResult2 === biggestResult
	? console.log(`%c TEST PASS`, 'color:green; font-weight:bold;')
	: console.log(`%c TEST FAIL`, 'color:red; font-weight:bold;');

console.log('3.--------------');

// 3.- Build a new array without undefined, null or 0 values

// DATA:
const arrayData3 = [1, undefined, null, 0, 2, 3];
console.log('Data: ', arrayData3);

// EXPECTED:
const expectedResult3 = [1, 2, 3];
console.log('Expected: ', expectedResult3);

// CODE:
const clean = (arr) =>
	arr.reduce((acc, val) => {
		if (val) {
			acc.push(val);
		}
		return acc;
	}, []);

const cleanResult = clean(arrayData3);
console.log('Result: ', cleanResult);

// TEST:
JSON.stringify(expectedResult3) == JSON.stringify(cleanResult)
	? console.log(`%c TEST PASS`, 'color:green; font-weight:bold;')
	: console.log(`%c TEST FAIL`, 'color:red; font-weight:bold;');

console.log('4.--------------');

// 4.- Flatten an array one level ----------------------------------------------------------

// DATA:
const arrayData4 = [[1, 2], [[3, 4]], [1, []]];
console.log('Data: ', arrayData4);

// EXPECTED:
const expectedResult4 = [1, 2, [3, 4], 1, []];
console.log('Expected: ', expectedResult4);

// CODE:
// The concat() method merges one or more arrays and returns a merged array.
// const merged = firstArray.concat(secondArray);

const flatten = (arr) => arr.reduce((acc, val) => acc.concat(val), []);

const flattenResult = flatten(arrayData4);
console.log('Result: ', flattenResult);

// TEST:
JSON.stringify(expectedResult4) == JSON.stringify(flattenResult)
	? console.log(`%c TEST PASS`, 'color:green; font-weight:bold;')
	: console.log(`%c TEST FAIL`, 'color:red; font-weight:bold;');

console.log('5.--------------');
