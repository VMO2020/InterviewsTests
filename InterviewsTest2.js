// Interviews based on the Carlos Azaustre youtube channel
// https://www.youtube.com/channel/UCJgGc8pQO1lv04VXrBxA_Hg
//
console.log(`%c TEST #2`, 'font-weight:bold; font-size:24px;');
console.log('1.-------Create an object-------');
// 1.- Create an object with a "hello" method that write "Hello <name>" in the console

const myObject = {
	name: 'Victor',
	hello: () => {
		console.log('Hello', myObject.name);
	},
};

myObject.hello();

console.log('2.-------Inmutable-------');
// 2.- How would you make the <name> inmutable?
// Using Object.freeze(obj);

// TEST:
// Changing the object <name> value
myObject.name = 'Alex';
myObject.hello();

// CODE:
Object.freeze(myObject);
myObject.name = 'Pedro'; // log: Hello Alex
myObject.hello();

console.log('3.-------Occur the most-------');
// 3.- Write a function that logs the 5 cities that occur the most in the array below
// in order from the most number of occurrences to least.

const citiesList = [
	'nashville',
	'nashville',
	'los angeles',
	'nashville',
	'memphis',
	'barcelona',
	'los angeles',
	'sevilla',
	'madrid',
	'canary islands',
	'barcelona',
	'madrid',
	'nashville',
	'barcelona',
	'london',
	'berlin',
	'madrid',
	'nashville',
	'london',
	'madrid',
];

// CODE:

function logMostOcurrCities() {
	// Create an objetc with key= "city name" and value= "repetition counter"
	// city name = cities[city]
	// city value => If city name don't exist in a new array "cities" put "1"
	// else plus "+" 1
	const cities = {};
	citiesList.forEach((city) => {
		cities[city] = !cities[city] ? 1 : (cities[city] += 1);
	});

	console.log('cites Object: ', cities);

	// Change the object to array, to can sorted it: Object.keys(cities);
	// And use map function to include the occurance inside the array

	return Object.keys(cities).map((city) => ({
		name: city,
		times: cities[city],
	}));
}

const citiesArray = logMostOcurrCities();
console.log('cities Array: ', citiesArray);

// array.sort() method converts the element types into strings and then sorts them
// Descendent order: array.sort((a, b) => (b - a))
// This method change the original array
// Sorted by times:
const citiesArraySorted = citiesArray.sort((a, b) => b.times - a.times);
console.log('Array of cities ordered: ', citiesArraySorted);

// Only five cites:
// .slice(start, end)
console.log('Array of 5 cities ordered: ', citiesArraySorted.slice(0, 5));

// Only 5 cities name ordered
console.log(
	'Array of 5 cities names ordered: ',
	citiesArraySorted.slice(0, 5).map((city) => city.name)
);
