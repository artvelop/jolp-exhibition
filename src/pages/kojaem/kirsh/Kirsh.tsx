import React from 'react';
import LayoutContainer from '../LayoutContainer/LayoutContainer';

type Props = {
  selected: string;
  setSelected: (link:string) => void;
}

const Kirsh = (props:Props) => {
  return(
  <LayoutContainer
    LinkName="KIRSH"
    color="#f05f5f"
    selected={props.selected}
    setSelected={props.setSelected}
  >
    <div>키르시</div>
    <div>키르시2
    <div>키르시2-1</div>

    </div>
    <div>키르시3</div>
  </LayoutContainer>
  );
};

export default Kirsh;
