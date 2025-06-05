let queryString = location.search;
let querymovie = new URLSearchParams(queryString)
let id = querymovie.get("id")
let movie = document.querySelector(".peliculasmovie")
let apiKey = "49123d0deec6cb1469f51f0da1c92172";
let generos = ""

console.log("id")

fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`) 

.then(function(response){
    return response.json()
})
.then(function(data){
   console.log(data)
   for(let i = 0 ; i < data.genres.length; i++){
    generos+= data.genres[i].name
   }
   console.log(generos)
    movie.innerHTML = `
            <div class="partesmovie cajauno">
    <img class="fotouno" src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt="${data.title}">
</div>
<div class="partesmovie cajados">
    <h3>${data.title}</h3>
    <p><span class="negrita">Calificación:</span> ${data.popularity}</p>
    <p><span class="negrita">Fecha de estreno:</span> ${data.release_date}</p>
</div>
<div class="partesmovie cajatres">
    <p><span class="negrita">Duración:</span> ${data.runtime}</p>
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
