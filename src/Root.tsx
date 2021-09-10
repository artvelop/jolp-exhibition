import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from 'pages/Home';

function Root() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default Root;
