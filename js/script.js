// catch the sign in btn
const signInBtn = document.getElementById("signInBtn").addEventListener("click", ()=>{
        // catch the inputs
    const userName = document.getElementById("userName").value;
    const passWord = document.getElementById("passWord").value;
    console.log(userName, passWord);

    // validation 
    if(userName == "admin" && passWord == "admin123"){
        window.location.href = 'home.html'
        console.log("welcome you are logged in");
    }
    else{
        alert("Sorry Wrong Credential, Try Again")
    }
})