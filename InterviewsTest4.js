// Interviews based on the CodigoMentor youtube channel
// My own scheme of solution
//
console.log(`%c TEST #4`, 'font-weight:bold; font-size:24px;');
console.log('1.-------String Reverse-------');
// 1.- String Reverse
// DATA:
const str = 'alexander';
console.log('Data: ', str);

// EXPECTED:
const expectedTest4 = 'rednaxela';
console.log('Expected: ', expectedTest4);

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
expectedTest4 === result
	? console.log(`%c TEST PASS`, 'color:green; font-weight:bold;')
	: console.error(`%c TEST FAIL`, 'color:red; font-weight:bold;');

console.log('2.-------String Reverse FOR LOOP-------');

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
	: console.error(`%c TEST FAIL`, 'color:red; font-weight:bold;');

console.log('3.-------Factorial-------');

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
	// If num = 0 or num = 1 return 1, else if num > 1 continue the process of multiply the number
	if (num === 0 || num === 1) {
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
	: console.error(`%c TEST FAIL`, 'color:red; font-weight:bold;');

console.log('4.-------Factorial for loop-------');

// 4.- Find the factorial value of a number  using a "for loop"

// DATA: use the same data as above
console.log('Data: ', num);

// EXPECTED: use the same data as above
console.log('Expected: ', factorialExpected);

// CODE:

function factorial2(num) {
	let total = 1;
	console.log('Step 1: ');
	for (let i = 0; i < num; i++) {
		console.log(num - i);
		// total = total * (num - i);
		total *= num - i;
	}
	return total;
}

const resultFactorial2 = factorial2(num);
console.log('Result: ', resultFactorial2);

// TEST:
factorialExpected === resultFactorial2
	? console.log(`%c TEST PASS`, 'color:green; font-weight:bold;')
	: console.error(`%c TEST FAIL`, 'color:red; font-weight:bold;');

console.log('5.-------Repeated-------');
// 5.- Find repeated elements in an Array
// DATA:
const ArrayRep = [2, 4, 5, 4, 7, 9, 5];
console.log('Data: ', ArrayRep);

// EXPECTED:
const repeatedExpected = [4, 5];
console.log('Expected: ', repeatedExpected);

//CODE:
function findDuplicates(arr) {
	let obj = {};
	let duplicates = [];

	for (let i = 0; i < arr.length; i++) {
		// console.log(arr[i]);
		// Step1: create an object with all numbers => obj[arr[i]] = 1
		// Step2: and if it number already exist => push to the Array (duplicates)
		obj[arr[i]] ? duplicates.push(arr[i]) : (obj[arr[i]] = 1);
	}

	console.log('Step1: ', obj);

	return duplicates;
}

const repeatedResult = findDuplicates(ArrayRep);
console.log('Result: ', repeatedResult);

//TEST:
// Arrays cannot be compared, transform to JSON to be able to compare the Arrays
JSON.stringify(repeatedExpected) === JSON.stringify(repeatedResult)
	? console.log(`%c TEST PASS`, 'color:green; font-weight:bold;')
	: console.error(`%c TEST FAIL`, 'color:red; font-weight:bold;');

console.log('6.-------Coins-------');
// 6.- Find the coins needed to give change
// DATA:
// 25 cents coin
// 10 cents coin
// 5 cents coin
// 1 cent coin
const changeRequired = 99;
console.log('Change for: ', changeRequired);

const coins = [25, 10, 5, 1];
console.log('Coins: ', coins);

// CODE:
function coinChange(change) {
	let coinsObj = {};
	let restChange = change;
	for (let i = 0; i < coins.length; i++) {
		// console.log(coins[i]);
		if (Math.floor(restChange / coins[i]) > 0) {
			coinsObj[`${coins[i]} cents`] = Math.floor(restChange / coins[i]);
			restChange = restChange - coins[i] * Math.floor(restChange / coins[i]);
		}
	}
	return coinsObj;
}

const coinResult = coinChange(changeRequired);
console.log('Change: ', coinResult);
