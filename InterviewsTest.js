// Interviews based on the HOLA MUNDO youtube channel
// https://www.youtube.com/channel/UC4FHiPgS1KXkUMx3dxBUtPg
// My own scheme of solution

console.log(`%c TEST #1`, 'font-weight:bold; font-size:24px;');
console.log('1.--------------');
// 1.- Multiply two number without using "*" --------------------------------
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
// Because I am using arrays, I put an empty array [] like second argument
// "acc" have a initialValue = 0)
const clean = (arr) =>
	arr.reduce((acc, val) => {
		// If val is true, it is different from undefined, null or 0, do that
		if (val) {
			acc.push(val);
		}
		return acc;
	}, []);

const cleanResult = clean(arrayData3);
console.log('Result: ', cleanResult);

// TEST:
// Arrays cannot be compared, transform to JSON to be able to compare the Arrays
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

// 5.- Flatten past array another level ----------------------------------------------------------

// DATA:
console.log('Data: ', flattenResult);

// EXPECTED:
const expectedResult5 = [1, 2, 3, 4, 1];
console.log('Expected: ', expectedResult5);

// Using the same function above
const flattenResult2 = flatten(flattenResult);
console.log('Result: ', flattenResult2);

// TEST:
// Arrays cannot be compared, transform to JSON to be able to compare the Arrays
JSON.stringify(expectedResult5) == JSON.stringify(flattenResult2)
	? console.log(`%c TEST PASS`, 'color:green; font-weight:bold;')
	: console.log(`%c TEST FAIL`, 'color:red; font-weight:bold;');

console.log('6.--------------');

// 6.- Write a function that counts a most repeated word in array --------------------

// DATA:
const arrayData6 = 'This is a repeated word counter test, this is a big a';
console.log('Data: ', arrayData6);

// EXPECTED:
const expectedResult6 = ['a', 3];
console.log('Expected: a:', expectedResult6);

// CODE:
// pass array to lowercase:
const lowered = arrayData6.toLocaleLowerCase();
console.log('Step1 lowered: ', lowered);

// split array, make an array with words separated by space:
const splitted = lowered.split(' ');
console.log('Step2 splitted: ', splitted);

const repeated = (src) => {
	// Create an objetc with key= "word" and value= "repetition counter"
	const wordsObject = {};
	src.forEach((word) => {
		wordsObject[word] = !wordsObject[word] ? 1 : (wordsObject[word] += 1);
	});

	return wordsObject;
};

const wordsObject = repeated(splitted);
console.log('Step3 wordsObject: ', wordsObject);

// Objet to Array
const wordsArray = Object.entries(wordsObject);
console.log('Step4 wordsArray: ', wordsArray);

// Select the most occurance word
const wordResult = wordsArray.reduce((acc, val) =>
	acc[1] > val[1] ? acc : val
);
console.log('Result', wordResult);

// TEST:
// Arrays cannot be compared, transform to JSON to be able to compare the Arrays
JSON.stringify(expectedResult6) == JSON.stringify(wordResult)
	? console.log(`%c TEST PASS`, 'color:green; font-weight:bold;')
	: console.log(`%c TEST FAIL`, 'color:red; font-weight:bold;');

console.log('7.--------------');
// 7.- Palindrome: Verify a word, phrase, or sequence that reads the same backwards as forwards

// DATA:
const arrayData7 = 'Do geese see God';
const arrayData7b = 'palabras que no son palindromos';
console.log('Data: ', arrayData7);

// EXPECTED:
const expectedResult7 = true;
console.log('Expected:', expectedResult7);

// CODE:
// replace or remove spaces
const replaceTXT = arrayData7.replace(/\s/g, '');
console.log('Step1 remove space: ', replaceTXT);

// toLowerCase
const lowerTXT = replaceTXT.toLowerCase();
console.log('Step2 toLowerCase: ', lowerTXT);

// split array, make an array:
const splittedTXT = lowerTXT.split('');
console.log('Step3 toArray: ', splittedTXT);

// reverse order of the array
const reverseTXT = splittedTXT.reverse();
console.log('Step4 reverse: ', reverseTXT);

// join the text
const joinTXT = reverseTXT.join('');
console.log('Step5 join: ', joinTXT);

// TEST:
lowerTXT == joinTXT
	? console.log(`%c TEST PASS`, 'color:green; font-weight:bold;')
	: console.log(`%c TEST FAIL`, 'color:red; font-weight:bold;');
