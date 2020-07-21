import React from "react";

// components
import { SearchBarStyled } from "../styles";

const SeachBar = ({ setQuery }) => {
  return (
    <>
      <SearchBarStyled
        placeholder="Search For A Movie"
        onChange={(event) => setQuery(event.target.value)}
      />
    </>
  );
};

export default SeachBar;
