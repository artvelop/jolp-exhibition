import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "pages/Home";
import Dongchurl from "pages/dongchurl/Dongchurl";
import Menu from "pages/sanghun/Menu";
import HarvardBook from "pages/sanghun/HarvardBook";
import PhilosophyBook from "pages/sanghun/PhilosophyBook";
import LiveBook from "pages/sanghun/LiveBook";
import MyselfBook from "pages/sanghun/MyselfBook";
import TalkGodBook from "pages/sanghun/TalkGodBook";

function Root() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dongchurl" component={Dongchurl} />
        <Route path="/sanghun/Menu" component={Menu} />
        <Route path="/sanghun/HarvardBook" component={HarvardBook} />
        <Route path="/sanghun/LiveBook" component={LiveBook} />
        <Route path="/sanghun/MyselfBook" component={MyselfBook} />
        <Route path="/sanghun/PhilosophyBook" component={PhilosophyBook} />
        <Route path="/sanghun/TalkGodBook" component={TalkGodBook} />
      </Switch>
    </BrowserRouter>
  );
}

export default Root;
