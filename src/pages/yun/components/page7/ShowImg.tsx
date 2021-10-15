import React from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

type Props = { name: number; imgX: number; imgY: number; imgW: number; imgH: number };
export const ShowImg: React.FC<Props> = ({ name, imgX, imgY, imgW, imgH }) => {
  return (
    <Wrapper
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
        ease: 'easeOut',
        delay: 0.5,
      }}
      whileHover={{ scale: 1.3 }}
      name={name}
      imgX={imgX}
      imgY={imgY}
      imgW={imgW}
      imgH={imgH}
    />
  );
};

type WrapperProps = { name: number; imgX: number; imgY: number; imgW: number; imgH: number };
const Wrapper = styled(motion.div)<WrapperProps>`
  position: absolute;
  background: url('${process.env.PUBLIC_URL}/yun/img/rock/${({ name }) => name.toString()}.jpg');
  width: ${({ imgW }) => imgW.toString() + 'px'};
  height: ${({ imgH }) => imgH.toString() + 'px'};
  top: ${({ imgY }) => imgY.toString() + '%'};
  left: ${({ imgX }) => imgX.toString() + '%'};
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 5;
`;
