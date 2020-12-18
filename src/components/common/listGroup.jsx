import React from "react";
const ListGroup = (props) => {
  const {
    genres,
    keyProperty,
    valueProperty,
    currentGenre,
    onGenreChange,
  } = props;
  const itemClass = "list-group-item";
  return (
    <ul className="list-group">
      {genres.map((genre) => (
        <li
          key={genre[keyProperty]}
          className={
            (currentGenre === genre ? itemClass + " active" : itemClass) +
            " clickable"
          }
          //aria-current={currentGenre === genre ? "true" : ""}
          //style={{ cursor: "pointer" }}
          onClick={() => onGenreChange(genre)}
        >
          {genre[valueProperty]}
        </li>
      ))}
    </ul>
  );
};
ListGroup.defaultProps = {
  valueProperty: "name",
  keyProperty: "_id",
};

export default ListGroup;
