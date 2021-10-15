import React, { useState, useEffect } from 'react';
import { LayoutContainer } from './components/index';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { ArrowNext } from './components';

type Props = { handlePage: () => void };
export const Page6: React.FC<Props> = ({ handlePage }) => {
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
          // y: '0%',
          backgroundPosition: '50% 50%',
        }}
        transition={{
          duration: 1,
          ease: 'easeOut',
          delay: curState === 0 ? 0 : 0,
        }}
      >
        <TitleSection
          animate={{
            opacity: curState === 0 ? [0, 1] : 0,
            y: '20px',
          }}
          transition={{
            duration: 1,
            ease: 'easeOut',
            delay: curState === 0 ? 1 : 0,
          }}
        >
          <MainTitle>기본부터 다르다</MainTitle>
          <SubTitle>
            철분이 함유되어 있지 않고 <br />
            일년내내 13도를 유지하고 있는 동굴 속 샘물을 이용
          </SubTitle>
        </TitleSection>
        <ArrowNext NextPage={NextPage} Color={'white'} Display={nextButton} />
      </Background>
    </LayoutContainer>
  );
};

const Background = styled(motion.div)`
  background: url('${process.env.PUBLIC_URL}/yun/img/water.png');
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: 0;
`;

const TitleSection = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: rgba(0, 66, 165, 1);
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
