import React from 'react';
import { LayoutContainer } from './components/index';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

export const Page2: React.FC = () => {
  return (
    <LayoutContainer>
      <Background>123141231</Background>
    </LayoutContainer>
  );
};

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(100, 40, 39, 1);
`;
