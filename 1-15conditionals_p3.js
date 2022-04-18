const age = prompt("how old are you")

// if(isNaN(age)){
//     console.log("Plese write a number");
// }else if(age < 18){
//     console.log("You are too young.");
// } else {
//     console.log("You can drink");
// }

// 18세 이하면 문구가 출력 / 그렇지 않으면 가능 문구가 출력
if(isNaN(age) || age < 0){
    console.log("Plese write a real positive number");
} else if(age < 18){
    console.log("You are too young.");
} else if(age >= 18 && age <= 50){
    console.log("You can't drink");
} else if(age > 50 && age <= 80){
    console.log("You should exercise");
} else if(age > 80) {
    console.log("You can do what ever you want");
}
//and = &&, or = ||

