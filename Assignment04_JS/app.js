// // Question 1
// var students =[];


// // Question 2
// var students =new Array();

// // Question 3
// var str =["sarim","Pakistani","Undregraduated","SSUET"];


// // Question 4
// var num=[20, 3, 2005,+923303186145 ];


// // Question 5
// var bool=[true,false]


// // Question 6
// var mixed=["Saylani",252895, 2.5, true];



// // Question 7
// var qulafication=["SSC", "HSC"," BCS"," BS", "BCOM", "MS"," M. Phil"," PhD"];

// document.write(`
//     <h2>Qulifications:</h2>
//     ${qulafication[0]}
//     <br>${qulafication[1]}
//     <br>${qulafication[2]}
//     <br>${qulafication[3]}
//     <br>${qulafication[4]}
//     <br>${qulafication[5]}
//     <br>${qulafication[6]}
//     <br>${qulafication[7]}
//     <br>${qulafication[8]}

// `)




// Question 8
// var firstStudents=prompt("Enter First Student Name");
// var secondStudents=prompt("Enter Second Student Name");
// var thirdStudents=prompt("Enter Third Student Name");

// var Student=[firstStudents,secondStudents,thirdStudents]

// var firstMarks=+prompt("Enter "+Student[0]+" Marks");
// var secondMarks=+prompt("Enter "+Student[1]+" Marks");
// var thirdMarks=+prompt("Enter "+Student[2]+" Marks");


// var StudentMarks=[firstMarks,secondMarks,thirdMarks];

// var firstpercentage=(firstMarks/500)*100;
// var secondpercentage=(secondMarks/500)*100;
// var thirdpercentage=(thirdMarks/500)*100;
// document.write(`

//     <P>Score of ${firstStudents } is ${firstMarks}.Percentage ${ firstpercentage}%</P>
//     <P>Score of ${secondStudents } is ${secondMarks}.Percentage ${ secondpercentage}%</P>
//     <P>Score of ${thirdStudents } is ${thirdMarks}.Percentage ${ thirdpercentage}%</P>
    

//     `)


// Question 9
// Question 9
// Part(A)
// var color= ["Red","Green","Blue","Black"];
// var userInput=prompt(color +". This Color Already add.Add new Color in Start.")

// color.unshift(userInput)

// alert(color)

// Part(B)
// var color= ["Red","Green","Blue","Black"];
// var userInput=prompt(color +". This Color Already add.Add new Color in End.")

// color.push(userInput)

// alert(color)

// Part(C)
// var color= ["Red","Green","Blue","Black"];
// var userInput=prompt(color + ".This Color Already add.Add new Color in Start.")
// var userInput2=prompt("Add One  More.")


// color.unshift(userInput)
// color.unshift(userInput2)

// alert(color)



// Part(D)
// var color= ["Red","Green","Blue","Black"];
// alert(color+". Before First Color Delet")

// color.shift(color)
// alert(color)

// // Part(E)
// var color= ["Red","Green","Blue","Black"];
// alert(color+". Before Last Color Delet")

// color.pop(color)
// alert(color)


// Part(F)
// var color =["Red","Green","Yellow","Dark Blue"]
// var addindex=+prompt("Which index no. you Add");
// var addcolor=prompt("Enter Color Name do you want");

// color.splice(addindex,  0 ,addcolor);

// document.write(color)



// Part(G)
// var color =["Red","Green","Yellow","Dark Blue"]
// var addindex=+prompt("Which index no. do you Want to Delet Color");
// var deletcolor=+prompt("How Many Color Do you Want to delet");

// color.splice(addindex, deletcolor);

// document.write(color)



// Question 10
//  var studentscroe=[500,456,370,250,100];
//  alert("Score of Student: " +studentscroe);
//  studentscroe.sort

//  alert("Ordered Score Of Student: "+studentscroe)

// Question 11
//  var cities=["Karachi","Multan","Lahore","Balochistan","Islamabad"];
// document.write(`<p>Cities List:</br>${cities}<br>`);

// var selected=cities.slice(2,4);
// document.write(`<p>Selectd Cities list:<br/>${selected}`)


// Question 12
// var arr = ["This", "is", "my", "cat"];
// document.write(`<p>Array:<br>${arr}`)
// var upd=arr.join(" ")

// document.write(`<p>String:<br>${upd}`)


// Question 13
// var accessories=["Keyboard","Mouse","Printer","LCD","CPU"];

// document.write(`<p>Device:<br>${accessories}`)
// var returnval=accessories.shift(accessories)
// var returnval1=accessories.shift(accessories)
// var returnval2=accessories.shift(accessories)
// var returnval3=accessories.shift(accessories)
// var returnval4=accessories.shift(accessories)

// document.write(`<p>
// Out:<br>${returnval}
// Out:<br>${returnval1}
// Out:<br>${returnval2}
// Out:<br>${returnval3}
// Out:<br>${returnval4}

// `)






// Question 14
// var accessories=["Keyboard","Mouse","Printer","LCD","CPU"];

// document.write(`<p>Device:<br>${accessories}`)
// var returnval=accessories.pop(accessories)
// var returnval1=accessories.pop(accessories)
// var returnval2=accessories.pop(accessories)
// var returnval3=accessories.pop(accessories)
// var returnval4=accessories.pop(accessories)

// document.write(`<p>
//     Out:<br>${returnval}
//     Out:<br>${returnval1}
//     Out:<br>${returnval2}
//     Out:<br>${returnval3}
//     Out:<br>${returnval4}

    
    
//     `)




// Question 15

// var company=["Apple","Samsung","Realme","Oppo","Nokia","Haier","motorola"]

// document.write(`
//     <h2>Select your Company Name</h2>
//     <select>
//     <option value></option>
//     <option value>${company[0]}</option>
//     <option value>${company[1]}</option>
//     <option value>${company[2]}</option>
//     <option value>${company[3]}</option>
//     <option value>${company[4]}</option>
//     <option value>${company[5]}</option>
//     <option value>${company[6]}</option>
//     </select>
//     `)