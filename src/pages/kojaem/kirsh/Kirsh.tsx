import React from 'react';
import LayoutContainer from '../components/LayoutContainer';

type Props = {
  selected: string;
  setSelected: (link:string) => void;
}

const Kirsh = ({selected, setSelected}:Props) => {
  return(
  <LayoutContainer
    selected={selected}
    setSelected={setSelected}
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
