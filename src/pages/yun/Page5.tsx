import React, { useState, useEffect } from 'react';
import { LayoutContainer } from './components/index';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { ArrowNext } from './components';

type Props = { handlePage: () => void };
export const Page5: React.FC<Props> = ({ handlePage }) => {
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
        <ArrowNext NextPage={NextPage} Color={'black'} Display={nextButton} />
      </Background>
    </LayoutContainer>
  );
};

const Background = styled(motion.div)`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: rgba(253, 224, 223, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
`;
