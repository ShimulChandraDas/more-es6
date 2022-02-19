const fish = { id: 58, name: "king hilsha", price: 9000, phone: '05412455321223', address: 'chabpur', dress: 'silver' };
// process 1
// const phone = fish.phone;
// const id = fish.id;
// const name = fish.name;
// const price = fish.price;
// const address = fish.address;
// const dress = fish.dress;

//process 2
const { phone, id, name, price, address, dress } = fish;

/* Or */
// const { phone, id, name, price, address, dress } = { id: 58, name: "king hilsha", price: 9000, phone: '05412455321223', address: 'chabpur', dress: 'silver' };



// console.log(phone);
// console.log(phone, id);
// console.log(phone, id, name);
// console.log(phone, id, name, price);
// console.log(phone, id, name, price, dress);
// console.log(phone, id, name, price, dress, address);


const company = {
    name: 'GP',
    ceo: { id: 1, name: 'Ajmol', food: 'hajmola' },
    web: { work: 'web development', employee: 22, framework: 'react' }
}
//traditional way 
// const work = company.web.work;
// const framework = company.web.framework;
// const food = company.ceo.food;

//Smart way

const { work, framework } = company.web;
const { food } = company.ceo;

console.log(work, framework, food);
