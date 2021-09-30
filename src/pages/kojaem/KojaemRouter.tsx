import React, { useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import LayoutContainer from './LayoutContainer/LayoutContainer';
import Musinsa from "./musinsa/Musinsa";
import Covernat from "./covernat/Covernat";
import Kirsh from "./kirsh/Kirsh";
import Lmc from "./lmc/Lmc";
import Gallery from "./gallery/Gallery";
import { Route, Switch } from "react-router-dom";

const KojaemRouter = () => {
  const menuItems: string[] = ["HOME", "MUSINSA", "COVERNAT", "KIRSH", "LMC"];
  const [selected, setSelected] = useState("HOME");

  return (
      <Router>
      <LayoutContainer menuItems={menuItems} selectedLink={selected} linkClick={(link: string) => setSelected(link)} ></LayoutContainer>
      <Switch>
        <Route exact path="/kojaem/home">
          <Gallery linkClick={(link: string) => setSelected(link)}></Gallery>
        </Route>
        <Route exact path="/kojaem/musinsa" component={Musinsa} />
        <Route exact path="/kojaem/covernat" component={Covernat} />
        <Route exact path="/kojaem/kirsh" component={Kirsh} />
        <Route exact path="/kojaem/lmc" component={Lmc} />
        <Route path="/kojaem">Not Found</Route>
      </Switch>
      </Router>
      
  );



};

export default KojaemRouter;

