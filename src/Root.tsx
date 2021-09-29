import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from 'pages/Home';
import Dongchurl from 'pages/dongchurl/Dongchurl';

function Root() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dongchurl" component={Dongchurl} />
      </Switch>
    </BrowserRouter>
  );
}

export default Root;
