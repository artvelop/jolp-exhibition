import React from 'react';
import { MdNavigateNext } from 'react-icons/md';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

type Props = { NextPage: () => void; Color: string; Display: number };
export const ArrowNext: React.FC<Props> = ({ NextPage, Color, Display }) => {
  return (
    <Wrapper
      animate={{
        opacity: Display === 1 ? [0, 1, 0] : 0,
        display: Display === 1 ? 'flex' : 'none',
      }}
      transition={{
        duration: 1,
        ease: 'linear',
        repeat: Infinity,
        delay: 0,
      }}
      // onClick={NextPage}
      onTap={NextPage}
    >
      <MdNavigateNext style={ButtonStyle} color={Color} />
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

const ButtonStyle = { fontSize: '70px', cursor: 'pointer', transform: ' rotate(90deg)' };
