

const movieWatchList = [];

module.exports = {
    getMovieWatchList: (req, res) => {
        res.status(200).send(movieWatchList)
    },
    addMovieWatchList: (req, res) => {
        // console.log(req.body)
        const {movie} = req.body
        movie.status = 'unwatched'
        movieWatchList.push(movie)
        res.status(200).send(movieWatchList)
    },
    deleteMovie: (req, res) => {
        const {id} = req.params
        const index = movieWatchList.findIndex(movie => movie.id === +id)
        movieWatchList.splice(index, 1)
        res.status(200).send(movieWatchList)
    },
    watchMovie: (req, res) => {
        const {id} = req.params
        let index = movieWatchList.findIndex(movie => movie.id === +id)
        movieWatchList[index].status = 'watched'
        res.status(200).send(movieWatchList)
        // console.log(movieWatchList)
    }
}