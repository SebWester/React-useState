import React from "react";

function Button(props, onClick) {
  return <button onClick={onClick}>{props.text}</button>;
}

export default Button;
