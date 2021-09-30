import styled from '@emotion/styled';
import React from 'react';

export const LayoutContainer: React.FC = ({ children }) => {
  return (
    <RootWrapper>
      {/* <BackgroundVideo muted autoPlay loop>
        <source src="/filmbg.mp4" type="video/mp4" />
      </BackgroundVideo> */}
      <ContentWrapper>{children}</ContentWrapper>
    </RootWrapper>
  );
};

const RootWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const BackgroundVideo = styled.video`
  z-index: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: fill;
  overflow: hidden;
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
