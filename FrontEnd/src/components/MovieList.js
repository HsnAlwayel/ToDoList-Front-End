import React, { useState } from "react";
// data
import movieStore from "../store/MovieStore";

// libray
import { observer } from "mobx-react";
//component
import Searchbar from "./SearchBar";
import MovieItem from "./MovieItem";

const MovieList = () => {
  let newMovie = "";
  const [query1, setQuery1] = useState("");
  const [query2, setQuery2] = useState("");

  const movieList = movieStore.movies
    .filter(
      (movie) =>
        movie.name.toLowerCase().includes(query1.toLowerCase()) &&
        movie.watched === false
    )
    .map((movie) => <MovieItem movie={movie} key={movie.id} />);

  const watchedList = movieStore.movies
    .filter(
      (movie) =>
        movie.name.toLowerCase().includes(query2.toLowerCase()) &&
        movie.watched === true
    )
    .map((movie) => <MovieItem movie={movie} key={movie.name} />);

  return (
    <div className="container">
      <div align="center">
        <input onChange={(event) => (newMovie = event.target.value)} />
        <button
          type="button"
          class="btn btn-dark"
          onClick={() => movieStore.createMovie(newMovie)}
        >
          add
        </button>
      </div>
      <div className="container-fluid ">
        <div className="row">
          <div className="list-group col-lg-6 col-md-6 col-sm-12">
            <Searchbar setQuery={setQuery1} />
            <h5 className="list-group-item active">
              {movieList.length ? "Watchlist" : "No Movies To Watch"}
              <span className="badge badge-dark badge-pill">
                {movieList.length}
              </span>
            </h5>

            {movieList}
          </div>
          <div className="list-group col-lg-6 col-md-6 col-sm-12">
            <Searchbar setQuery={setQuery2} />
            <h5 className="list-group-item active">
              {watchedList.length ? "Watched" : "No Movies To Watched"}
              <span className="badge badge-dark badge-pill">
                {watchedList.length}
              </span>
            </h5>
            {watchedList}
          </div>
        </div>
      </div>
    </div>
  );
};
export default observer(MovieList);
