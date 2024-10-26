// // Quertion 01
// var FirstInput=prompt("Enter Your First Name");
// var SecindInput=prompt("Emter Your Last Name");
// document.write(`${FirstInput} ${SecindInput}`);



// Question 02
// var userInput=prompt("Enter Your Favourite Mobile Name");
// var len=userInput.length;

// document.write(`My favorite Moblie phone is ${userInput}`);
// document.write(`Lenght of String: ${len}`);


// Question 03
// var NAme="Pakistan";

// var find=NAme.indexOf("n");
// document.write(`String: ${NAme}<br/>`);
// document.write(`Index of "n" is ${find}`);

// Question 04
// var NAme="Hello World";

// var find=NAme.lastIndexOf("r");
// document.write(`String: ${NAme}<br/>`);
// document.write(`Last Index of "l" is ${find}`);


// Question 05
// var NAme="Pakistan";

// var find=NAme.indexOf([3]);
// document.write(`String: ${NAme}<br/>`);
// document.write(`Index of "n" is ${find}`);



// Qustion 07
// var City="Hyderabad";

// var rep=City.replace("Hyderabad", "Islamabad")
// document.write(`City ${City}`)
// document.write(`After Replace; ${rep}`)


// Question 08
// var message = "Wahab and Saad are best friends. They play cricket and football together.";

// var rep=message.replaceAll("and", "&")
// document.write(`City ${message}<br/>`)
// document.write(`After Replace; ${rep}`)



// Question 09
// var num ="472";
// document.write(`Value:${num}<br/>${typeof(num)}<br/>`)
// var num2=parseInt(num)
// document.write(`Value:${num}<br/>${typeof(num2)}`)

// Question 10
// var userInput=prompt("Enter A Word in Small Letter");
// var update=userInput.toUpperCase();

// document.write(`UserInput:${userInput}<br/>`)
// document.write(`Upper Case:${update}`)


// Question 11
// var userInput="javascript"
// var update1= userInput[0]
// var update=update1.toUpperCase()
// var final=userInput.slice(1)
// document.write(`UserInput${userInput}<br/>`)
// document.write(`Title Case${update}${final}`)





// Qy=uestion 13
// var userInput = prompt("Enter anything");


// if (userInput.charCodeAt() === 33) {
//     if(userInput.charCodeAt() === 44){
//        if(userInput.charCodeAt() === 46){
//         if(userInput.charCodeAt() === 64){
           
        

//         }
//         else{lert("Please Enter a Valid Input")

//         }

//        }
//        else{ alert("Please Enter a Valid Input")

//        }
       

//     }


//     else{
//         alert("Please Enter a Valid Input")
//     }   
// }
// else{
//     alert("Please Enter a Valid Input")

// }




// Question 14
// var item = ["cake", "apple pie", "cookie", "chips", " patties"];
// var userInput = prompt("Enter Your item do you want").toLowerCase();
// var foundIt = "Nahi"
// var indexnum;
// for (var i = 0; i < item.length; i++) {
//     if (userInput == item[i]) {
//         foundIt = "Han"
//         indexnum = i;
//     }
// }
// if (foundIt) {
//     alert(`${userInput} is Avalable in index ${i} in our bakery.`)
// }
// else {
//     alert(`We are sorry .${userInput} in not aviable in our bakery.`)
// }



// Question 15
// var user_pass=prompt("Enter Password");
// var correct_pass=false;

// for (var i=0;i<=user_pass.length;i++){
// if ((user_pass.charCodeAt() >=48&&user_pass.charCodeAt()<=57)&&(user_pass.charCodeAt()>=65&&user_pass.charCodeAt()<=90||user_pass.charCodeAt()>=97&&user_pass.charCodeAt()<=122)&&(user_pass.charCodeAt()[0]!=48&&user_pass.charCodeAt()<=57)&&user_pass.length>=6){
//     correct_pass=true;
// }
// }
// if(correct_pass){
//     alert("Password Sucessfully Generated!")
// }
// else{
//     alert("Please Enter Valid Password!")
// }





// Question 16
// var university = "NED University";


// var universityarray = university.split(" ");

// for (var i = 0; i < universityarray.length; i++) {
//   document.write(universityarray[i]);
// }







                                                  // CHAPTER 26-30

// // Question 01
// var userInput=+prompt("Enter  number");
// var num1=Math.round(userInput);
// var num2=Math.ceil(userInput);
// var num3=Math.floor(userInput);
// document.write(`Number${userInput}<br/>Round of ${num1}<br/>Floor Value ${num3}<br/>Ceil Value${num2}`)


// Question 02
// var userInput=+prompt("Enter  number");
// var num1=Math.round(userInput);
// var num2=Math.ceil(userInput);
// var num3=Math.floor(userInput);
// document.write(`Number${userInput}<br/>Round of ${num1}<br/>Floor Value ${num3}<br/>Ceil Value${num2}`)




// Question 04
// var random=Math.floor(Math.random()*6 +1);
// document.write(`Random Dice: ${random}`);


// Question 05
// var random=Math.floor(Math.random()*2 +1);
// if(random=== 2){
//     document.write(`${random}<br/>Radom Coin Value Head`)
// }
// else if(random=== 1){
//     document.write(`${random}<br/>Radom Coin Value Tail`)
// }

// Question 06
// var random=Math.floor(Math.random()*100 +1);
// document.write(`Random Number Between 1 and 100: ${random}`);


var num=Math.floor(Math.random()*10 +1)
var userInput=+prompt("Please Enter a Number Between 1 to 10")

if(userInput===num){
    document.write("Bingo")
}
else if(userInput===++num ){
    document.write("Close enough to the correct answer.")
}
else{
    document.write("Sorry,You Lost")
}                                                 