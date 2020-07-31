import React from "react";
import { SpriteAnimator } from "react-sprite-animator";

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
          border: "1px solid black",
          width: "300px",
        }}
      >
        <h3>Storii</h3>
        <div
          style={{
            display: "flex",
            width: "100%",
            border: "1px solid black",
            justifyContent: "space-evenly",
          }}
        >
          <h4>Github</h4>
          <h4>Website</h4>
        </div>
      </div>
    </div>
  );
};
