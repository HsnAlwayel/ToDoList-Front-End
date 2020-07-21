import React, { useState } from "react";
import movieStore from "../store/MovieStore";
import { ProductImage } from "../styles";
import UpdateButton from "./buttons/UpdateButton";
import DeleteButton from "./buttons/DeleteButton";

const MovieItem = ({ movie }) => {
  return (
    <>
      <li className="list-group-item">
        {movie.name}
        <div>
          <DeleteButton movie={movie.name} deleteMovie={movieStore.deleteMovie} />
          <UpdateButton movie={movie} updateMovie={movieStore.updateMovie} />
        </div>
      </li>
    </>
  );
};

export default MovieItem;
