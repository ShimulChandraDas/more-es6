const numbers = [5, 13, 7, 41, 30, 5, 2, 19];
const bigNumbers = numbers.filter(number => number > 20);
const smallNumber = numbers.filter(number => number < 10);
//console.log(bigNumbers, smallNumber)



const products = [
    { name: 'water bottle', price: 50, color: 'yello' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky notes', price: 30, color: 'purple' },
    { name: 'water glass', price: 3, color: 'white' }
];

const expensive = products.filter(product => product.price > 100);
const black = products.filter(product => product.color == "black");


//console.log(expensive);
//console.log(black);

const whiteIteam = products.find(product => product.price > 100);
console.log(whiteIteam);