import "../style.css";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";


const spring: {
    type: string;
    stiffness: number;
    damping: number;
    mass: number;
  } = {
    type: 'spring',
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
  
export const MenuList = ({color, isSelected, onClick, menuItem}: menuListProps) => {
    return (
      <>
        <li
          className="layoutContainerMenuItem"
          onClick={onClick}
          style={{ backgroundColor: color }}
        >
          <NavLink exact to={`/kojaem/${menuItem}`}>
            {menuItem}
          </NavLink>
          {isSelected && (
            <motion.div
              layoutId="outline"
              className="outline"
              initial={false}
              animate={{ borderColor: color }}
              transition={spring}
            />
          )}
        </li>
      </>
    );
  }