let queryString = location.search;
let queryserie = new URLSearchParams(queryString)
let id = queryserie.get("buscar")
let apiKey = "49123d0deec6cb1469f51f0da1c92172";
let info = document.querySelector(".results"); 
let resultsHTML = ""

let url = `https://api.themoviedb.org/3/${id}/popular?api_key=${apiKey}&language=es-ES&page=1`;

fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let movies = data.results; 

    for (let i = 0; i < 5; i++) {
      resultsHTML += `
       <a class="linkdetail" href="./detail-movie.html?id=${movies[i].id}">
          <div class="peliculas">
            <img class="imgpelis" src="https://image.tmdb.org/t/p/w500${movies[i].poster_path}" alt="${movies[i].title}">
            <p class="textseccion">
              <span class="negrita">${movies[i].title}</span> (${movies[i].release_date})
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

let infoserie = document.querySelector(".results"); 
let resultsserieHTML = ""
let urldos = `https://api.themoviedb.org/3/${id}/popular?api_key=${apiKey}`;

fetch(urldos)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let serie = data.results; 

    for (let i = 0; i < 5; i++) {
      resultsserieHTML += `
        <a class="linkdetail" href="./detail-serie.html?id=${serie[i].id}">
          <div class="peliculas">
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

