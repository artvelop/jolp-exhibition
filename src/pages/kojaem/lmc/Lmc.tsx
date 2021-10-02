import React from 'react';
import LayoutContainer from '../components/LayoutContainer';

type Props = {
  selected: string;
  setSelected: (link:string) => void;
}

const Lmc = ({selected, setSelected}:Props) => {
  return (
  <LayoutContainer
    selected={selected}
    setSelected={setSelected}
  >
    <div>엘엠씨</div>
    <div>엘엠씨2</div>
    <div>엘엠씨3</div>
  </LayoutContainer>
  );
};

export default Lmc;
