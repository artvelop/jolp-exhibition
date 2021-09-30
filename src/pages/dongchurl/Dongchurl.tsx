import React from 'react';
import styled from '@emotion/styled';
import { Intro, LayoutContainer, MainCard, TyphoGraphy } from './components';

const Dongchurl = () => {
  return (
    <LayoutContainer>
      <Intro />
    </LayoutContainer>
  );
};

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
`;

const MainCardWrapper = styled.div`
  padding: 120px;
  display: flex;
`;

export default Dongchurl;
