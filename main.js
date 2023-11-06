fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
    .then(response => response.json())
    .then(movieData => {
        console.log(movieData);
//exercise 1.2
let moviesNumber = 0

        for (let i = 0; i < movieData.length; i++) {
            if (movieData[i].title) {
                moviesNumber++;
            }
        };
//exercise 2
        let moviesFetched=  `${movieData.length} movies fetched`;

        document.querySelector("#fetch").innerHTML = moviesFetched;

        //Exercise 3

        let firstMovie = movieData[0].title;

        document.querySelector("#firstMovie").innerHTML = firstMovie

        //exercise 4

        /*const moviesList = movieData

        const listOfMoviesElement = document.querySelector("#listOfMovies")

        moviesList.forEach((movie) => {
            listOfMoviesElement.innerHTML += `<li>${movie.title}</li>`;
        });
*/

        //exercise 5 ikke kommet i mål
        function movieKnap() {
            const listOfMoviesElement = document.querySelector("#listOfMovies");
            listOfMoviesElement.innerHTML = "";

            for (let i = 0; i < movieData.length; i++) {
                if (movieData[i].year >= 2014) {
                    listOfMoviesElement.innerHTML += "<li>" + movieData[i].year + "</li>";
                }
            }

        }
    });