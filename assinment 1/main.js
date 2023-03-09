


// assinment 1 



// var input = prompt("enter a number ..");
// console.log(input);



// ##############################################################



// var number = prompt("enter a number ..");
// if (number % 3 ==0 && number % 4 == 0) {
//     console.log ("yes");
//     }
//     else {
//         console.log ("no")
// }



// ##############################################################


// var num1 = Number(prompt("enter num1 .."));
// var num2 = Number(prompt("enter num2 .."));

// if (num1 > num2) {
//     console.log (num1)
// }
// else {
//     console.log (num2)
// }




// ##############################################################



// var num = Number(prompt("enter number .."));

// if(num > 0 ) {
//     console.log ("positive")
// }
// else {
//     console.log ("negative")
// }




// ##############################################################



// var num1 = Number(prompt("enter num1 .."));
// var num2 = Number(prompt("enter num2 .."));
// var num3 = Number(prompt("enter num3 .."));

// if (num1 > num2 && num1 > num3 && num2 > num3) {
//     console.log ("the maximum number is " + num1)
//     console.log ("the minimum number is " + num3)
// }

// else if (num1 > num2 && num1 > num3 && num3 > num2) {
//     console.log ("the maximum number is " + num1)
//     console.log ("the minimum number is " + num2)
// }

// else if (num2 > num1 && num2 > num3 && num1 > num3) {
// console.log("the maximum number is " + num2)
// console.log ("the minimum number is " + num3)
// }

// else if (num2 > num1 && num2 > num3 && num3 > num1) {
//     console.log("the maximum number is " + num2)
//     console.log ("the minimum number is " + num1)
//     }

// else if (num3 > num1 && num3 > num2 && num1 > num2) {
//     console.log("the maximum number is " + num3)
//     console.log ("the minimum number is " + num2)
// }

// else if (num3 > num1 && num3 > num2 && num2 > num1) {
//     console.log("the maximum number is " + num3)
//     console.log ("the minimum number is " + num1)
// }


// ##############################################################




// var num = Number(prompt("enter number .."));

// if (num % 2 == 0) {
// console.log("the number is even")
// }
// else {
//     console.log("the number is odd ")
// }



// ##############################################################


// var letter =prompt("enter character ..");
// function checkVowels (letter) {
//     var vowels = ("aeoiuAEOIU");

//     if (vowels.includes(letter)) {
//         console.log("vowel")
//     }
//     else {
//         console.log("constant")
//     }
// }

// checkVowels(letter);



// ##############################################################


// var num = Number(prompt("enter an integer number .."));

// for (var i = 1 ; i <= num ; i++) {
//     console.log(i);
// }



// ##############################################################


// var num = Number(prompt("enter an integer number .."));

// for (var i =1 ; i<=12 ;i++) {
//     console.log(num * i)
// };


// ##############################################################


// var num = Number(prompt("enter an integer number .."));

// for (var i =2 ; i<=num ;i+=2) {
//     console.log (i)
//     };


// ##############################################################



// var num1 = Number(prompt("enter num1 .."));
// var num2 = Number(prompt("enter num2 .."));

// function power (num1,num2) {
//     console.log(num1**num2);
// };
// power(num1,num2);


// ##############################################################


// var sub1 = Number(prompt("enter mark 1  .."));
// var sub2 = Number(prompt("enter mark 2 .."));
// var sub3 = Number(prompt("enter mark 3 .."));
// var sub4 = Number(prompt("enter mark 4 .."));
// var sub5 = Number(prompt("enter mark 5 .."));

// function total (sub1,sub2,sub3,sub4,sub5) {
//     console.log("the total marks is " + (sub1+sub2+sub3+sub4+sub5));
// }

// function average (sub1,sub2,sub3,sub4,sub5) {
//     console.log("the average of  marks is " + (sub1+sub2+sub3+sub4+sub5)/5);
// }

// total(sub1,sub2,sub3,sub4,sub5);
// average(sub1,sub2,sub3,sub4,sub5);



// ##############################################################


// var month = prompt("enter the month number you want to know number of days   ..");

// switch(month) {
//     case "1" :
//     console.log("number of days 31");
//     break;
//     case  "2" :
//     console.log("number of days 28");
//     break;
//     case  "3" :
//     console.log("number of days 30");
//     break;
//     case  "4" :
//     console.log("number of days 31");
//     break;
//     case  "5" :
//     console.log("number of days 30");
//     break;
//     case  "6" :
//     console.log("number of days 28");
//     break;
//     case  "7" :
//     console.log("number of days 30");
//     break;
//     case  "8" :
//     console.log("number of days 31");
//     break;
//     case  "9" :
//     console.log("number of days 30");
//     break;
//     case  "10" :
//     console.log("number of days 28");
//     break;
//     case  "11" :
//     console.log("number of days 28");
//     break;
//     case  "12" :
//     console.log("number of days 30");
//     break;
// }



// ##############################################################



// function perc (sub) {
//     return (sub/100)*100;
// }
// for ( var i=0 ; i<5 ;i++) {
//     var sub = Number(prompt("enter mark .."));
// perc(sub);
// if(sub>=90) {
//     console.log(`the percentage is ${sub} and the grade is A `)
// }
// else if (sub>=80 && sub<90) {
//     console.log(`the percentage is ${sub} and the grade is B `)
// }
// else if (sub>=70 && sub<80) {
//     console.log(`the percentage is ${sub} and the grade is C `)
// }
// else if (sub>=60 && sub<70) {
//     console.log(`the percentage is ${sub} and the grade is D `)
// }
// else if (sub>=50 && sub<60) {
//     console.log(`the percentage is ${sub} and the grade is E `)
// }
// else if (sub<50) {
//     console.log(`the percentage is ${sub} and the grade is F `)
// }
// }



// ##############################################################



// var letter = prompt("enter the letter to check if it is vowel   ..");

// switch(letter) {
//     case "a" :
//     case "e" :
//     case "i" :
//     case "o" :
//     case "u" :
//     case "A" :
//     case "E" :
//     case "I" :
//     case "O" :
//     case "U" : 
//     console.log("the letter is vowel");
//     break;

//     default :
//     console.log("the letter is constant");
// }



// ##############################################################



// var num1 = Number(prompt("enter num1 .."));
// var num2 = Number(prompt("enter num2 .."));

// switch(true) {
//     case num1>num2:
//         console.log("the maximum number is " + num1);
//         break;
//     case num2>num1: 
//     console.log("the maximum number is " + num2);
//         break;
// }


// ##############################################################



// var num = Number(prompt("enter num .."));

// switch(true) {
//     case num % 2 == 0:
//         console.log("the number is even");
//         break;
//     default : 
//     console.log("the number is odd ");
//         break;
// }



// ##############################################################


// var num = Number(prompt("enter num .."));

// switch(true) {
//     case num>0:
//         console.log("the number is positive");
//         break;
//     case num<0:
//         console.log("the number is negative");
//         break;
//     case num==0: 
//     console.log("the number is 0 ");
//         break;
// }


// ##############################################################


// var operation = prompt("what operation do you want to do ?");
// var a = Number(prompt("enter the first number"));
// var b = Number(prompt("enter the second number"));

// if (operation == "+") {
//     var sum = a + b;
//     console.log("the result is " + sum);
// }
// else if (operation == "-") {
//     var sum = a - b
//     console.log("the result is " + sum);
// }
// else if (operation == "*") {
//     var sum = a * b
//     console.log("the result is " + sum);
// }
// else if (operation == "/") {
//     var sum = a / b
//     console.log("the result is " + sum);
// }
// else if (operation == "%") {
//     var sum = a % b
//     console.log("the result is " + sum);
// }
// else
//     console.log("please enter a valid operation")

