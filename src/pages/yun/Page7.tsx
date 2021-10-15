import React, { useState, useEffect } from 'react';
import { LayoutContainer } from './components/index';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { ArrowNext } from './components';
import { ShowImg } from './components/page7';
type Props = { handlePage: () => void };
export const Page7: React.FC<Props> = ({ handlePage }) => {
  const [curState, setCurState] = useState(0);
  const [nextButton, setNextButton] = useState(0);
  //name: number; imgX: number; imgY: number; imgW: number; imgH: number
  const imgData = [
    { name: 1, imgX: 50, imgY: 0, imgW: 120, imgH: 200 },
    { name: 2, imgX: 10, imgY: 0, imgW: 100, imgH: 100 },
  ];
  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }

  useEffect(() => {
    const wait2 = async () => {
      await timeout(3000);
      setNextButton(1);
    };
    wait2();
  }, []);

  const NextPage = async () => {
    await timeout(200);
    setCurState(1);
    setNextButton(0);
    await timeout(1000);
    handlePage();
  };

  return (
    <LayoutContainer>
      <Background
        animate={{
          opacity: curState === 0 ? [0, 1] : 0,
        }}
        transition={{
          duration: 1,
          ease: 'easeOut',
          delay: curState === 0 ? 0 : 0,
        }}
      >
        {imgData.map(
          (
            { name, imgX, imgY, imgW, imgH } //딜레이를 여기서 줘서 조금씩 늘려야할듯
          ) => (
            <ShowImg key={name} name={name} imgX={imgX} imgY={imgY} imgW={imgW} imgH={imgH} />
          )
        )}
        <TitleSection
          animate={{
            opacity: curState === 0 ? [0, 1] : 0,
          }}
          transition={{
            duration: 1,
            ease: 'easeOut',
            delay: curState === 0 ? 3 : 0,
          }}
        >
          <MainTitle>음악과 함께 하다</MainTitle>
          <SubTitle>뮤지션들이 인정한 최고의 위스키</SubTitle>
        </TitleSection>
        <ArrowNext NextPage={NextPage} Color={'white'} Display={nextButton} />
        <SubBackground
          animate={{
            opacity: curState === 0 ? [0, 1] : 0,
          }}
          transition={{
            duration: 1,
            ease: 'easeOut',
            delay: curState === 0 ? 3 : 0,
          }}
        />
      </Background>
    </LayoutContainer>
  );
};

const Background = styled(motion.div)`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: 0;
  background-color: white;
`;
const TitleSection = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  z-index: 5;
`;
const MainTitle = styled(motion.div)`
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 50px;
`;
const SubTitle = styled(motion.div)`
  font-size: 40px;
  align-items: center;
  text-align: center;
  line-height: 70px;
`;

const SubBackground = styled(motion.div)`
  position: absolute;

  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(244, 70, 70, 1);
  z-index: 3;
`;
