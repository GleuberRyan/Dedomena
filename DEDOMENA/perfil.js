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

    // Renderizando lista de fichas com Handlebars
    let characters = JSON.parse(localStorage.getItem("characters")) || [];
    const characterTemplate = document.getElementById("character-template").innerHTML;
    const compiledTemplate = Handlebars.compile(characterTemplate);
    document.getElementById("characterList").innerHTML = compiledTemplate({ characters });
});

function editCharacter(id) {
    window.location.href = `editar.html?id=${id}`;
}

function deleteCharacter(id) {
    if (confirm("Tem certeza que deseja excluir essa ficha?")) {
        let characters = JSON.parse(localStorage.getItem("characters")) || [];
        characters = characters.filter(character => character.id !== id);
        localStorage.setItem("characters", JSON.stringify(characters));
        location.reload();
    }
}

function rolardado() {
    const diceType = document.getElementById("diceType").value;
    const result = Math.floor(Math.random() * diceType) + 1;
    document.getElementById("result").innerHTML = `Você rolou um ${result}`;
}
