import React from "react";

const Helmet = (props) => {
  document.title = `Maltimart- ${props.name}`;
  return <div>{props.children}</div>;
};

export default Helmet;
