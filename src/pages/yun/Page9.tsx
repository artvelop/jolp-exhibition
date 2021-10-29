import React, { useState, useEffect } from 'react';
import { LayoutContainer } from './components/index';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { ArrowNext } from './components';

type Props = { handlePage: () => void };

export const Page9: React.FC<Props> = ({ handlePage }) => {
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
        }}
        transition={{
          duration: 1,
          ease: 'easeOut',
          delay: curState === 0 ? 0 : 0,
        }}
      >
        <Section>
          <LeftJack
            animate={{
              opacity: curState === 0 ? [0, 1] : 0,
              rotate: 40,
            }}
            transition={{
              duration: 1,
              ease: 'easeOut',
              delay: curState === 0 ? 1 : 0,
            }}
          />
          <CenterWrapper>
            <ImgTitle
              animate={{
                opacity: curState === 0 ? [0, 1] : 0,
              }}
              transition={{
                duration: 1,
                ease: 'easeOut',
                delay: curState === 0 ? 1 : 0,
              }}
            />
            <MainTitle
              animate={{
                opacity: curState === 0 ? [0, 1] : 0,
                scale: 1.2,
              }}
              transition={{
                duration: 1,
                ease: 'easeOut',
                delay: curState === 0 ? 1.5 : 0,
              }}
            >
              평생의 동반자
            </MainTitle>
            <SubTitle
              animate={{
                opacity: curState === 0 ? [0, 1] : 0,
                scale: 1.2,
              }}
              transition={{
                duration: 1,
                ease: 'easeOut',
                delay: curState === 0 ? 1.5 : 0,
              }}
            >
              한번 마시면 빠져나올 수 없는 맛
            </SubTitle>
          </CenterWrapper>
          <RightJack
            animate={{
              opacity: curState === 0 ? [0, 1] : 0,

              rotate: -40,
            }}
            transition={{
              duration: 1,
              ease: 'easeOut',
              delay: curState === 0 ? 1 : 0,
            }}
          />
        </Section>
        <ArrowNext NextPage={NextPage} Color={'white'} Display={nextButton} />
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
  background-color: black;
  overflow: hidden;
`;

const Section = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LeftJack = styled(motion.div)`
  background: url('${process.env.PUBLIC_URL}/yun/img/jack.png');
  object-fit: cover;
  width: 265px;
  height: 730px;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0;
`;
const CenterWrapper = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  color: white;
  height: 100%;
`;
const ImgTitle = styled(motion.div)`
  background: url('${process.env.PUBLIC_URL}/yun/img/logo.png');

  object-fit: cover;
  width: 455px;
  height: 340px;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0;
  margin-bottom: 60px;
`;
const MainTitle = styled(motion.div)`
  font-size: 45px;
  font-weight: bold;

  margin-bottom: 50px;
`;

const SubTitle = styled(motion.div)`
  font-size: 35px;
`;

const RightJack = styled(motion.div)`
  background: url('${process.env.PUBLIC_URL}/yun/img/jack.png');
  object-fit: cover;
  width: 265px;
  height: 730px;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0;
`;
