document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const loginEmail = document.getElementById("loginEmail").value;
    const loginSenha = document.getElementById("loginSenha").value;
    

    const users = JSON.parse(localStorage.getItem("users")) || [];
    

    const user = users.find(u => u.email === loginEmail && u.senha === loginSenha);

   
    if (user) {
        
        window.location.href = "perfil.html";
    } else {
        document.getElementById("errorMessage").style.display = "block";
    }
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const loginEmail = document.getElementById("loginEmail").value;
    const loginSenha = document.getElementById("loginSenha").value;
    
   
    const users = JSON.parse(localStorage.getItem("users")) || [];
    
   
    const user = users.find(u => u.email === loginEmail && u.senha === loginSenha);

    
    if (user) {
        localStorage.setItem("loggedUser", user.email);
        window.location.href = "perfil.html"; 
    } else {
        document.getElementById("errorMessage").style.display = "block";
    }
});