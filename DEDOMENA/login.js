document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const loginEmail = document.getElementById("loginEmail").value;
    const loginSenha = document.getElementById("loginSenha").value;
    
    // Recupera os usuários do LocalStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    
    // Verifica se algum usuário tem o email e senha fornecidos
    const user = users.find(u => u.email === loginEmail && u.senha === loginSenha);

    // Se o usuário foi encontrado, redireciona para outra página
    if (user) {
        // Por exemplo, redireciona para a página "perfil.html"
        window.location.href = "perfil.html";
    } else {
        // Se não encontrar, exibe uma mensagem de erro
        document.getElementById("errorMessage").style.display = "block";
    }
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const loginEmail = document.getElementById("loginEmail").value;
    const loginSenha = document.getElementById("loginSenha").value;
    
    // Recupera os usuários do LocalStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    
    // Verifica se algum usuário tem o email e senha fornecidos
    const user = users.find(u => u.email === loginEmail && u.senha === loginSenha);

    // Se o usuário foi encontrado, redireciona para a página de perfil
    if (user) {
        // Salva o email do usuário logado no LocalStorage
        localStorage.setItem("loggedUser", user.email);
        window.location.href = "perfil.html"; // Redireciona para a página de perfil
    } else {
        // Se não encontrar, exibe uma mensagem de erro
        document.getElementById("errorMessage").style.display = "block";
    }
});