import React from 'react';
import { LayoutContainer } from './components/index';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

type Props = { NextPageHandle: () => void };
export const Page1: React.FC<Props> = ({ NextPageHandle }) => {
  return (
    <LayoutContainer>
      <BackgroundImg>
        <Wrapper>
          <TitleImg></TitleImg>
          <Start
            animate={{
              opacity: [1, 0, 1],
            }}
            transition={{
              duration: 3,
              ease: 'linear',
              repeat: Infinity,
            }}
            onClick={NextPageHandle}
          >
            Touch To Start
          </Start>
          <Exit>Exit</Exit>
        </Wrapper>
      </BackgroundImg>
    </LayoutContainer>
  );
};

const BackgroundImg = styled(motion.div)`
  background: url('/yun/img/background.jpg');
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
`;
const Wrapper = styled.div`
  margin-right: 80px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

const TitleImg = styled(motion.div)`
  background: url('/yun/img/logo.png');
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
