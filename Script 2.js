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

// function printName(){
//     console.log("Hello my name is Md.Ali");
    
// }
// function substractTwoNumbers(number1,number2){
//     let substract = number1 - number2;
//     return substract;
// }
// printName();

// let minusValue = substractTwoNumbers(5,10);
// console.log(minusValue);

// function tableOfNumberPrint(a,i){
//     console.log(`${a} x ${i} = ${a*i}`);
// }
// for(let i = 1;i<=10;i++){
//     tableOfNumberPrint(4,i) 
// }


// function getName(){
//     return "Md Ali";
// }
// let userName = getName();
// console.log(userName);

// function capitalLetterWord(value){
//     return value.toUpperCase();
// }

// let capitalLetterName = capitalLetterWord("md.ali");
// console.log(capitalLetterName);


// function multiplyTwoNumber(num1,num2){
//     return num1*num2;
// }
// let productOfTwoNumbers = multiplyTwoNumber(7,5);   
// console.log(productOfTwoNumbers);

// function factorial(n){
//     let result = 1;
//     for(let i = 1;i<=n;i++){
//         result = result * i;
//     }
//     return result
// }


// /*factorial*/
// let fact = factorial(5);
// console.log(fact);

/* Prime Numbers*/
function isPrime(n){
    if(n <= 1){
        return false;
    }
    for(let i = 2;i<=n;i++){
        if(n%1 == 0){
            return false;
        }
    }
    return true;
} 

let primeHai = isPrime(5);
console.log(primeHai);
