/* Functions */
// function printName(){
//     console.log("Hello my name is Md.Ali");
    
// }
// function addTwoNumbers(number1,number2){
//     let sum = number1 + number2;
//     console.log("Before Return");
//     return sum;
// }
// printName();

function printName(){
    console.log("Hello my name is Md.Ali");
    
}
function substractTwoNumbers(number1,number2){
    let substract = number1 - number2;
    return substract;
}
printName();

let minusValue = substractTwoNumbers(5,10);
console.log(minusValue);

function tableOfNumberPrint(a,i){
    console.log(`${a} x ${i} = ${a*i}`);
}
for(let i = 1;i<=10;i++){
    tableOfNumberPrint(4,i) 
}



 