import React from "react"
import { useHistory } from "react-router-dom"
import { SpriteAnimator } from "react-sprite-animator"
import { useMediaQuery } from "react-responsive"
import ReactGa from "react-ga"
import underwaterImageSheet from "../../assets/isometricunderwater-Sheet.png"
import individualBanner from "../../assets/individualBanner.png"
import individualBannerx2 from "../../assets/individualBannerx2.png"
import floor from "../../assets/floor.png"
import floorx2 from "../../assets/floorx2.png"
import individualBannerRed from "../../assets/individualBannerRed.png"
import individualBannerRedx2 from "../../assets/individualBannerRedx2.png"
import underwaterImageSheetx200 from "../../assets/isometricunderwater-Sheet-x200.png"
import isometricunderwaterShortenedSheet from "../../assets/isometricunderwaterShortenedSheet.png"
import isometricunderwaterShortenedSheetx2 from "../../assets/isometricunderwaterShortenedSheetx2.png"
import { ArtData } from "./hooks/artData"
import level10 from "../../assets/level10.png"
import level10x2 from "../../assets/level10x2.png"
import level9 from "../../assets/level9.png"
import level9x2 from "../../assets/level9x2.png"
import level8 from "../../assets/level8.png"
import level8x2 from "../../assets/level8x2.png"
import level7 from "../../assets/level7.png"
import level7x2 from "../../assets/level7x2.png"
import styled from "styled-components"
import { Image } from "react-bootstrap"
import "./LandingPage.css"

const OuterDiv = styled.div`
    width: 30px;
    height: 30px;
    left: 148px;
    position: absolute;
    top: 341px;
    cursor: pointer;
    @media only screen and (min-width: 575px) {
        width: 60px;
        height: 60px;
        position: relative;
        bottom: 1170px;
        left: -50px;
        cursor: pointer;
    }
`

const InnerDiv = styled.div`
    width: 344px;
    height: 450px;
    position: absolute;
    top: 378px;
    cursor: pointer;
    @media only screen and (min-width: 575px) {
        width: 688px;
        height: 910px;
        position: absolute;
        top: 732px;
        cursor: pointer;
    }
`

export const Landing = () => {
    // useEffect(() => {
    //     getPortfolioData()
    // }, [])

    const history = useHistory()
    const { alphabet } = ArtData()
    const goToLink = (link: string) => history.push(`/${link}`)

    const isDesktop = useMediaQuery({
        query: "(min-device-width: 575px)",
    })

    const dummyData = [
        { skill: "javascript", level: 10 },
        { skill: "typescript", level: 8 },
        { skill: "python", level: 8 },
        { skill: "graphql", level: 9 },
        { skill: "react", level: 10 },
        { skill: "aws", level: 7 },
        { skill: "react native", level: 9 },
        { skill: "django", level: 8 },
        { skill: "redux", level: 9 },
        { skill: "apollo client", level: 9 },
        { skill: "node", level: 9 },
        { skill: "express", level: 9 },
        { skill: "postgres", level: 9 },
        { skill: "mongodb", level: 9 },
        { skill: "react test lib", level: 9 },
        { skill: "docker", level: 8 },
        { skill: "webpack", level: 7 },
    ]

    type skillLevelData = {
        [key: string]: string
    }

    const skillLevel: skillLevelData = {
        10: isDesktop ? level10x2 : level10,
        9: isDesktop ? level9x2 : level9,
        8: isDesktop ? level8x2 : level8,
        7: isDesktop ? level7x2 : level7,
    }

    // const getPortfolioData = async () => {
    //     try {
    //         const result = await axios({
    //             method: "GET",
    //             url: "https://xziny85qdc.execute-api.eu-west-2.amazonaws.com/test/portfoliodata",
    //         })
    //         console.log(result)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                position: "relative",
            }}
        >
            <div style={{ height: "30px" }} />
            <SpriteAnimator
                sprite={
                    isDesktop ? isometricunderwaterShortenedSheetx2 : isometricunderwaterShortenedSheet
                }
                width={isDesktop ? 688 : 344}
                height={isDesktop ? 798 : 399}
                fps={10}
            />
            <OuterDiv
                onClick={() => {
                    ReactGa.event({
                        category: "Navigation",
                        action: "clicked on LinkedIn button",
                    })
                    window.open("https://www.linkedin.com/in/nima-soufiani-555a76198/")
                }}
            />
            <InnerDiv
                onClick={() => {
                    ReactGa.event({
                        category: "Navigation",
                        action: "clicked on screens in pixel art to portfolio",
                    })
                    goToLink("portfolio")
                    window.scroll(0, 0)
                }}
            />
            <div style={{ position: "absolute", top: isDesktop ? 579 : 305 }}>
                <div style={{ position: "relative", width: isDesktop ? "688px" : "344px" }}>
                    {dummyData.map((element, i) => {
                        const splitString = element.skill.split("").reverse()
                        return (
                            <div>
                                <div
                                    key={i}
                                    style={{
                                        width: "100%",
                                        // height: "234px",
                                        position: "absolute",
                                        top: isDesktop ? i * 78 : (i * 78) / 2,
                                    }}
                                >
                                    <Image
                                        src={
                                            i % 2 === 0
                                                ? isDesktop
                                                    ? individualBannerx2
                                                    : individualBanner
                                                : isDesktop
                                                ? individualBannerRedx2
                                                : individualBannerRed
                                        }
                                        width="100%"
                                        height="100%"
                                    />
                                    {splitString.map((letter, j) => {
                                        return (
                                            <div
                                                key={j}
                                                style={{
                                                    height: isDesktop ? "40px" : "20px",
                                                    width: isDesktop ? "22px" : "11px",
                                                    position: "absolute",
                                                    left: isDesktop ? 292 - j * 20 : (292 - j * 20) / 2,
                                                    bottom: isDesktop ? 37 + j * 10 : (37 + j * 10) / 2,
                                                    // top: 0,
                                                    zIndex: 2,
                                                }}
                                            >
                                                <Image
                                                    src={alphabet[letter]}
                                                    width="100%"
                                                    height="100%"
                                                />
                                            </div>
                                        )
                                    })}
                                    <div
                                        style={{
                                            width: isDesktop ? "688px" : "344px",
                                            // height: "234px",
                                            position: "absolute",
                                            top: -5,
                                            zIndex: 3,
                                        }}
                                    >
                                        <SpriteAnimator
                                            sprite={skillLevel[element.level]}
                                            width={isDesktop ? 688 : 344}
                                            height={isDesktop ? 234 : 117}
                                            fps={10}
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    <div
                        style={{
                            width: isDesktop ? "688px" : "344px",
                            position: "absolute",
                            top: isDesktop ? dummyData.length * 78 : (dummyData.length * 78) / 2,
                        }}
                    >
                        <Image src={isDesktop ? floorx2 : floor} width="100%" height="100%" />
                    </div>
                </div>
            </div>
        </div>
    )
}
