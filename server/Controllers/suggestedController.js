const axios = require ('axios');

module.exports = {
    getMovies: (req, res) => {
        movieList = [];
        
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=b0905bacefecc34fb178a826419bdf12&language=en-US&page=5`)
        .then(response => {
            movieList = [...response.data.results]
                axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=b0905bacefecc34fb178a826419bdf12&language=en-US&page=2`)
                .then(response => {
                    movieList = [...movieList, ...response.data.results]
                        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=b0905bacefecc34fb178a826419bdf12&language=en-US&page=3`)
                        .then(response => {
                            movieList = [...movieList, ...response.data.results]
                                axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=b0905bacefecc34fb178a826419bdf12&language=en-US&page=4`)
                                .then(response => {
                                    movieList = [...movieList, ...response.data.results]
                                        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=b0905bacefecc34fb178a826419bdf12&language=en-US&page=6`)
                                        .then(response => {
                                            movieList = [...movieList, ...response.data.results]
                                                axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=b0905bacefecc34fb178a826419bdf12&language=en-US&page=7`)
                                                .then(response => {
                                                    movieList =[...movieList, ...response.data.results]
                                                        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=b0905bacefecc34fb178a826419bdf12&language=en-US&page=11')
                                                        .then(response => {
                                                            movieList = [...movieList, ...response.data.results]
                                                            res.status(200).send(movieList)})
                                                        })
                                                })
                                                  
                                    
                    })
    
                 })   
 
             }
            )
        }
    )
}
}