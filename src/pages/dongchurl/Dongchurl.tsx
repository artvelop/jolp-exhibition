import React from 'react';
import { Intro, LayoutContainer, StepLayout } from './components';
import { Step1 } from './components/Step1';

const Dongchurl = () => {
  return (
    <LayoutContainer>
      <Intro />
      <StepLayout>
        <Step1 />
      </StepLayout>
    </LayoutContainer>
  );
};

export default Dongchurl;
