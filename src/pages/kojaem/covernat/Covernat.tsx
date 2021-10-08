import styled from '@emotion/styled';
import React, { useState } from 'react';
import { LayoutContainer } from '../components/LayoutContainer';
import { Loading } from "./components/Loading";
import { motion } from "framer-motion";
type Props = {
  selected: string;
  setSelected: (link:string) => void;
}

const transition = {
  duration: 1,
}
const imageVariants = {
  hidden: { x: "-10%", opacity: 0, transition},
  show: {
    x: "0%",
    opacity: 1,
    transition
  }
}

const descriptionVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      when:"beforeChildren",
      staggerChildren: 1,
      ...transition}
  }
}

const descriptionContents = {
  hidden:{
    y: 50,
    opacity: 0,
    transition
  },
  show: {
    y: 0,
    opacity: 1,
    transition
  }
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
      variants={imageVariants}
      initial="hidden"
      animate="show"
      />
      <Description
      variants={descriptionVariants}
      initial="hidden"
      animate="show"
      >
      <BrandName variants={descriptionContents}
      >Covernat</BrandName>
      <Intro variants={descriptionContents}
      >커버낫에 대한 설명</Intro>
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

    @media screen and (max-width: 600px) {
      flex-direction: column;
      justify-content: center;
  }
`;

const BrandImage = styled(motion.img)`
  width: 50vw;
  max-width: 800px;
  overflow: hidden;
`;

const Description = styled(motion.div)`
  width: 50vw;
  display:flex;
  flex-direction: column;
  text-align: center;  
`;
const BrandName = styled(motion.h1)`
  font-size: 30px;
  color: white;

  @media screen and (min-width: 600px) {
    font-size: 40px;
}

@media screen and (min-width: 800px) {
    font-size: 50px;
}

@media screen and (min-width: 1000px) {
    font-size: 60px;
}
@media screen and (min-width: 1200px) {
    font-size: 70px;
}
`;

const Intro = styled(motion.h1)`
  font-size: 20px;

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