import React, { Fragment } from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import "./Project.scss";

export const Project = ({ title, github, website, description }) => {
  return (
    <div className="ProjectContainer">
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
          marginTop: "4px",
        }}
      />
      <p style={{ textAlign: "center", fontSize: "0.9rem", marginTop: "4px" }}>
        {description}
      </p>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-evenly",
        }}
      >
        <FontAwesomeIcon
          style={{ cursor: "pointer" }}
          onClick={() => window.open(github)}
          icon={faGithub}
          size={"3x"}
        />
        <FontAwesomeIcon
          style={{ cursor: "pointer" }}
          onClick={() => window.open(website)}
          icon={faDesktop}
          size={"3x"}
        />
      </div>
    </div>
  );
};

Project.defaultProps = {
  github: "https://github.com/Nimzyow",
  website: "https://github.com/Nimzyow",
  description: "No description",
};
