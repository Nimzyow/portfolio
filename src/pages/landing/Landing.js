import React from "react";
import { useHistory } from "react-router-dom";
import { SpriteAnimator } from "react-sprite-animator";
import { useMediaQuery } from "react-responsive";

import underwaterImageSheet from "../../assets/isometricunderwater-Sheet.png";
import underwaterImageSheetx200 from "../../assets/isometricunderwater-Sheet-x200.png";
import "./LandingPage.scss";

export const Landing = () => {
  const history = useHistory();

  const goToLink = (link) => history.push(`/${link}`);

  const isDesktop = useMediaQuery({
    query: "(min-device-width: 575px)",
  });

  // const createArea = (coords, link) => {
  //   return (
  //     <area
  //       shape="poly"
  //       coords={coords}
  //       onClick={() => {
  //         goToLink(link);
  //       }}
  //     />
  //   );
  // };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ height: "30px" }} />
      <SpriteAnimator
        sprite={isDesktop ? underwaterImageSheetx200 : underwaterImageSheet}
        width={isDesktop ? 688 : 344}
        height={isDesktop ? 1666 : 833}
        fps={10}
      />
      <div
        style={
          isDesktop
            ? {
                width: "688px",
                height: "920px",
                position: "absolute",
                top: "632px",
                cursor: "pointer",
              }
            : {
                width: "344px",
                height: "460px",
                position: "absolute",
                top: "316px",
                cursor: "pointer",
              }
        }
        onClick={() => goToLink("portfolio")}
      ></div>
      {/* <img src={underwaterImage} className="imageWidth" useMap="#Map" />
      <map name="Map" id="Map">
        {createArea("10, 277, 10, 312, 163, 387, 163, 351", "javascript")}
        {createArea("178, 352, 178, 387, 330, 312, 330, 277", "javascript")}
        {createArea("10, 315, 10, 351, 163, 426, 163, 392", "react")}
        {createArea("178, 394, 178, 426, 330, 352, 330, 315", "react")}
        {createArea("10, 355, 10, 390, 163, 464, 163, 429", "typescript")}
        {createArea("178, 431, 178, 464, 330, 390, 330, 355", "typescript")}
        {createArea("10, 394, 10, 427, 163, 503, 163, 470", "redux")}
        {createArea("178, 471, 178, 503, 330, 429, 330, 396", "redux")}
        {createArea("10, 433, 10, 468, 163, 542, 163, 508", "node")}
        {createArea("178, 507, 178, 542, 330, 468, 330, 433", "node")}
        {createArea("10, 472, 10, 507, 163, 581, 163, 546", "express")}
        {createArea("178, 546, 178, 581, 330, 507, 330, 472", "express")}
        {createArea("10, 511, 10, 546, 163, 620, 163, 585", "mongodb")}
        {createArea("178, 585, 178, 620, 330, 546, 330, 511", "mongodb")}
        {createArea("10, 550, 10, 585, 163, 659, 163, 624", "jestenzyme")}
        {createArea("178, 624, 178, 659, 330, 585, 330, 550", "jestenzyme")}
        {createArea("10, 589, 10, 624, 163, 698, 163, 663", "reacttestinglib")}
        {createArea(
          "178, 663, 178, 698, 330, 624, 330, 589",
          "reacttestinglib",
        )}
      </map> */}
    </div>
  );
};
