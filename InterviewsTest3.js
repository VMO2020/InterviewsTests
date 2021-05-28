console.log(`%c TEST #3`, 'font-weight:bold; font-size:24px;');
// console.log('1.--------------');
// 1.- FIZZBUZZ function for numbers from 1 to 100
// multiple of 3, log Fizz
// multiple of 5, log Buzz
// multiple of both, log FizzBuzz

for (let i = 1; i <= 100; i++) {
	let message = '';
	if (i % 3 == 0) {
		message += 'Fizz';
	}
	if (i % 5 == 0) {
		message += 'Buzz';
	}
	console.log(message ? message : i);
}
