// declare variable based on the name of an object property

const myObject = { x: 2, y: 50, z: 600, a: 25, b: 68 };
const { x, b } = myObject;

//console.log(b);

// destructuring array
const [p, q] = [45, 37]


const company = {
    name: 'GP',
    ceo: {
        id: 1, name: 'Ajmol', food: 'hajmola'
    },
    web: {
        work: 'web development', employee: 22, framework: 'react'
    }
}

console.log(company?.ceo?.name?.roll?.id);