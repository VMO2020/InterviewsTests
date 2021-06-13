console.log(`%c TEST #3`, 'font-weight:bold; font-size:24px;');
console.log('1.-------FIZZBUZZ------- ');
// console.log('1.--------------');
// 1.- FIZZBUZZ function for numbers from 1 to 100
// multiple of 3, log Fizz
// multiple of 5, log Buzz
// multiple of both, log FizzBuzz
//
function fizzbuzz(num) {
	for (let i = 1; i <= num; i++) {
		let message = '';
		if (i % 3 == 0) {
			message += 'Fizz';
		}
		if (i % 5 == 0) {
			message += 'Buzz';
		}
		console.log(message ? message : i);
	}
}

fizzbuzz(50);

console.log('2.-------First non repeating-------');
// 2.- Find the first non repeating character in an Array (Amazon Test)
// "aaabcccdeeef" => "b"
// "abcbad" => "c"
// "abcabcabc" => "_"

// DATA:
const arrayDat2 = 'aaabcccdeeef';
// const arrayData2 = 'abcbad';
// const arrayData2 = 'abcabcabc';
console.log('Data: ', arrayDat2);

// EXPECTED
const expected2 = 'b';
// const expected2 = 'c';
// const expected2 = '_';
console.log('Expected: ', expected2);

// CODE
const findNotRepeted = (array) => {
	let result = '';
	let resultCounter = {};
	let resultFiltered = [];
	// First Step: Split
	const splited = array.split('');
	console.log('Letter splitted: ', splited);
	// Second Step: count using map
	splited.map((letter) => {
		resultCounter[letter] = !resultCounter[letter]
			? 1
			: (resultCounter[letter] += 1);
	});
	console.log('Repeted counter: ', resultCounter);
	// Third Step: filter using map (Transform to an array)
	Object.entries(resultCounter).map((letter) => {
		// console.log(letter);
		letter[1] === 1 && resultFiltered.push(letter);
	});

	// Four step: Add '_' at the end of the array
	resultFiltered.push('_');
	console.log('ResultFiltered: ', resultFiltered);

	// Fifth step: Result (First key of the array)
	result = resultFiltered[0][0];

	console.log('Result: ', result);

	return result;
};

const result2 = findNotRepeted(arrayDat2);
// console.log(result2);

// TEST
expected2 === result2
	? console.log(`%c TEST PASS`, 'color:green; font-weight:bold;')
	: console.error(`%c TEST FAIL`, 'color:red; font-weight:bold;');

console.log('3.-------First Duplicate-------');
// 3.- Find the first Duplicate (Google Test)
// [1,2,1,2,3,3] => 1
// [2,1,3,5,3,2] => 3
// [1,2,3,4,5,6] => -1

// DATA
// const arrayDat3 = [1, 2, 1, 2, 3, 3];
const arrayDat3 = [2, 1, 3, 5, 3, 2];
// const arrayDat3 = [1, 2, 3, 4, 5, 6];
console.log('Data: ', arrayDat3);

// EXPECTED
// const expected3 = 1;
const expected3 = 3;
// const expected3 = -1;
console.log('Expected: ', expected3);

// CODE
const firstDuplicate = (array) => {
	let result = -1;
	let counter = {};
	let flag = 0;
	array.map((num) => {
		counter[num] = !counter[num] ? 1 : (counter[num] += 1);
		counter[num] > 1 && flag == 0 && ((result = num), (flag = 1));
	});

	console.log('counter', counter);

	return result;
};

const result3 = firstDuplicate(arrayDat3);
console.log('Result: ', result3);

// TEST
expected3 === result3
	? console.log(`%c TEST PASS`, 'color:green; font-weight:bold;')
	: console.log(`%c TEST FAIL`, 'color:red; font-weight:bold;');
