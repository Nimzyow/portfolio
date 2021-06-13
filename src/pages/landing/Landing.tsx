import React, { useEffect } from "react"
import { useHistory } from "react-router-dom"
import { SpriteAnimator } from "react-sprite-animator"
import { useMediaQuery } from "react-responsive"
import ReactGa from "react-ga"
import underwaterImageSheet from "../../assets/isometricunderwater-Sheet.png"
import individualBanner from "../../assets/individualBanner.png"
import individualBannerx2 from "../../assets/individualBannerx2.png"
import individualBannerRedx2 from "../../assets/individualBannerRedx2.png"
import underwaterImageSheetx200 from "../../assets/isometricunderwater-Sheet-x200.png"
import axios from "axios"
import ax2 from "../../assets/alphabet/ax2.png"
import bx2 from "../../assets/alphabet/bx2.png"
import cx2 from "../../assets/alphabet/cx2.png"
import dx2 from "../../assets/alphabet/dx2.png"
import ex2 from "../../assets/alphabet/ex2.png"
import fx2 from "../../assets/alphabet/fx2.png"
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
import qx2 from "../../assets/alphabet/qx2.png"
import rx2 from "../../assets/alphabet/rx2.png"
import sx2 from "../../assets/alphabet/sx2.png"
import tx2 from "../../assets/alphabet/tx2.png"
import ux2 from "../../assets/alphabet/ux2.png"
import vx2 from "../../assets/alphabet/vx2.png"
import wx2 from "../../assets/alphabet/wx2.png"
import xx2 from "../../assets/alphabet/xx2.png"
import yx2 from "../../assets/alphabet/yx2.png"
import zx2 from "../../assets/alphabet/zx2.png"
import spacex2 from "../../assets/alphabet/spacex2.png"
import a from "../../assets/alphabet/a.png"
import b from "../../assets/alphabet/b.png"
import c from "../../assets/alphabet/c.png"
import d from "../../assets/alphabet/d.png"
import e from "../../assets/alphabet/e.png"
import f from "../../assets/alphabet/f.png"
import g from "../../assets/alphabet/g.png"
import h from "../../assets/alphabet/h.png"
import i from "../../assets/alphabet/i.png"
import j from "../../assets/alphabet/j.png"
import k from "../../assets/alphabet/k.png"
import l from "../../assets/alphabet/l.png"
import m from "../../assets/alphabet/m.png"
import n from "../../assets/alphabet/n.png"
import o from "../../assets/alphabet/o.png"
import p from "../../assets/alphabet/p.png"
import q from "../../assets/alphabet/q.png"
import r from "../../assets/alphabet/r.png"
import s from "../../assets/alphabet/s.png"
import t from "../../assets/alphabet/t.png"
import u from "../../assets/alphabet/u.png"
import v from "../../assets/alphabet/v.png"
import w from "../../assets/alphabet/w.png"
import x from "../../assets/alphabet/x.png"
import y from "../../assets/alphabet/y.png"
import z from "../../assets/alphabet/z.png"
import level10 from "../../assets/level10.png"
import level10x2 from "../../assets/level10x2.png"
import space from "../../assets/alphabet/space.png"
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

    const goToLink = (link: string) => history.push(`/${link}`)

    const isDesktop = useMediaQuery({
        query: "(min-device-width: 575px)",
    })

    const dummyData = [
        { skill: "javascript", level: 10 },
        { skill: "typescript", level: 10 },
        { skill: "python", level: 10 },
        { skill: "graphql", level: 10 },
        { skill: "react", level: 10 },
        { skill: "react native", level: 10 },
        { skill: "django", level: 10 },
        { skill: "redux", level: 10 },
        { skill: "apollo client", level: 10 },
        { skill: "node", level: 10 },
        { skill: "express", level: 10 },
        { skill: "postgres", level: 10 },
        { skill: "mongodb", level: 10 },
        { skill: "react test lib", level: 10 },
        { skill: "docker", level: 10 },
        { skill: "aws", level: 10 },
        { skill: "webpack", level: 10 },
    ]

    type alphabetData = {
        [key: string]: string
    }

    const alphabet: alphabetData = {
        a: isDesktop ? ax2 : a,
        b: isDesktop ? bx2 : b,
        c: isDesktop ? cx2 : c,
        d: isDesktop ? dx2 : d,
        e: isDesktop ? ex2 : e,
        f: isDesktop ? fx2 : f,
        g: isDesktop ? gx2 : g,
        h: isDesktop ? hx2 : h,
        i: isDesktop ? ix2 : i,
        j: isDesktop ? jx2 : j,
        k: isDesktop ? kx2 : k,
        l: isDesktop ? lx2 : l,
        m: isDesktop ? mx2 : m,
        n: isDesktop ? nx2 : n,
        o: isDesktop ? ox2 : o,
        p: isDesktop ? px2 : p,
        q: isDesktop ? qx2 : q,
        r: isDesktop ? rx2 : r,
        s: isDesktop ? sx2 : s,
        t: isDesktop ? tx2 : t,
        u: isDesktop ? ux2 : u,
        v: isDesktop ? vx2 : v,
        w: isDesktop ? wx2 : w,
        x: isDesktop ? xx2 : x,
        y: isDesktop ? yx2 : y,
        z: isDesktop ? zx2 : z,
        " ": isDesktop ? spacex2 : space,
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
                        <div>
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
                                                left: 292 - j * 20,
                                                bottom: 37 + j * 10,
                                                // top: 0,
                                                zIndex: 2,
                                            }}
                                        >
                                            <Image src={alphabet[letter]} width="100%" height="100%" />
                                        </div>
                                    )
                                })}
                                <div
                                    style={{
                                        width: "688px",
                                        // height: "234px",
                                        position: "absolute",
                                        top: 0,
                                        zIndex: 3,
                                    }}
                                >
                                    <SpriteAnimator
                                        sprite={isDesktop ? level10x2 : level10}
                                        width={isDesktop ? 688 : 344}
                                        height={isDesktop ? 234 : 117}
                                        fps={10}
                                    />
                                    <Image src={level10x2} width="100%" height="100%" />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
