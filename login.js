function Submit(){
    let username = document.getElementById("Username").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");
    let loginBtn= document.getElementById("button");

    let verUsername = "admin123";
    let verPassword = "admin123";

    if(username == verUsername && password == verPassword){
        window.location.href = "LD2.html";
    }else{
        message.textContent = "Invalid username or password. Please wait 10 seconds to attempt";
        localStorage.setItem("cooldown" , Date.now() + 10000);
        loginBtn.disabled = true;
        setTimeout(() => {
            loginBtn.disabled = false;
            message.textContent ="";
        },10000);
    }
    }
    