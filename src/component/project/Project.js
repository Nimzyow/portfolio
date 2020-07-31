import React, { Fragment } from "react";

export const Project = ({ title, github, website }) => {
  return (
    <Fragment>
      <h3>{title}</h3>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-evenly",
        }}
      >
        <a style={{ textDecoration: "none" }} href={github}>
          <h4>Github</h4>
        </a>
        <a style={{ textDecoration: "none" }} href={website}>
          <h4>Website</h4>
        </a>
      </div>
    </Fragment>
  );
};

Project.defaultProps = {
  github: "https://github.com/Nimzyow",
  website: "https://github.com/Nimzyow",
};
