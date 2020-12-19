import React from "react";
const MovieForm = (props) => {
  const { history, match } = props;
  return (
    <div>
      <h1>Movie Form {match.params.id}</h1>
      <button
        className="btn btn-primary"
        onClick={() => history.push("/movies")}
      >
        Back
      </button>
    </div>
  );
};

export default MovieForm;
