import React from "react";
import PropTypes from "prop-types";

const Profilecomp = (props) => {
  const handleName = (a) => alert(`Hello ${a}`);
  return (
    <div>
      <h1 style={{ color: "Blue" }}> {props.fullName} </h1>
      <p> {props.bio} </p>
      <p> {props.profession} </p>
      <div>{props.children}</div>
      <button onClick={() => handleName(props.fullName)}>Show my name</button>
    </div>
  );
};

Profilecomp.defaultProps = {
  fullName: "No name",
  bio: "No bio",
  profession: "No profession",
};

Profilecomp.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
};

export default Profilecomp;
