import React, { useState } from 'react';
import { LayoutContainer } from '../components';
import { KirshMain, Loading } from './components';

type Props = {
  selected: string;
  setSelected: (link:string) => void;
}

const Kirsh = ({selected, setSelected}:Props) => {
  const [onLoading, setOnLoading] = useState(true);
  return (
    <LayoutContainer selected={selected} setSelected={setSelected}>
    {onLoading ? <Loading setOnLoading={setOnLoading} /> : <KirshMain /> }

  </LayoutContainer>
  );
};

export default Kirsh;
