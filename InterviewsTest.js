// Interviews based on the HOLA MUNDO youtube channel
// https://www.youtube.com/channel/UC4FHiPgS1KXkUMx3dxBUtPg
// My own scheme of solution

// 1.- Multiply two number without using "*" --------------------------------
// DATA:
const a = 50;
const b = 50;

// EXPECTED:
const expected = (a, b) => {
	return a * b;
};
const expectedResult = expected(a, b);
console.log('Expected: ' + expectedResult);

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
console.log('Result: ' + multiplyResult);

// TEST:
expectedResult === multiplyResult
	? console.log(`%c TEST PASS`, 'color:green; font-weight:bold;')
	: console.log(`%c TEST FAIL`, 'color:red; font-weight:bold;');

console.log('--------------');

// 2.- Find the biggest value of an array using just one line by iterating of code ------------

// DATA:
const arrayData = [50, -1500, 1000, 0, 1, 54];

// EXPECTED:
const expectedResult2 = 1000;
console.log('Expected: ' + expectedResult2);

//CODE:
// reduce((accumulator, currentValue) => { ... }, initialValue)
// "acc" have a initialValue = 0)
const biggest = (arr) =>
	arrayData.reduce((acc, val) => (acc > val ? acc : val));

const biggestResult = biggest(arrayData);
console.log('Result: ' + biggestResult);

// TEST:
expectedResult2 === biggestResult
	? console.log(`%c TEST PASS`, 'color:green; font-weight:bold;')
	: console.log(`%c TEST FAIL`, 'color:red; font-weight:bold;');

console.log('--------------');

// 3.- Build a new array without undefined, null or 0 values

// DATA:
const arrayData2 = [1, undefined, null, 0, 2, 3];

// EXPECTED:
const expectedResult3 = [1, 2, 3];
console.log('Expected: ' + expectedResult3);

// CODE:
const clean = (arr) =>
	arrayData2.reduce((acc, val) => {
		if (val) {
			acc.push(val);
		}
		return acc;
	}, []);

const cleanResult = clean(arrayData2);
console.log('Result: ' + cleanResult);

// TEST:
JSON.stringify(expectedResult3) == JSON.stringify(cleanResult)
	? console.log(`%c TEST PASS`, 'color:green; font-weight:bold;')
	: console.log(`%c TEST FAIL`, 'color:red; font-weight:bold;');

console.log('--------------');

// 4.-
