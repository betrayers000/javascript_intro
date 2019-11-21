// let colors = ['red', 'green', 'blue']


// for (let color of colors){
//     console.log(color)
// }

// colors.forEach(function(color){
//     console.log(color)
// })

// colors.forEach((color) => {
//     console.log(color)
// })
// // arrow function은 인자가 하나일때 소괄호 삭제가능
// // 또한 함수 내부 코드가 한줄이라면 중괄호도 생략가능
// colors.forEach(color => console.log(color))

// function handlePosts(){
//     const posts = [
//         {id: 50, title: "javascript"},
//         {id: 100, title: "python"},
//         {id: 123, title: "css"},
//     ]
//     for (let i = 0; i < posts.length; i++){
//         console.log(posts[i])
//         console.log(posts[i].id)
//         console.log(posts[i].title)
//     }
// }

// handlePosts()

// function handlePosts(){
//     const posts = [
//         {id: 50, title: "javascript"},
//         {id: 100, title: "python"},
//         {id: 123, title: "css"},
//     ]
//     posts.forEach(post=>{
//         console.log(post)
//         console.log(post.id)
//         console.log(post.title)
//     })
// }

// handlePosts()

// const images = [
//     {height:10, width:20},
//     {height:14, width:25},
//     {height:50, width:15},
// ]
// const areas = []
// images.forEach(image=>{
//     areas.push(image.height * image.width)
// })
// console.log(areas)

// const numbers = [1, 2, 3, 4, 5]

// const doubleNumbers = []
// numbers.forEach(number => doubleNumbers.push(number*2))
// console.log(doubleNumbers)

// const map_doubleNumbers = numbers.map(number => number*2)
// console.log(map_doubleNumbers)

// const images = [
//     {height:10, width:20},
//     {height:14, width:25},
//     {height:50, width:15},
// ]
// const double = images.map(image=>image.height * image.width)
// console.log(double)


// const numbers = [1, 2, 3, 4, 5]
// const num = numbers.filter(number=> number%2 === 0)
// console.log(num)

// const products = [
//     {name: 'cucumber', type: 'vegetable'},
//     {name: 'banana', type: 'fruit'},
//     {name: 'carrot', type: 'vegetable'},
//     {name: 'apple', type: 'fruit'},
// ]

// const fruits = products.filter(product=> product.type === "fruit")
// console.log(fruits)

// const scores = [100, 80, 88, 90, 91, 92]
// const total = scores.reduce((total, score)=>{
//     return total += score
// }, 0)
// console.log(total)

const users = [
    {name:'change', location:'gj'},
    {name:'chocho', location:'gm'},
    {name:'dongdong', location:'so'},
    {name:'neo', location:'dj'},
]
const user = users.find(function(user){
    return user.name === 'neo'
})
console.log(user)