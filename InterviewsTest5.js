// Some other Javascript TEST
//
console.log(`%c TEST #5`, 'font-weight:bold; font-size:24px;');
console.log('1.--------------');
//1.- Generates a random color, which is displayed on the console.

let randomColor = Math.floor(Math.random() * 256 * 256 * 256).toString(16);

console.log('Random color: #', randomColor);
console.log(`%c COLOR`, `color:#${randomColor}; font-size:60px;`);

console.log('2.--------------');
//2.- Creates a square of "*", using custom size

//DATA:
const size = 4;

// EXPECTED:

// ****
// *  *
// *  *
// ****

// CODE:
// Step 1: Create Top and bottom function
function topBottom(num) {
	let bar = '';
	for (let i = 0; i < num; i++) {
		bar += '*';
	}
	return bar;
}

// Step 2: Create a square drawing function
function drawSquare(num) {
	let square = '';
	// Top + new line => '\n'
	square += topBottom(num) + '\n';

	// in the middle
	let row = '';
	for (let j = 0; j < num - 2; j++) {
		for (let k = 0; k < num; k++) {
			if (k == 0 || k == num - 1) {
				row += '*';
			} else {
				row += ' ';
			}
		}
		square += row + '\n';

		row = '';
	}

	// Bottom
	square += topBottom(num);

	return square;
}

// RESULT:
console.log(`%c${drawSquare(size)}`, `font-size:20px`);
