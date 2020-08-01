import React, { Fragment } from "react";

export const Project = ({ title, github, website, description }) => {
  return (
    <Fragment>
      <h2
        style={{
          textAlign: "center",
        }}
      >
        {title}
      </h2>
      <div
        style={{
          borderBottom: "2px solid #f9a31b",
          width: "100%",
        }}
      />
      <h4 style={{ textAlign: "center" }}>{description}</h4>
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
  description: "No description",
};
