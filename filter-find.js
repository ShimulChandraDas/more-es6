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
//console.log(whiteIteam);


/* const product = { name: 'Laptop', model: 'Yoga 3', price: 49000, dusk: '512SSD' };
const { price } = product; */


const name = 'Adam Sandler';

const greeting = `Hello ${name}, welcome to the club`;
//console.log(greeting)

const person = [{ singer: 'Atif aslam', address: '23 something street' }];
//console.log(person[0].address);
const player = { name: { firstName: "Mashrafe", lastName: "Murtaza" }, age: 38 };
//console.log(player.firstName);


const players = [
    { name: { firstName: "Shakib", lastName: "Hasan" }, age: 34 },
    { name: { firstName: "Tamim", lastName: "Iqbal" }, age: 32 },
    { name: { firstName: "Mahmudullah", lastName: "Riyad" }, age: 36 },
    { name: { firstName: "Mashrafe", lastName: "Murtaza" }, age: 38 },
];
//const answer = players.map((player) => player.firstName);
//const answer = players.map(player.name.firstName);
const answer = players.map((name) = name.firstName);
console.log(answer);

