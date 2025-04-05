
const contenedor = document.getElementById("musicas")

function peticion(info) {

    const musicas = info.data.songs

    musicas.map(renderizarMusica)

}

function renderizarMusica(info) {

    const div = document.createElement("div")
    div.setAttribute("class", "musicas")

    div.innerHTML = `
    <img src="/assets/Frame 5.svg" alt="">
            <h3>musica</h3>
            `
    contenedor.appendChild(div)

}


axios.get("https://api.institutoalfa.org/api/songs")
    .then(peticion)


