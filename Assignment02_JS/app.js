alert("hello")
// Question 1
// var userInput=prompt("Enter Your city Name");
// if(userInput==="Karachi"){
//     document.write("Welcom to City of Light");
// }
// else{
//     document.write("Your City is normal");
// }

// Question 2
// var userInput=prompt("Enter Your Gender");
// if(userInput==="Male"){
//     document.write("Good Morning, Sir")

// }
// else if (userInput==="Female"){
//     document.write("Good Morning, maam")
// }
// else{
//     document.write("Sorry")
// }

// Question 3
// var userInput=prompt("Enter light  Color");
// if(userInput==="Red"){
//     document.write("Must Stop");

// }
// else if (userInput==="Yellow"){
//     document.write("Ready To Move");
// }
// else if (userInput==="Green"){
//     document.write("Move Now");
// }
// else{
//     document.write("Stop");
// }


// Question 4
// var userInput=+prompt("Enter Remaining Fule");
// if(userInput<0.25){
//     document.write("Please refill the Fule in your car")
// }
// else{
//     document.write("Start Your journay")
// }


// Question 5
// // Part A
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// // Part B
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// Part C
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }


// // Part D
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// // Part E
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }


// // Part F
// if("car" < "cat"){
// alert("car is smaller than cat");
// }


// Question 6

// var marksObtained = +prompt("Enter Your Obtained Marks");
// var totalMarks = +prompt("Enter Total Marks");
// var percentage;
// percentage = (marksObtained / totalMarks) * 100;

// var grade;
// var marks;

// if (percentage >= 80) {
//     grade = "A-one"
//     marks = "Excellent"
// }
// else if (percentage >= 70) {
//     grade = "A"
//     marks = "good"
// }
// else if (percentage >= 60) {
//     grade = "B"
//     marks = "You Need Improve"
// }
// else {
//     grade = "Fail"
//     marks = "Sorry"
// }

// document.write(`
//     <h1>Marks Sheet</h1>
//     <p>Total Marks :${totalMarks}</P>
//     <p>Obtained Marks :${marksObtained}</P>
//     <p>Percentage :${percentage}</P>
//     <p>Grade :${grade}</P>
//     <p>Marks :${marks}</P>`);




// Question 7

// var num=5;
// var userInput=+prompt("Please Enter a Number")

// if(userInput===num){
//     document.write("Bingo")
// }
// else if(userInput===++num ){
//     document.write("Close enough to the correct answer.")
// }
// else{
//     document.write("Sorry,You Lost")
// }


// Question 8

// var userInput=+prompt("Enter a Number");

// if(userInput%3 === 0){
//     document.write("This Number is Divisible by 3.");

// }
// else{
//     document.write("This Number is not Divisible by 3.");
// }

// Question 9

// var userInput=+prompt("Enter a Number");

// if(userInput%2 === 0){
//     document.write("Even");

// }
// else{
//     document.write("odd");
// }


// Question 10

// var userInput=+prompt("Enter today Temperature");

// if(userInput >40){
//     document.write("Is is too hot outside");
// }
// else if(userInput>30){
//     document.write("The weather Today is ,Normal");
// }
// else if(userInput>20){
//     document.write("Today's Weather is Cool");
// }
// else{
//     document.write("OMG! Today's Weather is So cool");
// }



// Question 11
// var num1=+prompt("Enter your First number");
// var num2=+prompt("Enter your Second number");
// var operation=prompt("Select Your operation + , - , * , / ,% .")

// if(operation==="+"){
//     document.write(num1+num2)
// }
// else if(operation==="-"){
//     document.write(num1-num2)
// }
// else if(operation==="*"){
//     document.write(num1*num2)
// }
// else if(operation==="/"){
//     document.write(num1/num2)
// }
// else if(operation==="%"){
//     document.write(num1%num2)
// }else{
//     document.write("Sorry")
// }