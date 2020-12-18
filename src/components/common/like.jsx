import React from "react";

const Like = (props) => {
  let classes = "fa fa-heart";
  if (!props.liked) {
    classes += "-o";
  }
  return (
    <div>
      {
        <i
          onClick={props.onLikeClick}
          // style={{ cursor: "pointer" }}
          className={classes + " clickable"}
          aria-hidden="true"
        ></i>
      }
    </div>
  );
};

export default Like;
