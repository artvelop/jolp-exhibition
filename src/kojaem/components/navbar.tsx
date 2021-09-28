import React from 'react';
import '../style.css';
import { Route, Switch, NavLink } from 'react-router-dom';
import Musinsa from 'kojaem/components/Musinsa';
import Covernat from 'kojaem/components/Covernat';
import Kirsh from 'kojaem/components/Kirsh';
import Lmc from 'kojaem/components/Lmc';
import Home from 'kojaem/components/Home';

const Navbar = () => {
  return (
      <>
      <nav id="navbar">
        <ul className="navbar__menu">
          <li className="navbar__menu__item"><NavLink exact to ="/kojaem">Home</NavLink></li>
          <li className="navbar__menu__item"><NavLink exact to ="/kojaem/musinsa">MUSINSA</NavLink></li>
          <li className="navbar__menu__item"><NavLink exact to ="/kojaem/covernat">COVERNAT</NavLink></li>
          <li className="navbar__menu__item"><NavLink exact to ="/kojaem/kirsh">KIRSH</NavLink></li>
          <li className="navbar__menu__item"><NavLink exact to ="/kojaem/lmc">LMC</NavLink></li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/kojaem"><Home></Home></Route>
        <Route exact path="/kojaem/musinsa"><Musinsa></Musinsa></Route>
        <Route exact path="/kojaem/covernat"><Covernat></Covernat></Route>
        <Route exact path="/kojaem/kirsh"><Kirsh></Kirsh></Route>
        <Route exact path="/kojaem/lmc"><Lmc></Lmc></Route>
      </Switch>
      </>
  );
};

export default Navbar;
