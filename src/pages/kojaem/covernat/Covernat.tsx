import React from 'react';
import LayoutContainer from '../components/LayoutContainer';

type Props = {
  selected: string;
  setSelected: (link:string) => void;
}

const Covernat = ({selected, setSelected}:Props) => {
  return (
  <LayoutContainer
    selected={selected}
    setSelected={setSelected}
  >
    <div>커버낫</div>
    <div>커버낫2</div>
    <div>커버낫3</div>
  </LayoutContainer>
  );
};

export default Covernat;
