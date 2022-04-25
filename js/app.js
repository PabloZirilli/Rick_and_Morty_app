// Armo el acceso para pasarlo por fetch
const URL = "https://rickandmortyapi.com/api/";
const page = "/?page=" + getRandomInt(0, 10);
const character = URL + "character" + page;

fetch(character)
// Convierto el resultado a json
.then(response => response.json())

// Imprimo el resultado
.then(data => {
    printCharacter(data);
    
})

// Si hay algun error, lo imprimo por consola
.catch(error => console.log(error))


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function printCharacter(response) {
    const random = getRandomInt(0, 20);
    const name = response.results[random].name;
    document.getElementById("name").textContent = name;
    const origin = response.results[random].origin.name;
    document.getElementById("origin").textContent = "Origin: " + origin;
    const species = response.results[random].species;
    document.getElementById("specie").textContent = "Specie: " + species;
    const location = response.results[random].location.name;
    document.getElementById("location").textContent = "Location: " + location;
    const status = response.results[random].status;
    document.getElementById("status").textContent = "Status: " + status;
    const image = response.results[random].image;
    document.getElementById("image-profile").src = image;
}

function createContainter() {
    const container = document.createElement("div");
    container.setAttribute("id", "container");
    container.classList.add("container");
    document.body.appendChild(container);
}

function addLogo() {
    const container = document.getElementById("container");
    const logoContainer = document.createElement("div");
    logoContainer.setAttribute("id", "logo-container");
    logoContainer.classList.add("row");
    
    const logoImage = document.createElement("img");
    logoImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/fr/c/c8/Rick_and_Morty_logo.png");
    logoImage.classList.add("logo-image");

    container.appendChild(logoContainer);
    logoContainer.appendChild(logoImage);

}

function createRow() {
    const row = document.createElement("div");
    row.setAttribute("id", "row");
    row.classList.add("row");
    document.getElementById("container").appendChild(row);
}


function createCard() {
    const cardBase = document.createElement("div");
    cardBase.setAttribute("id", "card-base");
    cardBase.classList.add("card","mb-3");
    document.getElementById("row").appendChild(cardBase);
}

function addElementsToCard() {
    const cardTitle = document.createElement("h5");
    cardTitle.setAttribute("id", "name");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = "Name";
    document.getElementById("card-base").appendChild(cardTitle);

    const cardImage = document.createElement("img");
    cardImage.setAttribute("id", "image-profile");
    cardImage.setAttribute("src", "https://rickandmortyapi.com/api/character/avatar/19.jpeg");
    cardImage.classList.add("card-img-top");
    document.getElementById("card-base").appendChild(cardImage);

    const cardBody = document.createElement("div");
    cardBody.setAttribute("id", "card-body");
    cardBody.classList.add("card-body");
    document.getElementById("card-base").appendChild(cardBody);

    const cardSpecs = document.createElement("ul");
    cardSpecs.setAttribute("id", "specs");
    cardSpecs.classList.add("list-group","list-group-flush");
    document.getElementById("card-body").appendChild(cardSpecs);

    const cardSpecsOrigin = document.createElement("li");
    cardSpecsOrigin.setAttribute("id", "origin");
    cardSpecsOrigin.classList.add("list-group-item");
    document.getElementById("specs").appendChild(cardSpecsOrigin);

    const cardSpecsSpecie = document.createElement("li");
    cardSpecsSpecie.setAttribute("id", "specie");
    cardSpecsSpecie.classList.add("list-group-item");
    document.getElementById("specs").appendChild(cardSpecsSpecie);

    const cardSpecsLocation = document.createElement("li");
    cardSpecsLocation.setAttribute("id", "location");
    cardSpecsLocation.classList.add("list-group-item");
    document.getElementById("specs").appendChild(cardSpecsLocation);

    const cardSpecsStatus = document.createElement("li");
    cardSpecsStatus.setAttribute("id", "status");
    cardSpecsStatus.classList.add("list-group-item");
    document.getElementById("specs").appendChild(cardSpecsStatus);
}



function addResult() {
    createContainter();
    addLogo();
    createRow();
    createCard();
    addElementsToCard();
}

addResult();