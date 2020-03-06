

const movieWatchList = [];

module.exports = {
    getMovieWatchList: (req, res) => {
        res.status(200).send(movieWatchList)
    },
    addMovieWatchList: (req, res) => {
        const {id, title, image, summary} = req.body
        movieWatchList.push({id, title, image, summary, watched: false})
        console.log(movieWatchList)
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
        movieWatchList[index].watched = true
        res.status(200).send(movieWatchList)
    }
}