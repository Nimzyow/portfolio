import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import "bootstrap/dist/css/bootstrap.min.css"
import ReactGA from "react-ga"

export const initGA = () => {
    ReactGA.initialize(process.env.REACT_APP_GA) // put your tracking id here
}

export const GApageView = (page) => {
    ReactGA.pageview(page)
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
)
