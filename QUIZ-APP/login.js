// code for welcome file
// sign up
// let name;
// let email;
// let password;

// let signUpName = document.querySelector("#name")
// let signUpEmail = document.querySelector("#email")
// let signUpPassword = document.querySelector("#password")
// let signUp = document.querySelector("#sumitSignUp");
// signUp.addEventListener("click",()=>{
//   if(signUpName.value === "" || signUpEmail.value === "" || signUpPassword.value === ""){
//     Swal.fire({
//       title: "Input field required",
//       text: "Kindly fill all input fields",
//       icon: "error"
//     });
//   } else {
//     name = signUpName.value;
//     email = signUpEmail.value;
//     password = signUpPassword.value;
//     console.table(name,email,password)
//     signUpName.value = "";
//     signUpEmail.value = "";
//     signUpPassword.value = "";
//     swal.fire({
//       title: 'Registration successful'
//     })
//   }
// });



var singupName = document.getElementById('signupName')
var signupEmail = document.getElementById('signupEmail')
var signupPass = document.getElementById('signupPass')

var emailRegex = /^\S+@\S+\.\S+$/;
var nameRegex = /^[a-zA-Z]+$/;

function userSignUp(){
  if(nameRegex.test(singupName.value)){
    if(emailRegex.test(signupEmail.value)){
      if(signupPass.value.trim() !== ""){
        var userInfo = {
          name: singupName.value,
          email: signupEmail.value,
          password: signupPass.value,
        };
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        Swal.fire({
          title: "Registered",
          text: "Account Registered Succesfully",
          icon: "success",
        });

      }else{
        Swal.fire({
          title: "Invalid Password",
          text: "Password can't be empty",
          icon: "error",
        });
      }

    }else{
      Swal.fire({
        title: "Invalid Email",
        text: "Please enter valid email address",
        icon: "error",
      });
    }

  }else{
    Swal.fire({
      title: "Invalid Name",
      text: "Please enter name",
      icon: "error",
    });
  }
}

var loginEmail = document.getElementById('loginEmail')
var loginPass = document.getElementById('loginPass')

function loginUser() {
  var savedUserInfo = JSON.parse(localStorage.getItem('userInfo'))

  if (savedUserInfo) { 
      if (loginEmail.value === savedUserInfo.email) {
          if (loginPass.value === savedUserInfo.password) {
              localStorage.setItem('loginUser', true);
              Swal.fire({
                  title: "Login Successfully",
                  text:  "Redirecting To Your Dashboard....",
                  icon: "success",
              });
           
              setTimeout(function () {
                  window.location.href = "quizwelcome.html";
              }, 2000);
          } else {
              Swal.fire({
                  title: "Incorrect Password",
                  text: "The password is incorrect",
                  icon: "error",
              });
          }
      } else {
          Swal.fire({
              title: "Email Not Found",
              text: "Entered Email not found",
              icon: "error",
          });
      }
  } else {
      Swal.fire({
          title: "Invalid Credentials",
          text:  "User Not Found",
          icon: "error",
      });
  }
}



// function loginUser() {
//   var savedUserInfo = JSON.parse(localStorage.getItem('userinfo'))
//     if (loginEmail.value === savedUserInfo.email) {
//         if (loginPass.value === savedUserInfo.password) {
          
//             localStorage.setItem('loginUser', true)
//             Swal.fire({
//                 title: "Login Succesfully",
//                 icon: "success",
//             });
//             setTimeout(function () {
//                 window.location.href = "quizwelcome.html";
//             }, 2000);
//         } else {
//             Swal.fire({
//                 title: "Incorrect Password",
//                 text: "The password is incorrect",
//                 icon: "error",
//             });
//         }
//     } else {
//         Swal.fire({
//             title: "Email Not Found",
//             text: "Entered Email not found",
//             icon: "error",
//         });
//     }
// }







// Sign In
// let signInEmail = document.querySelector("#signInEmail");
// let signInPassword = document.querySelector("#signInPassword");
// let signIn = document.querySelector("#sumitSignIn");

// signIn.addEventListener("click", () => {
//   if (signInEmail.value === "" || signInPassword.value === "") {
//     Swal.fire({
//       title: "Input field required",
//       text: "Kindly fill all input fields",
//       icon: "error",
//     });
//   } else if (signInEmail.value !== email || signInPassword.value !== password) {
//     Swal.fire({
//       title: "Email or Password is invalid",
//       text: "Please enter valid credentials",
//       icon: "error",
//     });
//   } else {
//     Swal.fire({
//       title: "Sign In Successful",
//       text: "Redirecting to your dashboard...",
//       icon: "success",
//       timer: 2000,
//       showConfirmButton: false,
//     }).then(() => {
//       // Redirect to the next page
//       window.location.href = "welcome.html";
//     });
//   }
// });










