// Recupera personagens do localStorage ou inicializa um array vazio
let characters = JSON.parse(localStorage.getItem("characters")) || [];

// Elementos DOM
const characterForm = document.getElementById("characterForm");
const characterList = document.getElementById("characterList");

// Função para salvar no localStorage
function saveToLocalStorage() {
    localStorage.setItem("characters", JSON.stringify(characters));
}

// Função para renderizar a lista de fichas
function renderCharacters() {
    characterList.innerHTML = ""; // Limpar a lista
    characters.forEach((character, index) => {
        const characterItem = document.createElement("li");
        characterItem.innerHTML = `
            <strong>${character.name}</strong><br>
            Classe: ${character.class}<br>
            Nex: ${character.nex}<br>
            Nível: ${character.level}<br>
            Habilidades: ${character.abilities}<br>
            <br><strong>Atributos:</strong><br>
            Agilidade: ${character.agility}<br>
            Força: ${character.strength}<br>
            Intelecto: ${character.intelligence}<br>
            Presença: ${character.presence}<br>
            Vigor: ${character.vigor}<br>

            <button onclick="editCharacter(${index})">Editar</button>
            <button onclick="deleteCharacter(${index})">Excluir</button>
        `;
        characterList.appendChild(characterItem);
    });
}

// Função para criar ou editar uma ficha
characterForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o recarregamento da página

    const name = document.getElementById("characterName").value;
    const className = document.getElementById("characterClass").value;
    const nex = document.getElementById("characterNex").value;
    const level = document.getElementById("characterLevel").value;
    const abilities = document.getElementById("characterAbilities").value;
    const agility = document.getElementById("characterAgilidade").value;
    const strength = document.getElementById("characterForça").value;
    const intelligence = document.getElementById("characterIntelecto").value;
    const presence = document.getElementById("characterPresença").value;
    const vigor = document.getElementById("characterVigor").value;
    const characterId = document.getElementById("characterId").value;

    const characterIndex = characters.findIndex(c => c.id === parseInt(characterId));

    if (characterId && characterIndex !== -1) {
        // Atualizar ficha existente
        characters[characterIndex] = {
            id: parseInt(characterId),
            name,
            class: className,
            nex,
            level,
            abilities,
            agility,
            strength,
            intelligence,
            presence,
            vigor
        };
    } else {
        // Criar nova ficha
        characters.push({
            id: Date.now(),
            name,
            class: className,
            nex,
            level,
            abilities,
            agility,
            strength,
            intelligence,
            presence,
            vigor
        });
    }

    saveToLocalStorage(); // Salvar as fichas no localStorage
    characterForm.reset(); // Limpar formulário
    document.getElementById("characterId").value = ""; // Resetar ID
    renderCharacters(); // Atualizar lista de fichas
});

// Função para editar uma ficha
function editCharacter(index) {
    const character = characters[index];
    document.getElementById("characterName").value = character.name;
    document.getElementById("characterClass").value = character.class;
    document.getElementById("characterNex").value = character.nex;
    document.getElementById("characterLevel").value = character.level;
    document.getElementById("characterAbilities").value = character.abilities;
    document.getElementById("characterAgilidade").value = character.agility;
    document.getElementById("characterForça").value = character.strength;
    document.getElementById("characterIntelecto").value = character.intelligence;
    document.getElementById("characterPresença").value = character.presence;
    document.getElementById("characterVigor").value = character.vigor;
    document.getElementById("characterId").value = character.id; // Define o ID para edição
}

// Função para excluir uma ficha
function deleteCharacter(index) {
    if (confirm("Tem certeza que deseja excluir essa ficha?")) {
        characters.splice(index, 1); // Remove a ficha
        saveToLocalStorage(); // Atualiza o localStorage
        renderCharacters(); // Atualiza a lista
    }
}

// Renderizar as fichas ao carregar a página
renderCharacters();

characters.push({
    id: Date.now(), // Garante que cada personagem tenha um ID único
    name,
    class: className,
    nex,
    level,
    abilities,
    agility,
    strength,
    inteligence,
    presence,
    vigor
});
