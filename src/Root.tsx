import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Dongchurl from './pages/dongchurl/Dongchurl';
import Yun from './pages/yun/Main';
import KojaemRouter from './pages/kojaem/KojaemRouter';

function Root() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dongchurl" component={Dongchurl} />
        <Route path="/yun" component={Yun} />
        <Route path="/kojaem/" component={KojaemRouter} />
      </Switch>
    </BrowserRouter>
  );
}

export default Root;
