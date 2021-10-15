import React, { useState } from 'react';
import { LayoutContainer } from './components/index';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

type Props = { handlePage: () => void };
export const Page1: React.FC<Props> = ({ handlePage }) => {
  const [PageLock, setPageLock] = useState(0);
  const [curState, setCurState] = useState(0);

  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }

  const NextPage = async () => {
    if (PageLock === 0) {
      setPageLock(1);
      setCurState(1);
      await timeout(1000);
      handlePage();
    }
  };
  return (
    <LayoutContainer>
      <BackgroundImg
        animate={{
          opacity: curState === 0 ? 1 : 0,
          translateX: curState === 0 ? 0 : -100,
        }}
        transition={{
          duration: curState === 0 ? 1 : 1,
          ease: 'easeOut',
        }}
      >
        <Wrapper
          animate={{
            opacity: curState === 0 ? 1 : 0,
            x: curState === 0 ? 0 : '200px',
          }}
          transition={{
            duration: 1,
            ease: 'easeOut',
          }}
        >
          <TitleImg
            animate={{
              opacity: curState === 0 ? 1 : 0,
            }}
            transition={{
              duration: 1,
              ease: 'easeOut',
            }}
          />
          <Start
            animate={{
              opacity: curState === 0 ? [1, 0, 1] : 0,
              cursor: PageLock === 1 ? 'default' : 'pointer',
            }}
            transition={{
              duration: 3,
              ease: 'easeOut',
              repeat: curState === 0 ? Infinity : undefined,
            }}
            onClick={NextPage}
          >
            잭다니엘 알아보기
          </Start>
          <Exit
            animate={{
              opacity: curState === 0 ? 1 : 0,
            }}
            transition={{
              duration: 1,
              ease: 'easeOut',
            }}
          >
            Exit
          </Exit>
        </Wrapper>
      </BackgroundImg>
    </LayoutContainer>
  );
};

const BackgroundImg = styled(motion.div)`
  background: url('${process.env.PUBLIC_URL}/yun/img/background.jpg');
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
`;
const Wrapper = styled(motion.div)`
  margin-right: 80px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

const TitleImg = styled(motion.div)`
  background: url('${process.env.PUBLIC_URL}/yun/img/logo.png');
  width: 320px;
  height: 250px;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 50px;
`;

const Start = styled(motion.div)`
  color: white;
  font-size: 50px;
  cursor: pointer;
`;

const Exit = styled(motion.div)`
  color: white;
  font-size: 40px;
  margin-bottom: 50px;
  cursor: pointer;
`;
