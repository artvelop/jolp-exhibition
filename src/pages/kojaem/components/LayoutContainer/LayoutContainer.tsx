import React, { useState } from "react";
import "../../style.css";
import { Route, Switch, NavLink } from "react-router-dom";
import Musinsa from "../musinsa/Musinsa";
import Covernat from "../covernat/Covernat";
import Kirsh from "../kirsh/Kirsh";
import Lmc from "../lmc/Lmc";
import { AnimateSharedLayout, motion } from "framer-motion";
import Gallery from "../gallery/Gallery";

const colors: string[] = [
  "#5aaddd",
  "#434946",
  "#3b5e3d",
  "#f05f5f",
  "#c08bc7",
];

const menuItems: string[] = ["HOME", "MUSINSA", "COVERNAT", "KIRSH", "LMC"];

const spring: {
  type: string;
  stiffness: number;
  damping: number;
  mass: number;
} = {
  type: "spring",
  stiffness: 500,
  damping: 30,
  mass: 1, // 무게조절
};

const LayoutContainer = () => {
  const [selected, setSelected] = useState("HOME");
  return (
    <>
      <div className="layoutContainer">
        <AnimateSharedLayout>
          <ul className="layoutContainerMenu">
            {menuItems.map((menuItem, index) => (
              <MenuList
                key={menuItem}
                color={colors[index]}
                isSelected={selected === menuItem}
                onClick={() => setSelected(menuItem)}
                menuItem={menuItem}
              />
            ))}
          </ul>
        </AnimateSharedLayout>
      </div>
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
    </>
  );
};

type Props = {
  color: string;
  isSelected: boolean;
  onClick: () => void;
  menuItem: string;
};

function MenuList(props: Props) {
  return (
    <>
      <li
        className="layoutContainerMenuItem"
        onClick={props.onClick}
        style={{ backgroundColor: props.color }}
      >
        <NavLink exact to={`/kojaem/${props.menuItem}`}>
          {props.menuItem}
        </NavLink>
        {props.isSelected && (
          <motion.div
            layoutId="outline"
            className="outline"
            initial={false}
            animate={{ borderColor: props.color }}
            transition={spring}
          />
        )}
      </li>
    </>
  );
}

export default LayoutContainer;
