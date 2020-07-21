import React, { useState } from "react";
// data
import movieStore from "../store/MovieStore";

// libray
import { observer } from "mobx-react";
//component
import MovieItem from "./MovieItem";
import AddButton from "./buttons/AddButton";

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
        <AddButton />
      </div>
      <div className="container-fluid ">
        <div className="row">
          <div className="list-group col-lg-6 col-md-6 col-sm-12">
            <h5 className="list-group-item active">
              {movieList.length ? "ToDo" : "Nothing to do"}
              <span className="badge badge-dark badge-pill">
                {movieList.length}
              </span>
            </h5>

            {movieList}
          </div>
          <div className="list-group col-lg-6 col-md-6 col-sm-12">
            <h5 className="list-group-item active">
              {watchedList.length ? "Done" : "Everything is Done"}
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
