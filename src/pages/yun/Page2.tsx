import React from 'react';
import { LayoutContainer } from './components/index';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { ArrowNext } from './components';

type Props = { NextPageHandle: () => void };
export const Page2: React.FC<Props> = ({ NextPageHandle }) => {
  return (
    <LayoutContainer>
      <Background>
        <LeftTitle>테네시위스키의 자존심</LeftTitle>
        <JackImg />
        <RightTitle>잭 다니엘 Old No.7</RightTitle>
        <ArrowNext NextPageHandle={NextPageHandle} />
      </Background>
    </LayoutContainer>
  );
};

const Background = styled.div`
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
