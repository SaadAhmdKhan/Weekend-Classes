var loginEmail = document.getElementById('loginEmail')
var loginPass = document.getElementById('loginPass')

var savedUserInfo = JSON.parse(localStorage.getItem('userinfo'))

function loginUser() {
    if (loginEmail.value === savedUserInfo.email) {
        if (loginPass.value === savedUserInfo.password) {
            localStorage.setItem('loginUser', true)
            Swal.fire({
                title: "Login Succesfully",
                icon: "success",
            });
            setTimeout(function () {
                window.location.href = "dashboard.html";
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
}

window.onload = function(){
    var UserLoginCheck = localStorage.getItem('loginUser')
    if(UserLoginCheck === 'true'){
       window.location.href = 'dashboard.html'
    }
}