import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from 'pages/Home';
import Dongchurl from 'pages/dongchurl/Dongchurl';
import Kojaem from 'pages/kojaem/KojaemRouter';
import Menu from 'pages/sanghun/Menu';
import HarvardBook from 'pages/sanghun/HarvardBook';
import PhilosophyBook from 'pages/sanghun/PhilosophyBook';
import LiveBook from 'pages/sanghun/LiveBook';
import MyselfBook from 'pages/sanghun/MyselfBook';
import TalkGodBook from 'pages/sanghun/TalkGodBook';
import Yun from './pages/yun/Main';

function Root() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dongchurl" component={Dongchurl} />
        <Route path="/sanghun/Menu" component={Menu} />
        <Route path="/sanghun/HarvardBook" component={HarvardBook} />
        <Route path="/sanghun/LiveBook" component={LiveBook} />
        <Route path="/sanghun/MyselfBook" component={MyselfBook} />
        <Route path="/sanghun/PhilosophyBook" component={PhilosophyBook} />
        <Route path="/sanghun/TalkGodBook" component={TalkGodBook} />
        <Route path="/yun" component={Yun} />
        <Route path="/kojaem/" component={Kojaem} />
      </Switch>
    </BrowserRouter>
  );
}

export default Root;
