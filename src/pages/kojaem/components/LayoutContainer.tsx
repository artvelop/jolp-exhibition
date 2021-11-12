import "../style.css";
import { ReactNode } from 'react';
import { MenuList } from "./MenuList";



const menuItems: string[] = ['HOME', 'MUSINSA', 'COVERNAT', 'KIRSH', 'LMC'];

const colors: string[] = [
  '#5aaddd',
  '#434946',
  '#3b5e3d',
  '#f05f5f',
  '#c08bc7',
];

type Props = {
  selected: string
  setSelected: (link:string) => void
  children?: ReactNode
}

const LayoutContainer = ({ selected, setSelected, children}:Props) => {
  return (
    <>
      <div className="layoutContainer">
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
      </div>
      {children}
    </>
  );
};





export default LayoutContainer;
