import React from "react";
import { decorate, observable } from "mobx";
import movies from "../movies";
class MovieStore {
  movies = movies;
  deleteMovie = (movieId) => {
    this.movies = this.movies.filter((movie) => movie.name !== movieId);
  };

  createMovie = (newMovie) => {
    const addedMovie = {
      id: 0,
      name: newMovie,
      watched: false,
    };
    addedMovie.id = this.movies.length
      ? this.movies[this.movies.length - 1].id + 1
      : 0;
    this.movies.push(addedMovie);
    console.log(movies);
  };
  updateMovie = (updatedMovie) => {
    const movie = this.movies.find((movie) => movie.id === updatedMovie.id);
    movie.watched = !updatedMovie.watched;
  };
}

decorate(MovieStore, {
  movies: observable,
});

const movieStore = new MovieStore();

export default movieStore;
