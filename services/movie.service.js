const Movie = require('../schemas/movie.schemas');

const addMovie = async (movie) => {
  let result = await Movie.create(movie);
  return result;
};

const getAllMovies = async () => {
  let result = await Movie.find();
  return result;
};

const getMovieId = async (id) => {
  let result = await Movie.find({ _id: id });
  return result;
};

module.exports = {
  addMovie,
  getAllMovies,
  getMovieId,
};
