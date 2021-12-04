import React, { useState } from 'react';
import Musinsa from "./musinsa/Musinsa";
import Covernat from "./covernat/Covernat";
import Kirsh from "./kirsh/Kirsh";
import Lmc from "./lmc/Lmc";
import Gallery from "./gallery/Gallery";
import { Route, Switch } from "react-router-dom";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";

const KojaemRouter = () => {
  const [selected, setSelected] = useState("");

  return (
    <>
      <Route
          render={({ location }) => (
        <AnimateSharedLayout>
            <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/kojaem/HOME"
            render={() => <Gallery selected={selected} setSelected={setSelected}/>}
            >
          </Route>
          <Route exact path="/kojaem/MUSINSA"
            render={() => <Musinsa selected={selected} setSelected={setSelected}/>}
          />
          <Route exact path="/kojaem/COVERNAT" 
            render={() => <Covernat selected={selected} setSelected={setSelected}/>}   
          />
          <Route exact path="/kojaem/KIRSH"
            render={() => <Kirsh selected={selected} setSelected={setSelected}/>}   
          />
          <Route exact path="/kojaem/LMC"
            render={() => <Lmc selected={selected} setSelected={setSelected}/>}   
          />
          <Route path="/kojaem">Not Found</Route>
        </Switch>
        </AnimatePresence>
        </AnimateSharedLayout>
        
          )}
          
          />
      </>
  );


};

export default KojaemRouter;

