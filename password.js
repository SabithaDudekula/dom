let password = document.getElementById("password");
let toggleBtn = document.getElementById("Btn");

function Password() {
    if (password.type === "password") {
        password.type = "text";    
        Btn.textContent = "👁"; 
    } else {
        password.type = "password"; 
        Btn.textContent = "👁"; 
    }
}
