let peliculas = document.querySelector(".seccionuno")
let characters = ""

fetch("https://api.themoviedb.org/3/account/49123d0deec6cb1469f51f0da1c92172/lists")
.then(function(response) {
    return response.json()
})
.then(function(data){
    let results = data.results;
    console.log(data)

}) 