
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
    div.addEventListener("click", function (){
        sonar(info)})
    contenedor.appendChild(div)

}

function sonar(info) {
    const tiempo = document.getElementById("tiempo").setAttribute("src" , info.audio.url)

   document.getElementById("image").setAttribute("src" , info.image.url)

   document.getElementById("titulo").innerHTML =info.title
}




axios.get("https://api.institutoalfa.org/api/songs")
    .then(peticion)


