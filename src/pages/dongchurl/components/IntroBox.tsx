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
        {content}
      </TyphoGraphy>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 0;
  background-color: #fff;
  width: 80rem;
  height: 240px;
  border: 4px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;
