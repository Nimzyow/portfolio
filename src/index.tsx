import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import "bootstrap/dist/css/bootstrap.min.css"
import ReactGA from "react-ga"

export const initGA = () => {
    let env: String
    env = process.env.REACT_APP_GA
    ReactGA.initialize(env) // put your tracking id here
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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
