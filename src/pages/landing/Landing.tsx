import React from "react"
import { useHistory } from "react-router-dom"
import { SpriteAnimator } from "react-sprite-animator"
import { useMediaQuery } from "react-responsive"
import ReactGa from "react-ga"
import underwaterImageSheet from "../../assets/isometricunderwater-Sheet.png"
import individualBanner from "../../assets/individualBanner.png"
import individualBannerx2 from "../../assets/individualBannerx2.png"
import underwaterImageSheetx200 from "../../assets/isometricunderwater-Sheet-x200.png"
import { Image } from "react-bootstrap"
import "./LandingPage.css"

export const Landing = () => {
    const history = useHistory()

    const goToLink = (link: string) => history.push(`/${link}`)

    const isDesktop = useMediaQuery({
        query: "(min-device-width: 575px)",
    })

    const dummyData = [
        { skill: "javascript", level: 10 },
        { skill: "typescript", level: 10 },
        { skill: "typescript", level: 10 },
        { skill: "typescript", level: 10 },
    ]

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
                height={isDesktop ? 1790 : 895}
                fps={10}
            />
            <div
                style={
                    isDesktop
                        ? {
                              width: "60px",
                              height: "60px",
                              position: "relative",
                              bottom: "1170px",
                              left: "-50px",
                              cursor: "pointer",
                          }
                        : {
                              width: "30px",
                              height: "30px",
                              left: "148px",
                              position: "absolute",
                              top: "341px",
                              cursor: "pointer",
                          }
                }
                onClick={() => {
                    ReactGa.event({
                        category: "Navigation",
                        action: "clicked on LinkedIn button",
                    })
                    window.open("https://www.linkedin.com/in/nima-soufiani-555a76198/")
                }}
            />
            <div
                style={
                    isDesktop
                        ? {
                              width: "688px",
                              height: "910px",
                              position: "absolute",
                              top: "732px",
                              cursor: "pointer",
                          }
                        : {
                              width: "344px",
                              height: "450px",
                              position: "absolute",
                              top: "378px",
                              cursor: "pointer",
                          }
                }
                onClick={() => {
                    ReactGa.event({
                        category: "Navigation",
                        action: "clicked on screens in pixel art to portfolio",
                    })
                    goToLink("portfolio")
                    window.scroll(0, 0)
                }}
            />
            <div style={{ position: "relative", width: "688px" }}>
                {dummyData.map((element, i) => (
                    <div style={{ width: "688px", height: "234px", position: "absolute", top: i * 79 }}>
                        <Image src={individualBannerx2} width="100%" height="100%" />
                    </div>
                ))}
            </div>
        </div>
    )
}
