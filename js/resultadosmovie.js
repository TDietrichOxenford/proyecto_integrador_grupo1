let queryString = location.search;
let queryserie = new URLSearchParams(queryString)
let buscar = queryserie.get("buscar")
let seleccion = queryserie.get("seleccion")
let apiKey = "49123d0deec6cb1469f51f0da1c92172";
let info = document.querySelector(".seccionuno"); 
let resultsHTML = ""
let rueda = document.querySelector(".rueda");

let url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${buscar}`;
let infoserie = document.querySelector(".seccionuno"); 
let resultsserieHTML = ""
let urldos = `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${buscar}`;


if(seleccion == "movie"){
fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let movies = data.results; 
console.log(movies)
rueda.style.display = "none";
    for (let i = 0; i < data.results.length; i++) {
      resultsHTML += `
       <a class="linkdetail" href="./detail-movie.html?id=${movies[i].id}">
          <div class="peliculas">
            <img class="imgpelis" src="https://image.tmdb.org/t/p/w500${movies[i].poster_path}" alt="${movies[i].title}">
            <p class="textseccion">
              <span class="negrita">${movies[i].original_title}</span> (${movies[i].release_date})
            </p>
          </div>
        </a>
       
      `;
  }
      info.innerHTML = resultsHTML;
          
  })
  .catch(function(error) {
    console.error("Ocurrió un error:", error.message);
  });
} 

else if(seleccion == "tv"){
fetch(urldos)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let serie = data.results; 
console.log(serie)
rueda.style.display = "none";
    for (let i = 0; i < data.results.length ; i++) {
      resultsserieHTML += `
        <a class="linkdetail" href="./detail-serie.html?id=${serie[i].id}">
          <div class="peliculas nuevo">
            <img class="imgpelis" src="https://image.tmdb.org/t/p/w500${serie[i].poster_path}" alt="${serie[i].name}">
            <p class="textseccion">
              <span class="negrita">${serie[i].name}</span> (${serie[i].first_air_date})
            </p>
          </div>
        </a>
      `;
    }
    info.innerHTML = resultsserieHTML;
  })
  .catch(function(error) {
    console.error("Ocurrió un error:", error.message);
})
} else{
  
}








