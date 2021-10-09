import styled from '@emotion/styled';
import React, { useState } from 'react';
import { LayoutContainer } from '../components/LayoutContainer';
import { Loading } from "./components/Loading";
import { motion } from "framer-motion";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const nextButtonIcon = <FontAwesomeIcon icon={faArrowRight} />

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
      src={`/koJaem/img/covernat/covernat1.jpg`}
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
      >커버낫(COVERNAT)은 COVER-(다루다) NAT-Needle And Thread-(바늘과 실)의 합성어로, 의복에 있어 기본 요소라 할수 있는 바늘과 실.<br />그 바늘과 실이라는 기본에서 시작하여 기본에 충실한 옷을 다룬다라는 의미를 가지고 있습니다.</Intro>
      <NextButton
      onClick={() => console.log("클릭")}
      variants={descriptionVariants}
      >{nextButtonIcon}</NextButton>

      </Description>
    </CovernatWrapper> 

      : <Loading setIsLoading={setIsLoading} />}
    
  </LayoutContainer>
  );
};

export default Covernat;

const CovernatWrapper = styled.div`
    display: flex;
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
  @media screen and (max-width: 600px) {
    margin-top: 20px;
    width: 100vw;
    overflow: hidden;
}
`;

const Description = styled(motion.div)`
  width: 50vw;
  display:flex;
  flex-direction: column;
  text-align: center;  
  padding: 35px;
  @media screen and (max-width: 600px) {
    padding: 0;
}
`;
const BrandName = styled(motion.h1)`
  margin-top : 100px;
  font-size: 30px;
  color: white;

  @media screen and (max-width: 600px) {
    margin-top : 150px;
    font-size: 40px;
    width: 100vw;
}

@media screen and (min-width: 600px) {
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
  margin:0;
  font-size: 20px;
  text-align: left;
  padding: 35px;
  margin-top: 100px;

  @media screen and (max-width: 600px) {
    margin-top : 20px;
    width: 90vw;
}
  @media screen and (min-width: 800px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1000px) {
    font-size: 23px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 25px;
  }
`;

const NextButton = styled(motion.div)`
  display:flex;
  margin-left:auto;
  color:darkolivegreen;
  font-size: 50px;
  cursor: pointer;
`;