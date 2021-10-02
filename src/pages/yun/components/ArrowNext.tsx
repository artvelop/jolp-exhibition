import React from 'react';
import { GrFormNext } from 'react-icons/gr';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

type ArrowLeftProps = { NextPageHandle: (e: any) => void };

export const ArrowNext: React.FC<ArrowLeftProps> = ({ NextPageHandle }) => {
  return (
    <Wrapper>
      <GrFormNext style={ButtonStyle} onClick={NextPageHandle} />
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

const ButtonStyle = { fontSize: '70px', cursor: 'pointer', transform: ' rotate(90deg)', color: '#FFFFFF' };
