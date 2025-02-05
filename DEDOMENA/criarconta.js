let users = JSON.parse(localStorage.getItem("users")) || [];
let currentId = users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1;

const userForm = document.getElementById("userForm");
const userTableBody = document.getElementById("userTableBody");

function saveToLocalStorage() {
    localStorage.setItem("users", JSON.stringify(users));
}

function renderTable() {
    userTableBody.innerHTML = "";
    users.forEach((user) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.senha}</td>
            <td>
                <button onclick="editUser(${user.id})">Editar</button>
                <button onclick="deleteUser(${user.id})">Excluir</button>
            </td>
        `;
        userTableBody.appendChild(row);
    });
}

function saveUser(event) {
    event.preventDefault();

    const id = document.getElementById("userId").value;
    const name = document.getElementById("userName").value;
    const email = document.getElementById("userEmail").value;
    const senha = document.getElementById("userSenha").value;

    if (id) {

        const user = users.find((u) => u.id === parseInt(id));
        user.name = name;
        user.email = email;
        user.senha = senha;
    } else {
        users.push({ id: currentId++, name, email, senha });
    }

    saveToLocalStorage(); 
    userForm.reset();
    renderTable();
}

function editUser(id) {
    const user = users.find((u) => u.id === id);
    document.getElementById("userId").value = user.id;
    document.getElementById("userName").value = user.name;
    document.getElementById("userEmail").value = user.email;
    document.getElementById("userSenha").value = user.senha;
}

function deleteUser(id) {
    users = users.filter((u) => u.id !== id);
    saveToLocalStorage(); 
    renderTable();
}


userForm.addEventListener("submit", saveUser);


renderTable();
