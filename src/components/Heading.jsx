import React from "react";

function Heading(props) {
  return (
    <div>
      <h1 className="font-bold italic">{props.heading}</h1>
    </div>
  );
}

export default Heading;
