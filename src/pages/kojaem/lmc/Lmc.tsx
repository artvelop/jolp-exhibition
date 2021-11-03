import React, { useState } from 'react';
import { LayoutContainer } from '../components/LayoutContainer';
import { Loading } from './components/Loading';

type Props = {
  selected: string;
  setSelected: (link:string) => void;
}

const Lmc = ({selected, setSelected}:Props) => {
  const [onLoading, setOnLoading] = useState(true);
  return (
    <LayoutContainer selected={selected} setSelected={setSelected}>
    {/* {onLoading ? <Loading setOnLoading={setOnLoading} /> : <LmcMain /> } */}
    {onLoading ? <Loading setOnLoading={setOnLoading} /> : null }

  </LayoutContainer>
  );
};

export default Lmc;
