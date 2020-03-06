const express = require('express');
const cors = require('cors');
const randomCtrl = require('./Controllers/randomController')
const port = 3050;

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/random-movies', randomCtrl.getMovies)

app.listen(port, () => console.log(`Server is running on port: ${port}`))
