import React, { useState } from 'react';
import { LayoutContainer } from '../components/LayoutContainer';
import { Loading } from './components/Loading';

type Props = {
  selected: string;
  setSelected: (link:string) => void;
}

const Kirsh = ({selected, setSelected}:Props) => {
  const [onLoading, setOnLoading] = useState(true);
  return (
    <LayoutContainer selected={selected} setSelected={setSelected}>
    {/* {onLoading ? <Loading setOnLoading={setOnLoading} /> : <KirshMain /> } */}
    {onLoading ? <Loading setOnLoading={setOnLoading} /> : null }

  </LayoutContainer>
  );
};

export default Kirsh;
