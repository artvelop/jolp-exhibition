import { ReactNode } from "react";
import { MenuList } from "./MenuList";
import styled from "@emotion/styled";

const menuItems: string[] = ["HOME", "MUSINSA", "COVERNAT", "KIRSH", "LMC"];

const colors: string[] = [
  "#5aaddd",
  "#434946",
  "#3b5e3d",
  "#f05f5f",
  "#c08bc7",
];

type Props = {
  selected: string;
  setSelected: (link: string) => void;
  children?: ReactNode;
};

export const LayoutContainer = ({ selected, setSelected, children }: Props) => {
  return (
    <RootWrapper>
      <LayoutWrapper>
        <LayoutMenu>
          {menuItems.map((menuItem, index) => (
            <MenuList
              key={menuItem}
              color={colors[index]}
              isSelected={selected === menuItem}
              onClick={() => setSelected(menuItem)}
              menuItem={menuItem}
            />
          ))}
        </LayoutMenu>
      </LayoutWrapper>
      {children}
    </RootWrapper>
  );
};

const RootWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const LayoutWrapper = styled.div`
  position: relative;
  background-color: #0f0f0f;
  padding: 4px;
`;

const LayoutMenu = styled.ul`
  display: flex;
  justify-content: space-around;
`;
