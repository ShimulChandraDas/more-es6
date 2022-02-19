const numbers = [4, 6, 8, 10];
const output = [];


// // old virson of functions 
// function doubleold(number) {
//     return number * 2;
// }

// new virsons of array 
const doublIt = number => number * 2;


for (const number of numbers) {
    const result = doublIt(number);
    output.push(result);
}
//console.log(output)

/* 
1.looped.
2. element diye function ke call korsi
3. result ekta array er modde push korchi 
*/


//const output2 = numbers.map(doublIt);
//const output2 = numbers.map(number => number * 2);
//const output2 = numbers.map(x => x * 2);
const squares = numbers.map(x => x * x);


console.log(squares);

