import React from "react";

const Error = () => {
  return (
    <div style={errorStyle}>
      <h1>
        Oops! Page not found...
        <span role="img" aria-label="emoji">
          😕
        </span>
      </h1>
    </div>
  );
};

const errorStyle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
};

export default Error;
