const frends = ['tom hanks', 'tom cruise', 'tom brady', 'tom shimul'];

const flengths = frends.map(frend => frend.length);
//console.log(flengths)

const products = [
    { name: 'water bottle', price: 50, color: 'yello' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky notes', price: 30, color: 'purple' },
    { name: 'water glass', price: 3, color: 'white' }
]

const productNames = products.map(product => product.name);
const productPrice = products.map(product => product.price);
const productColor = products.map(product => product.color);

//products.map(product => console.log(product)) //returened the value
/*................ or............. */
//products.forEach(product => console.log(product))// didn't returend
//console.log(productPrice)