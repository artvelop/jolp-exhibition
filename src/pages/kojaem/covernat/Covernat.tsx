import React from 'react';
import LayoutContainer from '../LayoutContainer/LayoutContainer';

type Props = {
  selected: string;
  setSelected: (link:string) => void;
}

const Covernat = (props:Props) => {
  return (
  <LayoutContainer
    LinkName="COVERNAT"
    color="#3b5e3d"
    selected={props.selected}
    setSelected={props.setSelected}
  >
    <div>커버낫</div>
    <div>커버낫2</div>
    <div>커버낫3</div>
  </LayoutContainer>
  );
};

export default Covernat;
