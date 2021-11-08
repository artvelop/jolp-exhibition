import React from 'react';
import styled from '@emotion/styled';
import { IntroduceCard } from '..';
import { Step4Box } from './Step4Box';

export const Step4 = () => {
  return (
    <Wrapper>
      <IntroduceCard title="Reflow">
        구축된 RenderTree를 통해서
        <br />
        화면의 레이아웃을 배치합니다
      </IntroduceCard>
      <Step4Box />
    </Wrapper>
  );
};

const Wrapper = styled.div``;
