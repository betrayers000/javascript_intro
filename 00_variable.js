// let 키워드는 같은 이름의 변수를 재 선언할수 없다.
// let x = 1
// let x = 2
// x = 3
// console.log(x)

// let x = 1
// if (x === 1){
//     // block_scope > {} 안에서만 쓸수있다.
//     let x = 2
//     console.log(x)
// }
// console.log(x)

// let 은 값을 안주고 선언만 할수있다.
// const는 상수이기 때문에 처음에 값을 선언해줘야한다.
// 상수이기 때문에 값을 바꿀수 없다.
// let x
// const y = 9
// y = 10
// if (y===9){
//     let y = 20
//     console.log(y)
// }
// console.log(y)

// 함수 선언방법
// function varTest(){
//     var x = 1
//     if (true) {
//         let x = 2
//         console.log(x)
//     }
//     console.log(x)
// }

// varTest()

// var : 선언, 할당 ==> 자유 / 함수 스코프 => 오류의 가능성이 높다
// let : 할당 ==> 자유 / 선언 ==> 한번만/ 블록 스코프
// const : 할당, 선언 ==> 한번만/ 블록 스코프

// camelcase로 작성한다.
// let dog
// let varialbeName
// let dogs = []

// function getName(){

// }

// const onClick = () => {

// }
// let isValid = false // true
// class User {
//     constructor(value){
//         this.name = value.name
//     }

// }
// 대문자로 선언된 변수명은 절대 안바뀌는 값
// const API_KEY = "asdfasf23541"

const a = 13
const b = -6
const c = 3.14
const d = 2.9e7
const e = Infinity
const f = -Infinity
// Not a Number // type 은 number// 숫자지만 js에서 표현 못하는 숫자
const g = NaN 
// console.log(typeof g)

const sentence1 = 'hello\n'
const sentence2 = "hello"
const sentence3 = `helloword${sentence1}`
console.log(sentence3)

const isValid = true // false

let first_name
console.log(first_name)

let last_name = null
console.log(last_name)

console.log(null == undefined) // ture, 값이 비어있다는 건 똑같다
console.log(null === undefined) // false
console.log(null+1)
console.log(undefined+1)