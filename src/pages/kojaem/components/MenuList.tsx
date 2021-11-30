import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "@emotion/styled";

const spring: {
  type: string;
  stiffness: number;
  damping: number;
  mass: number;
} = {
  type: "spring",
  stiffness: 500,
  damping: 30,
  mass: 1,
};

type Props = {
  color: string;
  isSelected: boolean;
  menuItem: string;
};

export const MenuList = ({ color, isSelected, menuItem }: Props) => {
  return (
    <>
      <MenuItem style={{ backgroundColor: color }}>
        <MenuItemLink exact to={`/kojaem/${menuItem}`}>
          {menuItem}
        </MenuItemLink>
        {isSelected && (
          <Outline
            layoutId="outline"
            initial={false}
            animate={{ borderColor: color }}
            transition={spring}
          />
        )}
      </MenuItem>
    </>
  );
};

const MenuItem = styled.li`
  list-style: none;
  width: 100px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  position: relative;
  padding: 8px 0;
  margin: 0 auto;
  cursor: pointer;
  border-radius: 4px;
`;

const MenuItemLink = styled(NavLink)`
  position: absolute;
  display: block;
  top: 0;
  width: 100%;
  height: 100%;
  line-height: 45px;
  text-decoration: none;
  color: #e7e3e3;
`;

const Outline = styled(motion.div)`
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  border: 5px solid white;
  border-radius: 10px;
  pointer-events: none;
`;
