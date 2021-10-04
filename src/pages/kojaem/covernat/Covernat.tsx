import React from 'react';
import { LayoutContainer } from '../components/LayoutContainer';
import { Loading } from "./components/Loading";
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
    <Loading />

    
  </LayoutContainer>
  );
};

export default Covernat;
