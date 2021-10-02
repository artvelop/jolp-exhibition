import styled from '@emotion/styled';
import React from 'react';

export const LayoutContainer: React.FC = ({ children }) => {
  return (
    <RootWrapper>
      <ContentWrapper>{children}</ContentWrapper>
    </RootWrapper>
  );
};

const RootWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const ContentWrapper = styled.div`
  display: flex;
  z-index: 1;
  min-width: 100vw;
  min-height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  overflow: auto;
  flex-direction: column;
`;
