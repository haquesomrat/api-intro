//Javasccript Object Notation(JSON)

const user = { id: 11, name: 'samina', job: 'student' };
const stringified = JSON.stringify(user);

// console.log(user); 
// console.log(stringified);

const shop = {
    name: 'Alia Store',
    address: 'ranbir road',
    profit: 15000,
    owner: {
        name: 'alia bhatt',
        profesion: 'actor'
    },
    products: ['laptop', 'mobile', 'pepsi'],
    isExpensive: false
}
const shopStringified = JSON.stringify(shop);
// console.log(shop);

console.log(shopStringified);
const converted = JSON.parse(shopStringified);
console.log(converted);