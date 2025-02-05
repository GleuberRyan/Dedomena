document.addEventListener("DOMContentLoaded", function() {
    // Recupera os usuários do LocalStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    
    // Verifica se o usuário está logado
    const loggedUser = localStorage.getItem("loggedUser");

    if (!loggedUser) {
        // Se não estiver logado, redireciona para a página de login
        window.location.href = "login.html";
        return;
    }

    // Exibe o nome do usuário logado
    const user = users.find(u => u.email === loggedUser);
    if (user) {
        document.getElementById("userName").textContent = user.name;
    }

    // Função para logout
    document.getElementById("logoutBtn").addEventListener("click", function() {
        localStorage.removeItem("loggedUser");
        window.location.href = "login.html";  // Redireciona para a página de login após o logout
    });
});

function rolardado() {
    // Obter o valor do dado selecionado (D4, D6, D8, D10, D12, D20)
    const diceType = document.getElementById("diceType").value;

    // Gerar um número aleatório entre 1 e o valor máximo do dado selecionado
    const result = Math.floor(Math.random() * diceType) + 1;

    // Exibir o resultado na página
    document.getElementById("result").innerHTML = `Você rolou um ${result}`;
}