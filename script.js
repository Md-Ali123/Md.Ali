// /* SWAPPING THE VALUES */
// let number1 = 300;
// let number2 = 400;
// console.log("Before swapping values are:",number1,number2);
// temp = number1;
// number1 = number2;
// number2 = temp;
// console.log("After swapping values are:",number1,number2);


// /* Leap year code */
// let year = prompt("Enter a year");
// if(year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)){
//     console.log("Yes, It's a Leap year");
// }else{
//     console.log("Not a leap year");
// }

// /* For loop */
// let a = 1;
// for(a ; a < 101; a++) {
//     console.log("Hello World",a);
// }
// /*Table of number*/
// let n = 10;
// for(i=1; i<=10;i++){
//     console.log(n,"x",i,"=",n*i);
// }
// let sum = 0;
// for(i=1; i<=10; i++){
//     sum=sum+i
//     console.log(sum);
// }
// console.log(sum);

// /* Pre,Post:Increment and Decrement*/
// let i = 10;
// for(i; i>=1;i--){
//     console.log(i);
// }

// /*Even and Odd*/
// let num = 0;
// console.log("Even numbers from 0 to 10 are:");
// for(; num<=10;num+=2){
//     console.log(num);
// }
// console.log("Odd numbers from 0 to 10 are:");
// let num = 0;
// for(;num<=10;num++){
//     if(num%2==1){
//         console.log(num);
//     }

// }

// let m = 10;
// let n = ++m;
// console.log(m);
// console.log(n);

// let a = 2;
// let result = a++ + 3;
// console.log(result);




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

// /* String */
// let str1 = "String type 1 Double inverted comma";
// let str2 = 'String type 2 Single inverted comma';
// let str3 = `String type 3 Backtick`;

// console.log(str1);
// console.log(str2);
// console.log(str3);

// /*Concatination */ means addition
// let concatString = str1 + str2;
// let constr = str1.concat(str1,str2,str3,"and so on")

// let username = "Hello World";
// console.log(username.length);
// console.log(username.charAt(4));
// console.log(username.indexOf("o"));
// console.log(username.lastIndexOf("o"));
// console.log(username.toLowerCase());
// console.log(username.toUpperCase());
// console.log(username.slice(6));
// console.log(username.split(""));
// console.log(username.substring(7));
// console.log(username.replace("Hello","hi"));            
// console.log(username.replaceAll("o","0"));
// console.log(username.repeat(5));
// console.log(username.trim());
// console.log(username.length);
// console.log(username.trimEnd().length);



 

// let pass = prompt("Enter a password");
// if(pass.length >= 8 ){
//     if(pass.includes("0") || pass.includes("1") ||pass.includes("2") ||pass.includes("3") ||
//        pass.includes("4") ||pass.includes("5") ||pass.includes("6") || pass.includes("7") ||
//        pass.includes("8") ||pass.includes("9") ){
//         if(pass.includes("@") || pass.includes("#")) {
//         console.log("Entered password is correct");
//         }else{
//         console.log("Password should contain atleast one special character");
//          }
//     }else{
//     console.log("Password should contain atlest one number");
//     }
// }else{
//     console.log("Password should be contain atleast 8 characters");
// }


