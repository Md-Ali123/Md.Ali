// /* 1. Even or Odd*/

// let u = prompt("Enter a number you pro one");
// if(u %2 ==0){
//     console.log("Number is even");
// }else{
//     console.log("Number is odd");
// }



// /* 2. Positive or Negative*/

// let num = prompt("Enter a number");
// if(num < 0){
//     console.log("Number is Negative");
// }
// else if(num > 0){
//     console.log("Number is Positive");
// }else{
//     console.log("Number is Zero");
// }



// /* 3. Print No. from 1 to 10 using for loop*/

// let m =1;
// for(m; m <= 10; m++){
//     console.log(m);
// }



// /* 4. Sum of First 10 numbers*/

// let sum = 0;
// for(i=1; i<=10; i++){
//     sum = sum + i;
//     console.log(sum);
// }



// /* 5. Multiplication Table*/
// let n = 5;
// for(i=1; i<=10; i++){
//     console.log(n,"x",i,"=",n*i);
// }



// /* 6. Check Divisibility*/
// let a = prompt("Enter a number");
// if(a %3 == 0 && a %5 == 0){
//    console.log("Divisible by both");
   
// } else if(a %3 == 0){
//    console.log("Only by 3");
   
// }else if(a %5 == 0){
//     console.log("only by 5");
    
// }else{
//     console.log("Not divisible");
    
// }


// /* 7. Factorial of a Number*/
// let mul = 1, n = 0;
// for(i = 1; i <= n; i++){
//     mul = mul * i;
// }
//  console.log(mul);



// /*  8. Sum of even numbers*/
// let sum = 0;
// for(let n=1; n<=20; n++){
//     if(n %2==0){
//        sum = sum + n;
//     }
    
// }console.log(sum);



// /* 9. Reverse Counting*/
// let d = 10;
// for(d; d>0; d--){
// console.log(d);
// } 



// /* Largest of two numbers*/
// let number1 = prompt("Enter a  First number"); 
// let number2 = prompt("Enter a  Second number"); 
// if(number1>number2){
//     console.log("Number1 is Greater");
    
// }else{
//     console.log("Number2 is Greater");
    
// }



/* Questions
1- If number is multiple of 7.
2- Print Squares of number from 1 to 10.
3- print first 10 multiples of any number n.
4- Print numbers from 50 to 40 in reverse order.
5- Check if number is positive and even.
6- print sum of odd number from 1 to 100.
7- Count how many number between 1 to 100 are divisible by 3.
*/


// /* Answer 1*/ 
// let num = 49;
// if(num %7 == 0){
//     console.log("Yes, Number is divisible by 7");
    
// }else{
//     console.log("No, Number is not divisible by 7");
    
// }

// /* Ans 2*/
// let number = 1;
// for(number;number<=10;number++){
//     console.log(number*number);
    
// }

/* Ans 3*/
// let m = 2;
// for(n = 1; n<=10; n++){
//     console.log(m,"x",n,"=",n*m);
    
// }

/* Ans 4*/
// let a = 50;
// for(a; a>=40; a--){
   
//     console.log(a);
// } 

/* Ans 5*/
// let p = prompt("Enter a number");
// if(p > 0){
//     if(p %2 == 0){
//         console.log("Yes, number is  positive and also even");
        
//     }else{
//         console.log("Number is not even but positive ");
        
//     }
// }else{
//     console.log("No,Number is not positive ");
    
// }

/* Ans 6*/
// let sum= 0;
// for(let b = 1; b<=100;b++){
//     if(b %2 ==0){

   
//     }else{
//          sum = sum + b;
//         console.log(sum);
//     }
// }
/*ans 6 can also*/ 
// let sum = 0;
// for(let b = 1;b<=100;b++){
//     if(b%2 != 0){
//         sum +=b;
//     }
// }
// console.log(sum);


/* Ans 7*/
// let count = 0;
// for(let num = 1; num<=100;num++){
//     if(num%3==0){
//         count++
//     }
// }
// console.log(count);

/* OPTIMIZATION*/
// let num = 14;
// let endingCondition = Math.ceil(num/2);
// for(let i = 1;i<=endingCondition;i++){
//     if(num%i==0){
//         console.log(i);
        
//     }
// }console.log(num);

// let num = 36;
// let sqrt = Math.sqrt(num);
// for(let i=1; i<= sqrt; i++){
//      if(num%i==0){
//         console.log(i);
//         if(num/i != i){
//         console.log(num/i);
//         }
//     }
// }


// /*Count Digit and Palindrome */
// let num = 121
// let rev = 0;
// let count = 0;
// let originalnumber = num;
// while(num > 0){
//     let lastDigit = num%10;
//     rev = rev * 10 + lastDigit;
//     num = Math.floor(num/10);
//     count++
// }
// if(originalnumber == rev){
//     console.log("Number is Palindrome ");
//  }else{
//     console.log("Not a Palindrome");
    
//  }
// console.log("Original Number ",originalnumber);
// console.log("Reverse number ",rev);
// console.log("Count ",count);
// console.log("Value of given variable num",num);

/* Sum of digits and its square*/
// let num = 456;
// let sum = 0;
// while(num > 0){
//     let lastDigit = num%10;
//     sum = sum + lastDigit**2;
//     num = Math.floor(num/10);
// }
// console.log(sum);

/*Armstrong Number*/
// let num = 153;
// let sumOfCubes = 0;
// let originalnumber = num;
// while(num>0){
//     let lastDigit = num%10;
//     sumOfCubes = sumOfCubes + lastDigit**3;
//     num = Math.floor(num/10);
// }
// if(sumOfCubes==originalnumber){
//     console.log("Number is Armstrong",originalnumber);
//     console.log("Sum of cubes",sumOfCubes);
// }else{
//     console.log("Number is not Armstrong",originalnumber);
//     console.log("Sum of cubes",sumOfCubes);
// }

/* String */
// let str1 = "String type 1 Double inverted comma";
// let str2 = 'String type 2 Single inverted comma';
// let str3 = `String type 3 Backtick`;

// console.log(str1);
// console.log(str2);
// console.log(str3);

/*Concatination */
// let concatString = str1 + str2;
// let constr = str1.concat(str1,str2,str3,"and so on")

let username = "Hello World";
console.log(username.length);
console.log(username.charAt(4));
console.log(username.indexOf("o"));
console.log(username.lastIndexOf("o"));
console.log(username.toLowerCase());
console.log(username.toUpperCase());
console.log(username.slice(6));
console.log(username.split(""));
console.log(username.substring(7));
console.log(username.replace("Hello","hi"));            
console.log(username.replaceAll("o","0"));
console.log(username.repeat(5));
console.log(username.trim());
console.log(username.length);
console.log(username.trimEnd().length);
let num = 12345678;
console.log(typeof num);
 





