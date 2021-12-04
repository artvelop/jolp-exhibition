import React, { useState } from 'react';
import { LayoutContainer } from '../components';
import { LmcMain, Loading } from './components';

type Props = {
  selected: string;
  setSelected: (link:string) => void;
}

const Lmc = ({selected, setSelected}:Props) => {
  const [onLoading, setOnLoading] = useState(true);
  return (
    <LayoutContainer selected={selected} setSelected={setSelected}>
    {onLoading ? <Loading setOnLoading={setOnLoading} /> : <LmcMain /> }

  </LayoutContainer>
  );
};

export default Lmc;
