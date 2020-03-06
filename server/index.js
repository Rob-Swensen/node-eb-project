const express = require('express');
const cors = require('cors');
const suggestedCtrl = require('./Controllers/suggestedController')
const movieCtrl = require('./Controllers/movieController')
const port = 3050;

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/suggested-movies', suggestedCtrl.getMovies);
app.get('/api/movies', movieCtrl.getMovieWatchList);
app.post('/api/movies', movieCtrl.addMovieWatchList);
app.delete('/api/movies/:id', movieCtrl.deleteMovie);
app.put('/api/movies/:id', movieCtrl.watchMovie);

app.listen(port, () => console.log(`Server is running on port: ${port}`))
