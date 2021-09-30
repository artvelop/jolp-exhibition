import "../style.css";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { ReactNode } from 'react';


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


type menuListProps = {
  color: string;
  isSelected: boolean;
  onClick: () => void;
  menuItem: string;
};



const menuItems: string[] = ["HOME", "MUSINSA", "COVERNAT", "KIRSH", "LMC"];

const colors: string[] = [
  "#5aaddd",
  "#434946",
  "#3b5e3d",
  "#f05f5f",
  "#c08bc7",
];

type Props = {
  LinkName: string
  color: string
  selected: string
  setSelected: (link:string) => void
  children?: ReactNode
}

const LayoutContainer = (props:Props) => {
  return (
    <>
      <div className="layoutContainer">
          <ul className="layoutContainerMenu">
            {menuItems.map((menuItem, index) => (
              <MenuList
                key={menuItem}
                color={colors[index]}
                isSelected={props.selected === menuItem}
                onClick={() => props.setSelected(menuItem)}
                menuItem={menuItem}
              />
            ))}
          </ul>
      </div>
      {props.children}
    </>
  );
};




function MenuList(props: menuListProps) {
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
