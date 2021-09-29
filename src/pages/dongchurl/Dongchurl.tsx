import React from 'react';
import styled from '@emotion/styled';
import { LayoutContainer, MainCard, TyphoGraphy } from './components';

const Dongchurl = () => {
  return (
    <LayoutContainer>
      <TitleWrapper>
        <TyphoGraphy type="Title" color="#000">
          브라우저 렌더링
        </TyphoGraphy>
      </TitleWrapper>
      <MainCardWrapper>
        <MainCard title="Dom트리 생성" />
        <MainCard title="Css트리 생성" />
        <MainCard title="RenderTree 생성" />
        <MainCard title="Reflow" />
      </MainCardWrapper>
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
