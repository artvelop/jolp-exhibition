import React from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

type Props = { name: number; imgX: number; imgY: number; imgW: number; imgH: number };
export const ShowImg: React.FC<Props> = ({ name, imgX, imgY, imgW, imgH }) => {
  return <Wrapper name={name} imgX={imgX} imgY={imgY} imgW={imgW} imgH={imgH}></Wrapper>;
};

type WrapperProps = { name: number; imgX: number; imgY: number; imgW: number; imgH: number };
const Wrapper = styled(motion.div)<WrapperProps>`
  position: absolute;
  background: url('/yun/img/rock/${({ name }) => name.toString()}.jpg');
  width: ${({ imgW }) => imgW.toString() + 'px'};
  height: ${({ imgH }) => imgH.toString() + 'px'};
  top: ${({ imgY }) => imgY.toString() + '%'};
  left: ${({ imgX }) => imgX.toString() + '%'};
  background-repeat: no-repeat;
  background-size: cover;
`;
