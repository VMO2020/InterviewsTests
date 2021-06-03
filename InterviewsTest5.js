// Some other Javascript TEST
//
console.log(`%c TEST #5`, 'font-weight:bold; font-size:24px;');
console.log('1.--------------');
//1.- Generates a random color, which is displayed on the console.

let randomColor = Math.floor(Math.random() * 256 * 256 * 256).toString(16);

console.log('Random color: #', randomColor);
console.log(`%c COLOR`, `color:#${randomColor}; font-size:60px;`);
