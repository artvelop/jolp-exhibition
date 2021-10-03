import React, { useState } from 'react';
import { LayoutContainer } from './components/index';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { ArrowNext } from './components';

type Props = { handlePage: () => void };
export const Page3: React.FC<Props> = ({ handlePage }) => {
  const [curState, setCurState] = useState(0);

  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }

  const NextPage = async () => {
    setCurState(1);
    await timeout(3000);
    handlePage();
  };
  return (
    <LayoutContainer>
      <Background
        animate={{
          opacity: curState === 0 ? [0, 1] : [1, 1, 0],
        }}
        transition={{
          duration: curState === 0 ? 1 : 3,
          ease: 'linear',
        }}
      >
        <LeftTitle
          animate={{
            opacity: curState === 0 ? [0, 0, 1] : 0,
          }}
          transition={{
            duration: 3,
            ease: 'linear',
          }}
        >
          테네시위스키의 자존심
        </LeftTitle>
        <JackImg
          animate={{
            opacity: curState === 0 ? [0, 0, 1] : 0,
          }}
          transition={{
            duration: 3,
            ease: 'linear',
          }}
        />

        <RightTitle
          animate={{
            opacity: curState === 0 ? [0, 0, 1] : 0,
          }}
          transition={{
            duration: 3,
            ease: 'linear',
          }}
        >
          잭 다니엘 Old No.7
        </RightTitle>
        <ArrowNext NextPage={NextPage} Color={'White'} Display={1} />
      </Background>
    </LayoutContainer>
  );
};

const Background = styled(motion.div)`
  position: relative;

  width: 100vw;
  height: 100vh;
  background-color: rgba(100, 40, 39, 1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeftTitle = styled(motion.div)`
  font-size: 40px;
  color: white;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const JackImg = styled(motion.div)`
  background: url('/yun/img/jack.png');
  object-fit: cover;
  width: 215px;
  height: 600px;
  background-repeat: no-repeat;
  background-size: cover;

  margin-left: 20px;
  margin-right: 20px;
`;

const RightTitle = styled(motion.div)`
  font-size: 40px;
  color: white;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
