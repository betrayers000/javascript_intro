// // 함수 선언식
// function add(num1, num2) {
//     return num1 + num2
// }
// console.log(add(2, 10))

// // 함수 표현식
// const sub = function(num1, num2){
//     return num1 - num2
// }
// console.log(sub(10, 2))

// const ssafy1 = function(name){
//     console.log(`hello ${name}`)
// }
// ssafy1('adsd')

// // 화살표 함수, arrow fuction
// const ssafy2 = (name) => {
//     console.log(`hello ${name}`)
// }
// ssafy2('name')

// // 인자가 하나이면 소괄호 생략가능
// const ssafy3 = name => {
//     console.log(`hello ${name}`)
// }
// ssafy2('name')

// // 표현식 하나일때 중괄호 생략가능
// const ssafy4 = name => console.log(`hello ${name}`)
// ssafy2('name')

// let square = function(num){
//     return num**2
// }
// let square2 = num => num**2

// console.log(square2(2))

// 인자가 없을경우 > _ or () 사용가능
// let noArgs = _ => 'no args'
// let noArgs = () => 'no args'

// const a = {}
// console.log(typeof a) // object
// let returnObject = () => ({key: 'value'})

// 인자를 넣지 않았을 때는 nodefined 가 들어가는데 
// 기본값을 넣어줄수 있다.
// const hello = (name="noName") => `hello ${name}`
// console.log(hello())

// 익명함수 1회용 함수 / 콜백에서 많이 사용한다.
(function (name) {
    console.log(name)
})('change')