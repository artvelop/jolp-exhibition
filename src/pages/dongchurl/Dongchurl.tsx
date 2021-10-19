import React from 'react';
import { Intro, LayoutContainer, StepLayout } from './components';
import { Step1 } from './components/Step1';
import { Step2 } from './components/Step2';

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
    </LayoutContainer>
  );
};

export default Dongchurl;
