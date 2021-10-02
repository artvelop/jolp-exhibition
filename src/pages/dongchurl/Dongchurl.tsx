import React from 'react';
import styled from '@emotion/styled';
import { Intro, LayoutContainer, Step1, StepLayout } from './components';

const Dongchurl = () => {
  return (
    <LayoutContainer>
      <Intro />
      <StepLayout>
        <Step1 />
      </StepLayout>
      <StepLayout>
        <Step1 />
      </StepLayout>
      <StepLayout>
        <Step1 />
      </StepLayout>
    </LayoutContainer>
  );
};

export default Dongchurl;
