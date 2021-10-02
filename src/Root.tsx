import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "pages/Home";
import Dongchurl from "pages/dongchurl/Dongchurl";
import Sanghun from "pages/sanghun/Sanghun";

function Root() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dongchurl" component={Dongchurl} />
        <Route path="/sanghun" component={Sanghun} />
      </Switch>
    </BrowserRouter>
  );
}

export default Root;
