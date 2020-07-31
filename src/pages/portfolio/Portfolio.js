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
    </div>
  );
};
