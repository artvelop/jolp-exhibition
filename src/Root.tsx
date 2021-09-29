import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from 'pages/Home';
import Kojaem from 'pages/kojaem/components/LayoutContainer/LayoutContainer';

function Root() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/kojaem/" component={Kojaem} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Root;
