import React from 'react';
import styled from '@emotion/styled';
import { IntroduceCard } from '../IntroduceCard';
import { Step1Box } from './Step1Box';

export const Step1 = () => {
  return (
    <Wrapper>
      <IntroduceCard title="DomTree생성">
        렌더링 엔진이 일을 시작하게 되면
        <br />
        받아온 HTML문서를 파싱해서 DOMTREE를 구축합니다
      </IntroduceCard>
      <Step1Box />
      <Gap />
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const Gap = styled.div`
  height: 200px;
`;
