let generospeli = document.querySelector(".cajadrama")
let apiKey = "49123d0deec6cb1469f51f0da1c92172";
let detallegeneros = ''

console.log("id")


fetch(` https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=es-ES&with_genres=35`)

.then(function(response){
    return response.json()
})
.then(function(data){
   console.log(data)
   let genero = data.results; 

    for (let i = 0; i < 5; i++) {
      detallegeneros += `
                <div class="peliculasdrama">
                    <img class="imgdrama" src="https://image.tmdb.org/t/p/w500${genero[i].poster_path}">
                    <p class="textdrama"> <span class="negrita">${genero[i].original_title}</span> ${genero[i].release_date}</p>
                </div>
            
        `;
    }
 
    
    generospeli.innerHTML = detallegeneros;
})
.catch(function(error) {
    console.error("Ocurrió un error:", error.message);
  });


  