const express = require('express');
const app = express();
const port = 3111;
const mongoose = require('mongoose');
const movieRouter = require('./routes/movie.routes');

mongoose
  .connect('mongodb://localhost:27017/movies_db')
  .then(() => {
    console.log('Success to connect to mongodb');
  })
  .catch((error) => console.log(error));

app.use('/', movieRouter);

app.listen(port, () => {
  console.log(`App is live at http://localhost:${port}`);
});
