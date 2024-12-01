// Normal Function
// GreetUser();  // Hoisting 

// function GreetUser(){
//     console.log('Hello John')
// }

// var promptname = prompt('Enter Your Name')

// if(promptname === 'john'){
//     GreetUser()
// } 


// Arrow Function

// var GettheTime = () => {
//     console.log(new Date())
// }

// GettheTime()

// creation of function , parameters

// function sumoftwo(a,b){
//   var result = a+b
//   return result
// }

// var resultfunc = sumoftwo(5,3)
// console.log(resultfunc)
// console.log(sumoftwo(5,3)) // argument
// console.log(sumoftwo(15,30)) // argument



// GreetUser()

// // // Normal Function --  // Hosting

// function GreetUser(){
//     alert('Hello John')
// }


// // // Arrow Function 
// var TellTheDate = () => {
//     alert(new Date())
// }
// TellTheDate() // if is top on the page or editor its not run


// parameters

// function sumOfTwo(num1 , num2 , num3) {
//     var result = num1 + num2 + num3
//     console.log(result)
// }


// sumOfTwo(55,25,10)
// var sum = sumOfTwo(2,3,4)
// console.log(sum)


// function multiplynum(num1,num2,num3,num4){
//     var result = (num1 * num2 * num3 *num4)
//     return result
// }

// var score = multiplynum(1,2,3,5)  // value 
// console.log(score)

// function hellouser(){
//     var username = "john"     //local scope
//     console.log(username)
// }

// hellouser()


// // var userName = 'Doe'  // Scope - Global 
// console.log(userName) // 

// var randomString = 'AH634678@#$%&^adajsasm'

// function GeneraterandomPass(){
//     var randompass = "";
// for(var i = 0; i<10; i ++){
//     var randomnum = Math.floor(Math.random * randomString.length)
//     randompass+=randomString[randomnum]
// }
    
//     document.getElementById('passvalue').innerHTML = `<span>${randompass}</span> `
//     console.log(randompass)
// }

// GeneraterandomPass()

// function onclickfunc(){
//     alert('Hello World')
// }

// function playingwithdom(){
//     console.log(event.target.parentNode.parentNode.children.length)
// }

// var listingcontainer = document.getElementById('listingContainer')
// console.log(listingcontainer.hasAttribute('class'))           // return true if attr is available otherwise return false
// console.log(listingcontainer.getAttribute('class'))
// listingcontainer.setAttribute('class', 'listingcontainer-js')             //set sttribute too set id and class through java in html




