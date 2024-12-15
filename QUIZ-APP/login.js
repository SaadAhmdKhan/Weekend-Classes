  // code for welcome file
// sign up
  let name;
  let email;
  let password;

  let signUpName = document.querySelector("#name")
  let signUpEmail = document.querySelector("#email")
  let signUpPassword = document.querySelector("#password")
  let signUp = document.querySelector("#sumitSignUp");
  signUp.addEventListener("click",()=>{
    if(signUpName.value === "" || signUpEmail.value === "" || signUpPassword.value === ""){
      Swal.fire({
        title: "Input field required",
        text: "Kindly fill all input fields",
        icon: "error"
      });
    } else {
      name = signUpName.value;
      email = signUpEmail.value;
      password = signUpPassword.value;
      console.table(name,email,password)
      signUpName.value = "";
      signUpEmail.value = "";
      signUpPassword.value = "";
      swal.fire({
        title: 'Registration successful'
      })
    }
  });

// Sign In
let signInEmail = document.querySelector("#signInEmail");
let signInPassword = document.querySelector("#signInPassword");
let signIn = document.querySelector("#sumitSignIn");

signIn.addEventListener("click", () => {
  if (signInEmail.value === "" || signInPassword.value === "") {
    Swal.fire({
      title: "Input field required",
      text: "Kindly fill all input fields",
      icon: "error",
    });
  } else if (signInEmail.value !== email || signInPassword.value !== password) {
    Swal.fire({
      title: "Email or Password is invalid",
      text: "Please enter valid credentials",
      icon: "error",
    });
  } else {
    Swal.fire({
      title: "Sign In Successful",
      text: "Redirecting to your dashboard...",
      icon: "success",
      timer: 2000,
      showConfirmButton: false,
    }).then(() => {
      // Redirect to the next page
      window.location.href = "welcome.html";
    });
  }
});










