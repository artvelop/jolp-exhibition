import React from 'react';
import LayoutContainer from '../LayoutContainer/LayoutContainer';

type Props = {
  selected: string;
  setSelected: (link:string) => void;
}

const Lmc = (props:Props) => {
  return (
  <LayoutContainer
    LinkName="LMC"
    color="#c08bc7"
    selected={props.selected}
    setSelected={props.setSelected}
  >
    <div>엘엠씨</div>
    <div>엘엠씨2</div>
    <div>엘엠씨3</div>
  </LayoutContainer>
  );
};

export default Lmc;
