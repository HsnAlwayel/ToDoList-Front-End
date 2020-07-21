import React from "react";
import { UpdateButtonStyled } from "../../styles";
const UpdateButton = ({ updateMovie, movie }) => {
  return (
    <div>
      <button
        type="button"
        class="btn btn-info btn-sm float-right"
        onClick={() => updateMovie(movie)}
      >
        {movie.watched ? "Not done" : "Done"}
      </button>
    </div>
  );
};
export default UpdateButton;
