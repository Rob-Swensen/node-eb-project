const express = require('express');
const cors = require('cors');
const suggestedCtrl = require('./Controllers/suggestedController')
const port = 3050;

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/suggested-movies', suggestedCtrl.getMovies)

app.listen(port, () => console.log(`Server is running on port: ${port}`))
