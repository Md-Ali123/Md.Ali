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

// /* Prime Numbers*/
// function isPrime(n){
//     if(n <= 1){
//         return false;
//     }
//     for(let i = 2;i<=n;i++){
//         if(n%1 == 0){
//             return false;
//         }
//     }
//     return true;
// } 

// let primeHai = isPrime(5);
// console.log(primeHai);


// function isArmstrong(num){
//     let originalNumber = num;
//     let sumOfCube = 0;
//     while(num > 0){
//         let lastDigit = num%10;
//         sumOfCube = sumOfCube+lastDigit**3;
//         num = Math.floor(num/10);
//     }
//     return originalNumber === sumOfCube;
// }


// let a = isArmstrong(123);
// console.log(a);


// function isPalindrome(n){
//     let originalNumber = n;
//     let rev = 0;
//     while(n > 0){
//         let lastDigit = n%10;
//         rev = rev*10 + lastDigit;
//         n = Math.floor(n/10);
//     }
//     return originalNumber === rev;
// }

// let b = isPalindrome(121);
// console.log(b);


// function isReverse(n){
//     let originalNumber = n;
//     let rev = 0;
//     while(n > 0){
//         let lastDigit = n%10;
//         rev = rev*10 + lastDigit;
//         n = Math.floor(n/10);
//     }
//     return rev;
// }
// let c = isReverse(12345678);
// console.log(c);

// let nameArr = ["Mohd","Ali","Shaikh"]
// let secondArr = ["Dawood","Ahmed"]
// console.log(nameArr.at(2));
// console.log(nameArr.concat(secondArr));
// console.log(nameArr);
// console.log(secondArr);
// console.log(nameArr.includes("Ali"));
// console.log(nameArr.indexOf("Ali"));
// let allElement = nameArr.join(" ");
// console.log(allElement);
// console.log(nameArr.lastIndexOf("Shaikh"));
// let newLength = nameArr.push("Armaan","Nadeem")
// console.log(newLength);
// let poppedElement = nameArr.pop()
// console.log(poppedElement);
// console.log(nameArr.reverse());
// console.log(nameArr.shift());
// console.log(nameArr.slice());
// console.log(nameArr.sort());
// console.log(nameArr.some());
// console.log(nameArr.splice(1,1));
// console.log(nameArr.unshift("Ali123"));
// console.log(nameArr);



// let numArr = ("Danish","Ali","Armaan")
// let itr = numArr.values()
// let values = itr.next();
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());



let numberarr = [1,2,3,4,5,6,7,8,9,10];

// function add(m,n){
//     return m+n;
// }
// function substract(m,n){
//     return m-n;
// }
// function operation(m,n,callbackfn){
//     return callbackfn(m,n);
// }
// console.log(operation(10,8,substract));



// function printElement(num1){
//     console.log();
// }

numberarr.forEach((x) => {
    console.log(x);
    

})