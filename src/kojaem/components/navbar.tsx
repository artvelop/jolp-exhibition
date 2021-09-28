import React, { useState } from 'react';
import '../style.css';
import { Route, Switch, NavLink } from 'react-router-dom';
import Musinsa from 'kojaem/components/Musinsa';
import Covernat from 'kojaem/components/Covernat';
import Kirsh from 'kojaem/components/Kirsh';
import Lmc from 'kojaem/components/Lmc';
import Home from 'kojaem/components/Home';
import { AnimateSharedLayout, motion } from 'framer-motion';
const Navbar = () => {
  const[selected, setSelected] = useState("HOME");
  return (
      <>
      <nav id="navbar" key="navbar">
      <AnimateSharedLayout>
          <ul className="navbar__menu">
            {menu_items.map((menu_item, index) =>
              <MenuList
                key={menu_item}
                color={colors[index]}
                isSelected={selected === menu_item}
                onClick={() => setSelected(menu_item)}
                menu_item={menu_item}
              />
            )}

          </ul>
        </AnimateSharedLayout>
      </nav>
      <Switch>
        <Route exact path="/kojaem/home"><Home></Home></Route>
        <Route exact path="/kojaem/musinsa"><Musinsa></Musinsa></Route>
        <Route exact path="/kojaem/covernat"><Covernat></Covernat></Route>
        <Route exact path="/kojaem/kirsh"><Kirsh></Kirsh></Route>
        <Route exact path="/kojaem/lmc"><Lmc></Lmc></Route>
        <Route path="/kojaem">Not Found</Route>
      </Switch>
      </>
  );
};


function MenuList(props:any):any {
  return (
    <>
      <li className="navbar__menu__item"
      onClick={props.onClick} style={{backgroundColor: props.color}}>
      <NavLink exact to ={`/kojaem/${props.menu_item}`}>{props.menu_item}</NavLink>
        {props.isSelected && (
          <motion.div
          key={`${props.menu_item}_outline`}
          layoutId="outline"
          className="outline"
          initial={false}
          animate={{borderColor: props.color}}
          transition={spring}
          />
        )}
      </li>
    </>
  )

}






const colors:string[] = ["#5aaddd", "#434946", "#3b5e3d", "#f05f5f", "#c08bc7"];

const menu_items:string[] = ["HOME","MUSINSA","COVERNAT","KIRSH","LMC"];

const spring : { type : string , stiffness? : number, damping? : number, mass? : number} = 
{
  type : "spring",
  stiffness : 500, 
  damping : 30,
  mass : 1 // 무게조절
};

export default Navbar;
