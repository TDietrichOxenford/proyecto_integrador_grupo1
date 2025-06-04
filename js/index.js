let apiKey = "49123d0deec6cb1469f51f0da1c92172";
let info = document.querySelector(".seccionuno"); 
let moviesHTML = "";

let url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-ES&page=1`;

fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let movies = data.results; 

    for (let i = 0; i < 5; i++) {
      moviesHTML += `
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

    info.innerHTML = moviesHTML;
  })
  .catch(function(error) {
    console.error("Ocurrió un error:", error.message);
  });



let infodos = document.querySelector(".secciondos"); 
let urldos = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`;
let moviesDosHTML = "";


fetch(urldos)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let movies = data.results; 

    for (let i = 0; i < 5; i++) {
      moviesDosHTML += `
        <a class="linkdetail" href="./detail-serie.html?id=${movies[i].id}">
          <div class="peliculas">
            <img class="imgpelis" src="https://image.tmdb.org/t/p/w500${movies[i].poster_path}" alt="${movies[i].name}">
            <p class="textseccion">
              <span class="negrita">${movies[i].name}</span> (${movies[i].first_air_date})
            </p>
          </div>
        </a>
      `;
    }

    infodos.innerHTML = moviesDosHTML;
  })
  .catch(function(error) {
    console.error("Ocurrió un error:", error.message);
  });


let infotres = document.querySelector(".secciontres"); 
let urltres = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;
let moviesTresHTML = "";


fetch(urltres)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let movies = data.results; 

    for (let i = 0; i < 5; i++) {
      moviesTresHTML += `
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

    infotres.innerHTML = moviesTresHTML;
  })
  .catch(function(error) {
    console.error("Ocurrió un error:", error.message);
  });

