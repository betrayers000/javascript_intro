// 경고창 나타내기
// alert("hello world!!!")

// 여기는 주석입니다.
/*
멀티라인 주석입니다.
*/

document.write('<h1>hello world!</h1>')

//h1 태그를 가져오기
// document.querySelector('h1')
// 해당 태그의 text 가져오기
// document.querySelector('h1').innertext
// 변경하기 
// document.querySelector('h1').innertext = "bye"

// 변수 선언과 consol창에 print 해보기
// var name = "JW"
// console.log(name)


// for 문
// var a = 30
// for (var a = 0; a < 10; a++){
//     console.log(a)
// }
// console.log(a)

// let 은 재할당이 가능하다.
// let name = "jw"
// document.write(name)
// name = "jungwo"
// document.write(name)
// const 는 재할당이 불가능하다.
// const locations = "gg"
// document.write(locations)
// locations = "gj"
// document.write(locations)


const first_name = "jw"
const last_name = "p"
const full_name = last_name + first_name
document.write("<h1>"+ full_name +"</h1>")
// `` 을 사용했을때 문자열 안에 변수를 넣을수있다.
// 파이썬의 f-string 과 비슷 ${} 안에 변수를 넣을수있다.
document.write(`<h1>${full_name}</h1>`)
console.log(`<h1>${full_name}</h1>`)

// 사용자의 데이터를 받아오는 방법 prompt
const userName = prompt("hellow who are you?")

// if 문
let message = ""
if (userName === "asdf"){
    message = `<h1>admin page</h1>`
} else if (userName === "happy"){
    message = `<h1>happy coding</h1>`
    
} else {
    message = `<h1>${userName}</h1>`
}
document.write(message)

// == 값만 비교한다
// === type(자료형) 까지 비교한다. 보통 === 사용한다.
const num1 = 0
const num2 = "0"
console.log(num1 == num2)
console.log(num1 === num2)

