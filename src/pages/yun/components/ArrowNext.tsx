import React from 'react';
import { MdNavigateNext } from 'react-icons/md';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

type ArrowLeftProps = { NextPageHandle: (e: any) => void };

export const ArrowNext: React.FC<ArrowLeftProps> = ({ NextPageHandle }) => {
  return (
    <Wrapper
      animate={{
        opacity: [1, 0, 1],
      }}
      transition={{
        duration: 1,
        ease: 'linear',
        repeat: Infinity,
      }}
    >
      <MdNavigateNext style={ButtonStyle} color="white" onClick={NextPageHandle} />
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 10px;
`;

const ButtonStyle = { fontSize: '70px', cursor: 'pointer', transform: ' rotate(90deg)', color: 'white' };
