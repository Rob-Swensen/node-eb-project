const axios = require ('axios');

module.exports = {
    getMovies: (req, res) => {
        suggestedMovies = [];
        
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=b0905bacefecc34fb178a826419bdf12&language=en-US&page=1`)
        .then(response => {
            suggestedMovies.push(response.data.results)
                axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=b0905bacefecc34fb178a826419bdf12&language=en-US&page=2`)
                .then(response => {
                    suggestedMovies = [...suggestedMovies, ...response.data.results]
                        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=b0905bacefecc34fb178a826419bdf12&language=en-US&page=2`)
                        .then(response => {
                            suggestedMovies = [...suggestedMovies, ...response.data.results]
                            console.log(suggestedMovies)
                            res.status(200).send(suggestedMovies)})

                })   
 
        }
    )
 }
}