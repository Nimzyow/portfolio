import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Landing } from "./pages/landing/Landing";
import { Portfolio } from "./pages/portfolio/Portfolio";

import { initGA } from "./index";
// import { ReactPage } from "./pages/react/ReactPage";
// import { JavaScript } from "./pages/javascript/JavaScript";
// import { Typescript } from "./pages/typescriptPage/typescriptPage";
// import { Node } from "./pages/node/Node";
// import { Redux } from "./pages/redux/redux";
// import { expressPage } from "./pages/express/expressPage";
// import { jestEnzyme } from "./pages/jestEnzyme/jestEnzyme";
// import { MongoDB } from "./pages/mongodb/MongoDB";
// import { reactTestingLib } from "./pages/reactTestingLib/reactTestingLib";

function App() {
  useEffect(() => {
    initGA();
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/portfolio" component={Portfolio} />
        {/* <Route exact path="/react" component={ReactPage} />
        <Route exact path="/javascript" component={JavaScript} />
        <Route exact path="/typescript" component={Typescript} />
        <Route exact path="/redux" component={Redux} />
        <Route exact path="/node" component={Node} />
        <Route exact path="/express" component={expressPage} />
        <Route exact path="/jestenzyme" component={jestEnzyme} />
        <Route exact path="/mongodb" component={MongoDB} />
        <Route exact path="/reacttestinglib" component={reactTestingLib} /> */}
      </Switch>
    </Router>
  );
}

export default App;
