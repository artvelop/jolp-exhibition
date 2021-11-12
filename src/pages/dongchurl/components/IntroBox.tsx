import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { TyphoGraphy } from './TyphoGraphy';

type Props = {
  content: string;
  zIndex: number;
  rotate: number;
  isHover: boolean;
  hoverRotate: number;
  hoverX: number;
  hoverY: number;
};

export const IntroBox: React.FC<Props> = ({
  content,
  zIndex,
  rotate,
  isHover,
  hoverRotate,
  hoverX,
  hoverY,
}) => {
  const [boxHover, setBoxHover] = useState<boolean>(false);

  return (
    <Wrapper
      style={{
        zIndex: zIndex,
        rotate: rotate,
        backgroundColor: boxHover ? '#000' : '#fff',
      }}
      animate={{
        x: isHover ? hoverX : 0,
        y: isHover ? hoverY : 0,
        rotate: isHover ? hoverRotate : rotate,
      }}
      onHoverStart={(e) => setBoxHover(true)}
      onHoverEnd={(e) => setBoxHover(false)}>
      <TyphoGraphy type="Title" color={boxHover ? '#fff' : '#000'}>
        <ResponsiveText>{content}</ResponsiveText>
      </TyphoGraphy>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  position: absolute;
  left: 0;
  right: 0;
  background-color: #fff;
  /* width: 100%; */
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  /* height: 15rem; */

  /* width: 1272px; */
  height: 240px;
  border: 4px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1200px) and (max-width: 1400px) {
    top: 32px;
    width: 70%;
    height: 200px;
  }
`;

const ResponsiveText = styled.div`
  @media (min-width: 1200px) and (max-width: 1400px) {
    font-size: 80px;
  }
`;
