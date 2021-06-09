import React, { useEffect } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import { Landing } from "./pages/landing/Landing"
import { Portfolio } from "./pages/portfolio/Portfolio"

import { initGA } from "./index"

function App() {
    useEffect(() => {
        initGA()
    }, [])

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/portfolio" component={Portfolio} />
            </Switch>
        </Router>
    )
}

export default App
