
let generospeli = document.querySelector(".contenedoragenerosdetail")
let apiKey = "49123d0deec6cb1469f51f0da1c92172";
let detallegeneros = ''


fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`)

.then(function(response){
    return response.json()
})
.then(function(data){
   console.log(data)
   let genero = data.results; 

    for (let i = 0; i < genero.length; i++) {
      detallegeneros += `
            <h2 class="titulodrama">${genero[i].name}</h2>
            <div class="cajadrama">
                <div class="peliculasdrama">
                    <img class="imgdrama" src="https://image.tmdb.org/t/p/w500${genero[i].poster_path}"  alt="">
                    <p class="textdrama"> <span class="negrita">${genero[i].original_title}</span> ${genero[i].release_date}</p>
                </div>
            </div>
        `;
    }
 
    
        generospeli.innerHTML = detallegeneros
})
.catch(function(error) {
    console.error("Ocurrió un error:", error.message);
  });