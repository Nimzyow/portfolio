import React from "react";
import { SpriteAnimator } from "react-sprite-animator";
import { Project } from "../../component/project/Project";
import { Navbar } from "../../component/layout/navbar/Navbar";
import "./Portfolio.scss";

import frameSheet from "../../assets/frameSheet.png";

export const Portfolio = () => {
  const projects = [
    {
      title: "Storii",
      github: "https://github.com/ShinyVerse/Storii",
      description:
        "A writers collabaration tool. An application developed in collaboration with my mentor. Clean, easy to read, easy to maintain and well tested code was our motto. This project forms the basis of much my approach to React applications. Oh and, YAGNI (You ain't gonna need it).",
      website: "https://storii-ui.herokuapp.com/",
    },
    {
      title: "Storii Server",
      github: "https://github.com/Nimzyow/storii_server",
      description:
        "The server side to the amazing application above, Storii. Simply creating a server that does the job was not our goal. We held stead fast to our motto that everything was to be TDD'd. The outcome is a server that is beautifully tested and easy to read. A pure joy :)",
      website: "https://storii-server.herokuapp.com/",
    },
    {
      title: "Datespot",
      github: "https://github.com/Nimzyow/datespot",
      description:
        "A Date spot curactor designed to solve the problem of finding a place to take your date. It was an application originally made for final day presentation at Makers Academy using Ruby on Rails for the backend. I converted it to MERN application using Redux for state management for the front end.",
      website: "https://datespot-app.herokuapp.com/",
    },
    {
      title: "DateSpot React-Native",
      github: "https://github.com/Nimzyow/datespot-reactnative",
      description:
        "This is the same application as DateSpot except it was TDD'd with React Native. I created the React-Native version of DateSpot to demonstrate my abilities with React-Native. It was fascinating to see the application running natively on my phone. I am currently implementing communication with server through GraphQL.",
      website: "https://github.com/Nimzyow/datespot-reactnative",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {/* <Navbar /> */}
      <SpriteAnimator
        sprite={frameSheet}
        width={200}
        height={200}
        fps={10}
        scale={0.6}
      />
      <div className="projectsContainer">
        <div className="rowContainer">
          <Project
            key={projects[0].title}
            title={projects[0].title}
            github={projects[0].github}
            website={projects[0].website}
            description={projects[0].description}
          />
          <Project
            key={projects[1].title}
            title={projects[1].title}
            github={projects[1].github}
            website={projects[1].website}
            description={projects[1].description}
          />
        </div>
        <div className="rowContainer">
          <Project
            key={projects[2].title}
            title={projects[2].title}
            github={projects[2].github}
            website={projects[2].website}
            description={projects[2].description}
          />
          <Project
            key={projects[3].title}
            title={projects[3].title}
            github={projects[3].github}
            website={projects[3].website}
            description={projects[3].description}
          />
        </div>
      </div>
    </div>
  );
};
