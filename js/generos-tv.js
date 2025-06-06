
let apiKey = "49123d0deec6cb1469f51f0da1c92172";
let containerserie = document.querySelector('.contenedorageneros')
let listaDeGenerosserie = ''

fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}`)
    .then(function(response){
    return response.json()
})
    .then(function(data){
   console.log(data)
    for(let i = 0 ; i < data.genres.length; i++){
listaDeGenerosserie += `
            <div class="cajasgeneros">
                <a class="linkgeneres" href="./detail-genre.html?id=${data.genres[i].id}">
                    <h3>${data.genres[i].name}</h3>
                </a>
            </div>
`
}

containerserie.innerHTML = listaDeGenerosserie
})
.catch(error => {
console.error('Error al obtener los detalles de la serie:', error);
});