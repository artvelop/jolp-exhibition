import React from 'react';
import styled from '@emotion/styled';
import { IntroduceCard } from '../IntroduceCard';
import { Step2Box } from './Step2Box';

export const Step2 = () => {
  return (
    <Wrapper>
      <IntroduceCard title="CssomTree생성">
        DomTree가 구축되고 나면
        <br />
        CssomTree가 구축됩니다
      </IntroduceCard>
      <Step2Box />
      <Gap />
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const Gap = styled.div`
  height: 200px;
`;
