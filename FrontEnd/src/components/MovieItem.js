import React, { useState } from "react";
import movieStore from "../store/MovieStore";
import { ProductImage } from "../styles";
import UpdateButton from "./buttons/UpdateButton";
import DeleteButton from "./buttons/DeleteButton";

const MovieItem = ({ movie }) => {
  return (
    <>
      <li className="list-group-item">
        <h3>{movie.name}</h3>
        <p>{movie.description}</p>
        <date>{movie.date}</date>
        <div>
          <DeleteButton movie={movie.name} deleteMovie={movieStore.deleteMovie} />
          <UpdateButton movie={movie} updateMovie={movieStore.updateMovie} />
        </div>
      </li>
    </>
  );
};

export default MovieItem;
