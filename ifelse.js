// TASK: Conditional statements ( if else, else if, switch), Loops


// 1. Calculate the sum of all even numbers between 1 and 100

// - Test case 1: Verify that the sum of all even numbers between 1 and 100 is 2550.
// - Test case 2: Verify that the sum of all even numbers between 1 and 50 is 650.

// // Calculate the sum of even numbers between 1 and 100
// let totalSum1To100 = 0;
// for (let num = 1; num <= 100; num++) {
//     if (num % 2 === 0) {  
//         totalSum1To100 += num;
//     }
// }
// console.log("Sum of even numbers between 1 and 100:", totalSum1To100);  


// // Calculate the sum of even numbers between 1 and 50
// let totalSum1To50 = 0;
// for (let num = 1; num <= 50; num++) {
//     if (num % 2 === 0) {  
//         totalSum1To50 += num;
//     }
// }
// console.log("Sum of even numbers between 1 and 50:", totalSum1To50);


// 2.Write a program to find the factorial of a given number
// Test case 1: Input: 5, Expected output: 120
// Test case 2: Input: 3, Expected output: 6


// var num= 5;
// var res= 1;

// if(num>=0){
//     for(i=1;i<=num;i++){
//         res *= i;
// }
// }
// console.log("factorial of " + num + " is " + res);



//  var num= 3;
//  var res= 1;

// if(num>=0) {
//     for(i=1;i<=num;i++) {
//         res *= i;
//     }
// }

//  console.log("Factorial of " + num + " is " + res);


// 3.Determine the number of digits in a given number

// Test case 1: Input: 123, Expected output: 3
// Test case 2: Input: 4567, Expected output: 4


let num1= 123;
let num2= 4567;

let numofdigits1=num1.toString().length;
let numofdigits2=num2.toString().length;

console.log("input: " + num1 + ", expected output " + numofdigits1);
console.log("input: " + num2 + ", expected output " + numofdigits2);

