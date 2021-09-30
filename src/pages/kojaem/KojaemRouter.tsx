import React, { useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Musinsa from "./musinsa/Musinsa";
import Covernat from "./covernat/Covernat";
import Kirsh from "./kirsh/Kirsh";
import Lmc from "./lmc/Lmc";
import Gallery from "./gallery/Gallery";
import { Route, Switch } from "react-router-dom";
import { AnimateSharedLayout } from "framer-motion";

const KojaemRouter = () => {
  const [selected, setSelected] = useState("HOME");

  return (
      <Router>
      <AnimateSharedLayout>
      <Switch>
        <Route exact path="/kojaem/home"
          render={() => <Gallery selected={selected} setSelected={setSelected}/>}
          >
        </Route>
        <Route exact path="/kojaem/musinsa"
          render={() => <Musinsa selected={selected} setSelected={setSelected}/>}        
        />
        <Route exact path="/kojaem/covernat" 
          render={() => <Covernat selected={selected} setSelected={setSelected}/>}   
        />
        <Route exact path="/kojaem/kirsh"
          render={() => <Kirsh selected={selected} setSelected={setSelected}/>}   
        />
        <Route exact path="/kojaem/lmc"
          render={() => <Lmc selected={selected} setSelected={setSelected}/>}   
        />
        <Route path="/kojaem">Not Found</Route>
      </Switch>
      </AnimateSharedLayout>

      </Router>
      
  );



};

export default KojaemRouter;

