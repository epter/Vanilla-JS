const age = prompt("how old are you")

// console.log(typeof age);
console.log(typeof "age", typeof parseInt("15"));
//         string               number

const age = parseInt( prompt("how old are you"))
// 숫자일 경우 숫자값을 age로 받고 숫자가 아닌경우 NaN을 출력
//part2

const age = parseInt(prompt("How old are you?"));

console.log(isNaN(age));

if(condition){

}else{

}
//

if(isNaN(age)){
    console.log("Plese write a number");
}else{
    console.log("thank you for writing yout age");
}