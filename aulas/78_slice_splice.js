var arr = [1,2,3,4,5];

/*
	SLICE - Return a part of an array, don't modify the main array.
		.slice(start_index, end_index);
	- start_index: not included
*/

// Return itens of array starting from index 1
console.log( arr.slice(1) );

// The main arrays has not been modified 
console.log( arr );

// From index 0
console.log( arr.slice(0) );

// Return the two first itens from array
// The last value is not included
console.log( arr.slice(0,2) );

// Return the slice between value 2 and 4
console.log( arr.slice(1,4) ); 

// Return the last two values, with negative reference
console.log( arr.slice(-2) );

// Return a invalid interval
// Will return a empty array
console.log( arr.slice(2,1) );

/*
	SPLICE - Removes a slice from array and return the removed values,
			 this method modifies the main array.
		.splice(start_index, end_index);

*/
console.log( arr );

// Removes the values from third position
// .splice() will return the removed values
console.log( arr.splice(3) );

console.log( arr );

console.log( arr.push(4,5,6,7) );

console.log( arr );

// Remove 2, 3, 4 values from array
// .splice( <start index>, <how many elements will be removed> )
console.log( arr.splice(1,3) );

// The result of splice()
console.log( arr );

// Add itens with splice()
// From index 1, don't remove itens, add letter 'a'
console.log( arr.splice( 1, 0, 'a' ) );

console.log( arr );

// From index 2, putting more values and not removing itens
console.log( arr.splice( 2, 0, 'b', 'c', 'd' ) );

console.log( arr );

// Replacing 'a', 'b', 'c', 'd' for 2, 3, 4
// From index 1, remove 4 itens and replace by 2, 3, 4
console.log( arr.splice( 1, 4, 2, 3, 4 ) );

console.log( arr );
