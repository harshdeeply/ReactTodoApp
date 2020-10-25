import React from "react";

const About = () => {
  return (
    <div style={aboutStyle}>
      <h1>This is the about page!</h1>
    </div>
  );
};

const aboutStyle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
};

export default About;
