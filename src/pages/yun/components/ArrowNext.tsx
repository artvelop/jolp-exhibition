import React from 'react';
import { MdNavigateNext } from 'react-icons/md';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

type Props = { NextPage: () => void; Color: string };
export const ArrowNext: React.FC<Props> = ({ NextPage, Color }) => {
  return (
    <Wrapper
      animate={{
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 1,
        ease: 'linear',
        repeat: Infinity,
        delay: 4,
      }}
      onClick={NextPage}
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
