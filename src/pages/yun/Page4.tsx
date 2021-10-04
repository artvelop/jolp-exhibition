import React, { useState, useEffect } from 'react';
import { LayoutContainer } from './components/index';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { ArrowNext } from './components';

type Props = { handlePage: () => void };
export const Page4: React.FC<Props> = ({ handlePage }) => {
  const [curState, setCurState] = useState(0);
  const [nextButton, setNextButton] = useState(0);

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
        <MapWrapper
          animate={{ scale: [30, 1] }}
          transition={{
            duration: 1,
            ease: 'easeOut',
            delay: curState === 0 ? 1 : 0,
          }}
        />
        <TitleWrapper
          animate={{ display: 'flex', opacity: curState === 0 ? [0, 1] : 0, y: '-50px ' }}
          transition={{
            duration: 1,
            ease: 'easeOut',
            delay: curState === 0 ? 2 : 0,
          }}
        >
          <MainTitle>세계 160개국 수출</MainTitle>
          <SubTitle1>연간 생산량 1년에 2억병</SubTitle1>

          <SubTitle2>매출 약 4조 6천억</SubTitle2>
        </TitleWrapper>

        <ArrowNext NextPage={NextPage} Color={'white'} Display={nextButton} />
      </Background>
    </LayoutContainer>
  );
};

const Background = styled(motion.div)`
  position: relative;

  width: 100vw;
  height: 100vh;
  background-color: rgba(15, 176, 211, 1);
  display: flex;
  align-items: center;
  flex-direction: column;
  opacity: 0;
`;

const MapWrapper = styled(motion.div)`
  background: url('/yun/img/map.png');

  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  width: 800px;
  height: 480px;
  background-repeat: no-repeat;
  background-size: cover;
`;

const TitleWrapper = styled(motion.div)`
  color: white;
  margin-top: 50px;

  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const MainTitle = styled(motion.div)`
  font-size: 50px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;
const SubTitle1 = styled(motion.div)`
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubTitle2 = styled(motion.div)`
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
