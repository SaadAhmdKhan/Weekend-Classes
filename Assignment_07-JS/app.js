// // Question 01
// var date=new Date();
// alert(date);


// Question 02
// var month = ["January","February","March", "April","May","June", "July","August","September", "October","November","December",];
// var Currentmonth=new Date().getMonth();
// alert(month[Currentmonth])



// Question 03
// var days= ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// var todayDays=new Date().getDay();
// alert(days[todayDays])


// Question 04

// var days= ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// var todayDays=new Date().getDay();

// if(todayDays===6){
//     alert("It's Funday")
// }
// else if(todayDays===0){
//     alert("It's Funday")
// }
// else{
//     alert(days[todayDays])
// }

// Question 05
// var todayDays=new Date().getDate();

// if(todayDays<=15){
//     alert("First fifteen days of the month")

// }
// else if(todayDays>=16){
//     alert("Last days of the month.")
// }


// Question 06
// var date=new Date()
// var sec=new Date().getTime();

// var millisec=sec/(1000*60*60)
// document.write(`Current Date:${date}<br/>`)
// document.write(`Elapsed millisecond since January 1, 1970:${sec}1<br/>`);
// document.write(`Elapsed Minutes since January 1, 1970: ${Math.floor(millisec)} `);


// Question 07
// var hour=new Date().getHours();
// if(hour<=11){
//     alert("It's AM")
// }
// else{
//     alert("It's PM")
// }



// Question 08
// var comingDate=new Date('20 Dec,2024')
// document.write(`Later Date:${comingDate}`)


// Question 09
// var ramzanDate = new Date('28 Feb , 2025');
// var todayDate = new Date();
// var ramZan2025 = ramzanDate.getTime() - todayDate.getTime()
// var counterDays = ramZan2025 / (1000 * 60 * 60 * 24)
// document.write(`${Math.floor(counterDays)} days Have Passed in 1st Ramzan , 2005 `)


// Question 10
// var date=new Date()
// var Pervious=new Date('31 Dec,2023')
// var past=Pervious.getTime() -date.getTime()
// var pastSec = past/ (1000 * 60 )

// document.write(`Our Reference Date ${date}<br/>`)
// document.write(`${Math.floor(pastSec)} second had passed since begining of 2024`)


// Question 11
// var date=new Date()
// var d= new Date()
// d.setHours(1)


// document.write(`Current Date ${date}<br>`)
// document.write(`1 Hour ago,it was  ${d}`)

// Question 12

// var date=new Date()
// var d= new Date()
// d.setFullYear(d.getFullYear() -100)


// document.write(`Current Date ${date}<br>`)
// document.write(`100 Year Back, it was  ${d}`)


// Question 13
// var userInput=+prompt("What Is Your Age");

// var UserAge=new Date().getFullYear()- userInput;
// document.write(`Your age is ${userInput}<br/>`)
// document.write(`Your birth year is ${UserAge}`)


// Question 14

// var userName=prompt("Enter Your name")
// var month="November"
// var NoofUnit=+prompt("Number of unit you Used")
// var perUnit= 16
// var LateCharges= 350
// var NetAmount=NoofUnit*perUnit;
// var GrossAmount=NetAmount+NoofUnit*perUnit;
// document.write(`
//     Customer Name: ${userName}<br/>
//     Month: ${month}<br/>
//     Number Of Unit: ${NoofUnit}<br/>
//     Charges Of Unit: ${perUnit}<br/>
//     Net Amount Payable (within Due Date): ${NetAmount}<br/>
//     Gross Amount Payable (after Due Date): ${GrossAmount}
//     `)