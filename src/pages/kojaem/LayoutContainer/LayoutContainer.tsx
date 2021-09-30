import "../style.css";
import { NavLink } from "react-router-dom";
import { AnimateSharedLayout, motion } from "framer-motion";

const colors: string[] = [
  "#5aaddd",
  "#434946",
  "#3b5e3d",
  "#f05f5f",
  "#c08bc7",
];


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


type childrenProps = {
  menuItems:string[];
  selectedLink: string;
  linkClick: (link:string) => void;
}

type menuListProps = {
  color: string;
  isSelected: boolean;
  onClick: () => void;
  menuItem: string;
};

const LayoutContainer = (props:childrenProps) => {
  return (
    <>
      <div className="layoutContainer">
        <AnimateSharedLayout>
          <ul className="layoutContainerMenu">
            {props.menuItems.map((menuItem, index) => (
              <MenuList
                key={menuItem}
                color={colors[index]}
                isSelected={props.selectedLink === menuItem}
                onClick={() => props.linkClick(menuItem)}
                menuItem={menuItem}
              />
            ))}
          </ul>
        </AnimateSharedLayout>
      </div>
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
