import styled from '@emotion/styled';
import React, { useState } from 'react';
import { LayoutContainer } from '../components/LayoutContainer';
import { Loading } from "./components/Loading";
type Props = {
  selected: string;
  setSelected: (link:string) => void;
}

const Covernat = ({selected, setSelected}:Props) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
  <LayoutContainer
    selected={selected}
    setSelected={setSelected}
  >
    {isLoading ?
    <CovernatWrapper>
      로딩구현까지 완료!
    </CovernatWrapper> 

      : <Loading setIsLoading={setIsLoading} />}

    
    

    

    
  </LayoutContainer>
  );
};

export default Covernat;

const CovernatWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color:#d7d7d5;
`;