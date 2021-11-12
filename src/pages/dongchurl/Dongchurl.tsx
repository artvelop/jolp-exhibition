import React from 'react';
import styled from '@emotion/styled';
import { Intro, LayoutContainer, StepLayout } from './components';
import { Step1 } from './components/Step1';
import { Step2 } from './components/Step2';
import { Step3 } from './components/Step3';
import { Step4 } from './components/Step4';
import { Step5 } from './components/Step5';

const Dongchurl = () => {
  return (
    <LayoutContainer>
      <Intro />
      <StepLayout>
        <Step1 />
      </StepLayout>
      <StepLayout>
        <Step2 />
      </StepLayout>
      <StepLayout>
        <Step3 />
      </StepLayout>
      <StepLayout>
        <Step4 />
      </StepLayout>
      <StepLayout>
        <Step5 />
      </StepLayout>
      <End />
    </LayoutContainer>
  );
};

const End = styled.div`
  margin-top: 50vh;
`;

export default Dongchurl;
