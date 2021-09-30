import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { IntroBox } from './IntroBox';
import { TyphoGraphy } from './TyphoGraphy';

export const Intro = () => {
  const [hoverBox, setHoverBox] = useState<boolean>(false);

  return (
    <Wrapper>
      <LayoutWrapper>
        <TitleWrapper>
          <Title>
            <TyphoGraphy type="Title" color="#000" fontWeight="bold">
              BROSWER
            </TyphoGraphy>
            <TyphoGraphy type="Title" color="#000" fontWeight="bold">
              RENDERING
            </TyphoGraphy>
            <TyphoGraphy type="Title" color="#000" fontWeight="bold">
              PROCESS
            </TyphoGraphy>
          </Title>
          <TyphoGraphy type="h3" color="#000">
            create by artvelop
          </TyphoGraphy>
        </TitleWrapper>
        <BoxWrapper
          onHoverStart={(e) => setHoverBox(true)}
          onHoverEnd={(e) => setHoverBox(false)}>
          <IntroBox
            isHover={hoverBox}
            hoverRotate={2}
            hoverX={0}
            hoverY={200}
            rotate={-1}
            zIndex={1}
            content="Repaint"
          />
          <IntroBox
            hoverRotate={-2}
            hoverX={0}
            hoverY={-0}
            isHover={hoverBox}
            rotate={1}
            zIndex={2}
            content="Reflow"
          />
          <IntroBox
            hoverRotate={3}
            hoverX={0}
            hoverY={-200}
            isHover={hoverBox}
            rotate={-0.5}
            zIndex={3}
            content="Create RenderTree"
          />
          <IntroBox
            hoverRotate={-4}
            hoverX={0}
            hoverY={-400}
            isHover={hoverBox}
            rotate={0.5}
            zIndex={4}
            content="Create CssTree"
          />
          <IntroBox
            hoverRotate={4}
            hoverX={0}
            hoverY={-600}
            isHover={hoverBox}
            rotate={0}
            zIndex={5}
            content="Create DomTree"
          />
        </BoxWrapper>
      </LayoutWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 100vw;
  height: 100vh;
  padding: 40px;
  display: flex;
`;

const LayoutWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 24px;
  border: 24px solid #000;
`;

const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Title = styled.div`
  flex-direction: column;
  display: flex;
`;

const BoxWrapper = styled(motion.div)`
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 150px;
  position: relative;
  height: 240px;
  width: 80rem;
`;
