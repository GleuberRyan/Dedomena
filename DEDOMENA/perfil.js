document.addEventListener("DOMContentLoaded", function() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    
    const loggedUser = localStorage.getItem("loggedUser");

    if (!loggedUser) {
        window.location.href = "login.html";
        return;
    }

    const user = users.find(u => u.email === loggedUser);
    if (user) {
        document.getElementById("userName").textContent = user.name;
    }

    document.getElementById("logoutBtn").addEventListener("click", function() {
        localStorage.removeItem("loggedUser");
        window.location.href = "login.html";  
    });
});

function rolardado() {
    const diceType = document.getElementById("diceType").value;

    const result = Math.floor(Math.random() * diceType) + 1;

    document.getElementById("result").innerHTML = `Você rolou um ${result}`;
}