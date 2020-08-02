import React, { Fragment } from "react";

export const Project = ({ title, github, website, description }) => {
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "5px",
        boxShadow: "3px 5px 8px 5px #888888",
        margin: "10px",
        width: "100%",
      }}
    >
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
    </div>
  );
};

Project.defaultProps = {
  github: "https://github.com/Nimzyow",
  website: "https://github.com/Nimzyow",
  description: "No description",
};
