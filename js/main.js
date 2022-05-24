let Email = document.getElementById("email");
let Password = document.getElementById("password");
let sign = document.getElementById("signUp");
let loginCard = document.getElementsByClassName('loginCard');
let login = document.getElementById("login");
let Name = document.getElementById("name");
// let containerContent =getElementsByClassName("containerContent");
let mood = "signin"
let error = document.getElementById("error");
let hello =document.getElementById("hello");
let temp;
let logedSuccess=false;
let usersInfo;
if (localStorage.getItem("usersInfo") != null) {
    usersInfo = JSON.parse(localStorage.getItem("usersInfo"));
    

}
else {
    usersInfo = [];
    

}
Name.style.display = "none";



sign.addEventListener("click", () => {
    // loginCard.insertBefore(name,login.firstElementChild)
    if (mood === "signIn") {
        signInMood();
       
    }
    else {
        signUpMood()
    }


})
login.addEventListener("click", () => {
    if (mood === "signIn") {
        signUp();
    }
    else {
        
        logIn();
        
    }
})
function signUpMood() {
    login.innerHTML = 'Sign Up';
    sign.innerHTML = 'Sign In';
    mood = "signIn"
    // Password.style.placeholder="";
    Name.style.display = "inline";
    hideErro();
    clear();
}
function signInMood() {
    login.innerHTML = 'login';
    sign.innerHTML = 'Sign Up';
    mood = "signUp"
    Name.style.display = "none";
    hideErro();
    clear();
}

function signUp() {
    
    if (Email.value === "" || Password.value === "" || Name.value === "") {
        error.innerHTML = 'All inputs is required'
        error.style.color="red";
        showError();
    }
     else {
        let signUpInfo = {
            userName: Name.value,
            userEmail: Email.value,
            userPass: Password.value
        }
        usersInfo.push(signUpInfo);
        console.log(usersInfo)
        localStorage.setItem("usersInfo", JSON.stringify(usersInfo));
        clear();
        alert("you signed up successfully");
    }
}
function clear() {
    Name.value = "";
    Email.value = "";
    Password.value = "";
}
function logIn() {
    if (Email.value == "" || Password.value == "") {
        error.innerHTML = 'All inputs is required';
        error.style.color="red";
        showError();
    }else {
        let signedInfo = []
        signedInfo = JSON.parse(localStorage.getItem("usersInfo"))
        // console.log(signedInfo.length)
        for (let i = 0; i < signedInfo.length; i++) {
            if (signedInfo[i].userEmail.includes(Email.value) && signedInfo[i].userPass.includes(Password.value)) {
                logedSuccess=true;
                
                return goHome();

            }
             else if (logedSuccess==false && i==signedInfo.length-1) {
                // console.log("hooo")
                error.innerHTML = 'incorrect email or password'
                error.style.color="red";
                showError();
                clear();
            }
        }
    }
}

function goHome() {
    window.location.href="home.html"
   
}

function showError() {
    error.style.display = "block"
}
function hideErro() {
    error.style.display = "none"
}

Email.addEventListener('keyup', () => {
    hideErro()
})
Password.addEventListener('keyup', () => {
    hideErro()
})
Name.addEventListener('keyup', () => {
    hideErro()
})
