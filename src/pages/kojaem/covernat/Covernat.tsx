import React, { useState } from 'react';
import { LayoutContainer } from '../components/LayoutContainer';
import { Loading } from "./components/Loading";
type Props = {
  selected: string;
  setSelected: (link:string) => void;
}

const Covernat = ({selected, setSelected}:Props) => {
  // const [loading, setLoading] = useState(false);
  return (
  <LayoutContainer
    selected={selected}
    setSelected={setSelected}
  >
    {/* {loading ? "" : <Loading setLoading={setLoading} />} */}
    {/* <Loading setLoading={setLoading} /> */}
    <Loading />
    

    
  </LayoutContainer>
  );
};

export default Covernat;
