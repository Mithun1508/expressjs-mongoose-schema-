const express = require('express');
const router = express.Router();
const MovieService = require('../services/movie.service');

router.get('/movies', async (req, res, next) => {
  try {
    let movies = await MovieService.getAllMovies();
    res.json({
      status: 'sucess',
      data: [...movies],
      itemsCount: movies.length,
    });
  } catch (error) {
    next();
  }
});

module.exports = router;
