import React from "react"
import { useHistory } from "react-router-dom"
import { SpriteAnimator } from "react-sprite-animator"
import { useMediaQuery } from "react-responsive"
import ReactGa from "react-ga"
import underwaterImageSheet from "../../assets/isometricunderwater-Sheet.png"
import individualBanner from "../../assets/individualBanner.png"
import individualBannerx2 from "../../assets/individualBannerx2.png"
import individualBannerRedx2 from "../../assets/individualBannerRedx2.png"
import underwaterImageSheetx200 from "../../assets/isometricunderwater-Sheet-x200.png"
import ax2 from "../../assets/alphabet/ax2.png"
import bx2 from "../../assets/alphabet/bx2.png"
import cx2 from "../../assets/alphabet/cx2.png"
import dx2 from "../../assets/alphabet/dx2.png"
import ex2 from "../../assets/alphabet/ex2.png"
import gx2 from "../../assets/alphabet/gx2.png"
import hx2 from "../../assets/alphabet/hx2.png"
import ix2 from "../../assets/alphabet/ix2.png"
import jx2 from "../../assets/alphabet/jx2.png"
import kx2 from "../../assets/alphabet/kx2.png"
import lx2 from "../../assets/alphabet/lx2.png"
import mx2 from "../../assets/alphabet/mx2.png"
import nx2 from "../../assets/alphabet/nx2.png"
import ox2 from "../../assets/alphabet/ox2.png"
import px2 from "../../assets/alphabet/px2.png"
import rx2 from "../../assets/alphabet/rx2.png"
import sx2 from "../../assets/alphabet/sx2.png"
import tx2 from "../../assets/alphabet/tx2.png"
import ux2 from "../../assets/alphabet/ux2.png"
import vx2 from "../../assets/alphabet/vx2.png"
import xx2 from "../../assets/alphabet/xx2.png"
import yx2 from "../../assets/alphabet/yx2.png"
import zx2 from "../../assets/alphabet/zx2.png"
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
    const history = useHistory()

    const goToLink = (link: string) => history.push(`/${link}`)

    const isDesktop = useMediaQuery({
        query: "(min-device-width: 575px)",
    })

    const dummyData = [
        { skill: "javascript", level: 10 },
        { skill: "typescript", level: 10 },
        { skill: "django", level: 10 },
        { skill: "mongodb", level: 10 },
        { skill: "javascript", level: 10 },
    ]

    type alphabetData = {
        [key: string]: string
    }

    const alphabet: alphabetData = {
        a: ax2,
        b: bx2,
        c: cx2,
        d: dx2,
        e: ex2,
        g: gx2,
        h: hx2,
        i: ix2,
        j: jx2,
        k: kx2,
        l: lx2,
        m: mx2,
        n: nx2,
        o: ox2,
        p: px2,
        r: rx2,
        s: sx2,
        t: tx2,
        u: ux2,
        v: vx2,
        x: xx2,
        y: yx2,
        z: zx2,
    }

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
            <div style={{ position: "relative", width: "688px" }}>
                {dummyData.map((element, i) => {
                    const splitString = element.skill.split("").reverse()
                    return (
                        <div
                            key={i}
                            style={{
                                width: "688px",
                                height: "234px",
                                position: "absolute",
                                top: i * 78,
                            }}
                        >
                            <Image
                                src={i % 2 === 0 ? individualBannerx2 : individualBannerRedx2}
                                width="100%"
                                height="100%"
                            />
                            {splitString.map((letter, j) => {
                                return (
                                    <div
                                        key={j}
                                        style={{
                                            height: "40px",
                                            width: "22px",
                                            position: "absolute",
                                            left: 272 - j * 20,
                                            bottom: 42 + j * 10,
                                            // top: 0,
                                            zIndex: 2,
                                        }}
                                    >
                                        <Image src={alphabet[letter]} width="100%" height="100%" />
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
