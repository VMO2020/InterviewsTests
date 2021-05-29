// Interviews based on the CodigoMentor youtube channel
// My own scheme of solution

console.log(`%c TEST #4`, 'font-weight:bold; font-size:24px;');
console.log('1.--------------');
// 1.- String Reverse
// DATA:
const str = 'alexander';
console.log('Data: ', str);

// EXPECTED:
const expected = 'rednaxela';
console.log('Expected: ', expected);

//CODE:
function reverseString(str) {
	// Step 1: split('')
	const reverseSTR1 = str.split('');
	console.log('Step1', reverseSTR1);
	// Step 2: reverse()
	const reverseSTR2 = str.split('').reverse();
	console.log('Step2', reverseSTR2);
	// Step 3: join('')
	const reverseSTR = str.split('').reverse().join('');

	return reverseSTR;
}

const result = reverseString(str);
console.log('Step3 Result: ', result);

//TEST:
expected === result
	? console.log(`%c TEST PASS`, 'color:green; font-weight:bold;')
	: console.log(`%c TEST FAIL`, 'color:red; font-weight:bold;');

console.log('2.--------------');

// 2.- String Reverse using FOR LOOP
// DATA:
const strFOR = 'helloWorld';
console.log('Data: ', strFOR);

// // EXPECTED:
const expectedFOR = 'dlroWolleh';
console.log('Expected: ', expectedFOR);

// //CODE:
function reverseString2(strFOR) {
	let reverseStrFor = '';

	for (let i = strFOR.length - 1; i >= 0; i--) {
		// console.log(strFOR[i]);
		reverseStrFor += strFOR[i];
	}

	return reverseStrFor;
}

const resultFOR = reverseString2(strFOR);
console.log('Result: ', resultFOR);

// //TEST:
expectedFOR === resultFOR
	? console.log(`%c TEST PASS`, 'color:green; font-weight:bold;')
	: console.log(`%c TEST FAIL`, 'color:red; font-weight:bold;');

console.log('3.--------------');

// 3.- Find the factorial value of a number  using a "recursive function"
// 5! = 5 x 4 x 3 x 2 x 1 => 120
// 4! = 4 x 3 x 2 x 1 => 24
// 3! = 3 x 2 x 1 => 6

// DATA:
let num = 5;
console.log('Data: ', num);

// EXPECTED:
let factorialExpected = 120;
console.log('Expected: ', factorialExpected);

// CODE:
function factorial(num) {
	// If num <= 1 return 1, else if num > 1 continue the process of multiply the number
	if (num <= 1) {
		return 1; // Finish the process
	} else {
		return num * factorial(num - 1); // Recursive (calls itself during its execution)
	}
}

const resultFactorial = factorial(num);
console.log('Result: ', resultFactorial);

// TEST:
factorialExpected === resultFactorial
	? console.log(`%c TEST PASS`, 'color:green; font-weight:bold;')
	: console.log(`%c TEST FAIL`, 'color:red; font-weight:bold;');
