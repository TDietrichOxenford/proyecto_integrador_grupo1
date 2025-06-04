let queryString = location.search;
let queryserie = new URLSearchParams(queryString)
let id = queryserie.get("id")
let serie = document.querySelector(".peliculasmovie")
let apiKey = "49123d0deec6cb1469f51f0da1c92172";
let generos = ""

console.log("id")

fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}`)

.then(function(response){
    return response.json()
})
.then(function(data){
   console.log(data)
    for(let i = 0 ; i < data.genres.length; i++){
    generos+= data.genres[i].name
   }
   console.log(generos)
    serie.innerHTML = `
            <div class="partesmovie cajauno">
            <img class="fotouno" src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt="${data.title}">
        </div>
        <div class="partesmovie cajados">
            <h3>${data.name}</h3>
            <p><span class="negrita">Calificación:</span> ${data.popularity}</p>
            <p><span class="negrita">Fecha de estreno:</span> ${data.release_date}</p>
        </div>
        <div class="partesmovie cajatres cajatresseries">
            <p><span class="negrita">Duración:</span> ${data.episode_run_time}</p>
    <a href="./moviegenres.html"><p><span class="negrita">Género:</span> ${generos}</p></a>
        </div>
        <div class="partesmovie cajacuatro">
            <p><span class="negrita">SINOPSIS:</span> ${data.overview} </p>
        </div>
 
        `
})
.catch(function(error) {
    console.error("Ocurrió un error:", error.message);
  });