import styled from '@emotion/styled';
import React, { useState } from 'react';
import { LayoutContainer } from '../components/LayoutContainer';
import { Loading } from "./components/Loading";
import { motion } from "framer-motion";
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
      <BrandImage
      src={`/koJaem/img/Covernat.jpg`}
      alt="brand"
      initial={{opacity:0}}
      animate={{opacity:1}}
      />
      <Description
      initial={{opacity:0}}
      animate={{opacity:1}}
      >
      <BrandName>Covernat</BrandName>
      <Intro>커버낫에 대한 설명</Intro>
      </Description>
    </CovernatWrapper> 

      : <Loading setIsLoading={setIsLoading} />}
    
  </LayoutContainer>
  );
};

export default Covernat;

const CovernatWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color:#d7d7d5;
`;

const BrandImage = styled(motion.img)`
  max-width: 800px;
  overflow: hidden;
`;

const Description = styled(motion.div)`
  display:flex;
  flex-direction: column;
  text-align: center;
  
`;
const BrandName = styled.h1`
  font-size: 20px;
  color: white;

  @media screen and (min-width: 600px) {
    font-size: 30px;
}

@media screen and (min-width: 800px) {
    font-size: 40px;
}

@media screen and (min-width: 1000px) {
    font-size: 50px;
}
@media screen and (min-width: 1200px) {
    font-size: 60px;
}
`;

const Intro = styled.h1`

`;