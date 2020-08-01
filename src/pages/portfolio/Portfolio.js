import React from "react";
import { SpriteAnimator } from "react-sprite-animator";
import { Project } from "../../component/project/Project";

import frameSheet from "../../assets/frameSheet.png";

export const Portfolio = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <SpriteAnimator
        sprite={frameSheet}
        width={200}
        height={200}
        fps={10}
        scale={0.6}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "300px",
        }}
      >
        <Project
          title={"Storii"}
          github={"https://github.com/ShinyVerse/Storii"}
          website={"https://storii-ui.herokuapp.com/"}
        />
        <Project
          title={"Storii Server"}
          github={"https://github.com/Nimzyow/storii_server"}
          website={"https://storii-server.herokuapp.com/"}
        />
        <Project
          title={"DateSpot"}
          github={"https://github.com/Nimzyow/datespot"}
          website={"https://datespot-app.herokuapp.com/"}
        />
        <Project
          title={"DateSpot React-Native"}
          github={"https://github.com/Nimzyow/datespot-reactnative"}
          website={"https://github.com/Nimzyow/datespot-reactnative"}
        />
      </div>
    </div>
  );
};
