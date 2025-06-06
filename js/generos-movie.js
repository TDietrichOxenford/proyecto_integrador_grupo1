let container = document.querySelector('.contenedorageneros')
let listaDeGeneros = ''
let apiKey = "49123d0deec6cb1469f51f0da1c92172";

fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
    .then(function(response){
    return response.json()
})
    .then(function(data){
   console.log(data)
    for(let i = 0 ; i < data.genres.length; i++){
listaDeGeneros += `
            <div class="cajasgeneros">
                <a class="linkgeneres" href="./detail-genre.html?id=${data.genres[i].id}">
                    <h3>${data.genres[i].name}</h3>
                </a>
            </div>
`
}

container.innerHTML = listaDeGeneros
})
.catch(error => {
console.error('Error al obtener los detalles de la película:', error);
});
