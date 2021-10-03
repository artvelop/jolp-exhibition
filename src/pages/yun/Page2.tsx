import React, { useState } from 'react';
import { LayoutContainer } from './components/index';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { ArrowNext } from './components';
import { NONAME } from 'dns';

type Props = { handlePage: () => void };
export const Page2: React.FC<Props> = ({ handlePage }) => {
  const [curState, setCurState] = useState(0);

  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }

  const NextPage = async () => {
    setCurState((curState) => curState + 1);
    await timeout(3000);
    if (curState == 2) handlePage();
  };

  return (
    <LayoutContainer>
      <Background
        animate={{
          opacity: curState === 0 || 1 ? [0, 1] : [1, 0],
        }}
        transition={{
          duration: 1,
          ease: 'easeOut',
          delay: curState === 0 || 1 ? 0 : 2,
        }}
      >
        <LeftTitle
          animate={{
            opacity: curState === 0 ? [0, 1] : 0,
            y: curState === 0 ? '20px' : '40px',

            transitionEnd: curState === 1 ? { display: 'none', width: '0%' } : undefined,
          }}
          transition={{
            duration: 1,
            ease: 'easeOut',
            delay: curState === 0 ? 3 : 0,
          }}
        >
          테네시위스키의 자존심
        </LeftTitle>
        <JackImg
          animate={{
            opacity: curState === 0 || 1 ? [0, 1] : 0,
            scale: curState === 0 ? [1, 1.1] : 1,
            top: curState === 1 ? '-200px' : undefined,
            left: curState === 1 ? '-100px' : undefined,
            rotate: curState === 1 ? 90 : undefined,
            // position: curState === 1 ? 'absolute' : undefined,
          }}
          transition={{
            duration: 1,
            ease: 'easeOut',
            delay: curState === 0 ? 2 : 0,
          }}
        />
        <RightTitle
          animate={{
            opacity: curState === 0 ? [0, 1] : [1, 0],
            y: curState === 0 ? '-20px' : '-40px',

            transitionEnd: curState === 1 ? { display: 'none', width: '0%' } : undefined,
          }}
          transition={{
            duration: 1,
            ease: 'easeOut',
            delay: curState === 0 ? 3 : 0,
          }}
        >
          잭 다니엘 Old No.7
        </RightTitle>
        {curState === 1 && (
          <Wrapper>
            <SecondTitle
              animate={{
                opacity: curState === 1 ? [0, 1] : 0,
                y: '-20px',
              }}
              transition={{
                duration: 1,
                ease: 'easeOut',
                delay: curState === 1 ? 3 : 0,
              }}
            >
              150년의 역사
            </SecondTitle>
            <SecondSubTitle
              animate={{
                opacity: curState === 1 ? [0, 1] : 0,
                y: '-20px',
              }}
              transition={{
                duration: 1,
                ease: 'easeOut',
                delay: curState === 1 ? 3 : 0,
              }}
            >
              시간이 증명한 완벽한 맛
            </SecondSubTitle>
          </Wrapper>
        )}
        <ArrowNext NextPage={NextPage} Color={'black'} />
      </Background>
    </LayoutContainer>
  );
};

const Background = styled(motion.div)`
  position: relative;

  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  opacity: 0;
`;

const LeftTitle = styled(motion.div)`
  position: relative;
  font-size: 40px;
  color: black;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  top: -20px;
`;

const JackImg = styled(motion.div)`
  background: url('/yun/img/jack.png');
  position: absolute;
  object-fit: cover;
  width: 215px;
  height: 600px;
  background-repeat: no-repeat;
  background-size: cover;

  opacity: 0;
  margin-left: 20px;
  margin-right: 20px;
`;

const RightTitle = styled(motion.div)`
  position: relative;
  font-size: 40px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50%;
  top: 20px;
  opacity: 0;
`;

/////////////////////////////////////////
const Wrapper = styled(motion.div)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const SecondTitle = styled(motion.div)`
  position: relative;
  font-size: 50px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 200px; */
  opacity: 0;
  margin-bottom: 70px;
  font-weight: bold;
`;

const SecondSubTitle = styled(motion.div)`
  position: relative;
  font-size: 40px;
  color: black;
  display: flex;

  /* width: 200px; */
  justify-content: center;
  align-items: center;

  opacity: 0;
`;
