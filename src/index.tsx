import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import "bootstrap/dist/css/bootstrap.min.css"
import ReactGA from "react-ga"

export const initGA = () => {
    // let env: String
    const env: string = process.env.REACT_APP_GA || ""
    ReactGA.initialize(env) // put your tracking id here
}

export const GApageView = (page: string) => {
    ReactGA.pageview(page)
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
)
