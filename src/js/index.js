// Constantes y variables globales
const baseUrl = 'https://ddragon.leagueoflegends.com/cdn/'

// Buscamos el botón en el html
const button = document.querySelector("button");
// Buscamos el elemento con el id "cards-grid"
const grid = document.getElementById("cards-grid")

// Agregamos un event listener al botón para que se mantenga a la espera de hacer click en él
// Cuando se recibe el click, se ejecuta la función flecha
button.addEventListener("click", () => {
    button.remove();
    grid.style.visibility = 'visible';
    showChampions();
});

const showChampion = (name, image) => {
    grid.innerHTML +=    `<div class="card">
    <div id="champ-image"><img src="${image}"></div>
    <div id="name">
    ${name}
    </div>
</div>`
}

const showChampions = async () => {
    
    // Realizamos la petición al json con la información de todos los campeones
    fetch(baseUrl+'13.18.1/data/es_ES/champion.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
            // Recorremos los valores del json con los campeones
            for (let champion of Object.values(data.data)){
                // Construimos la url de la imagen
                let image = `${baseUrl}img/champion/loading/${champion.id}_0.jpg`
                // Agregamos el campeón al grid
                showChampion(champion.name,image)

            }
        })
    
}