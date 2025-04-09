
const contenedor = document.getElementById("musicas")

function peticion(info) {

    const musicas = info.data.songs

    musicas.map(renderizarMusica)

}

function renderizarMusica(info) {

    const div = document.createElement("div")
    div.setAttribute("class", "musicas")

    div.innerHTML = `
    <img src="${info.image.url}" alt="">
            <h3>${info.title}</h3>

            `
    contenedor.appendChild(div)

} 




axios.get("https://api.institutoalfa.org/api/songs")
    .then(peticion)


