import React from "react";
// styles

import { UpdateButtonStyled } from "../../styles";
import movieStore from "../../store/MovieStore";

const DeleteButton = ({ movie }) => {
  return (
    <button
      type="button"
      class="btn btn-danger btn-sm float-right "
      onClick={() => movieStore.deleteMovie(movie)}
    >
      Delete
    </button>
  );
};

export default DeleteButton;
