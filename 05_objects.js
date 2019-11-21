const me = {
    name: 'change',
    'phone number': '1234455',
    phone_number : '1234566',
    product : {
        phone: 'iphone',
        notebook:'max',
    }
}
// console.log(me.product)

// let books = ['javascript', 'python']
// let comics = {
//     DC: ['aquaman', 'superman'],
//     Marvel: ['ironman', 'hulk'],
// }

// let bookStore = {
//     books,
//     comics,
// }
// console.log(bookStore)


// JSON <-> object
console.log(me)
const jsonData = JSON.stringify(me)
console.log(jsonData)

const parseData = JSON.parse(jsonData)
console.log(parseData)