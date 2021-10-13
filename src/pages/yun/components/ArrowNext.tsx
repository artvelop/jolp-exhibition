import React from 'react';
import { VscDebugBreakpointLog } from 'react-icons/vsc';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

type Props = { NextPage: () => void; Color: string; Display: number };
export const ArrowNext: React.FC<Props> = ({ NextPage, Color, Display }) => {
  return (
    <Wrapper
      animate={{
        opacity: Display === 1 ? 1 : 0,
        display: Display === 1 ? 'flex' : 'none',
      }}
      transition={{
        duration: 0,
        ease: 'linear',
        delay: 0,
      }}
      whileHover={{ scale: 1.3 }}
      whileTap={{ scale: 1 }}
      // onClick={NextPage}
      onTap={NextPage}
    >
      <VscDebugBreakpointLog style={ButtonStyle} color={Color} />
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 10px;
  opacity: 0;
`;

const ButtonStyle = { fontSize: '60px', cursor: 'pointer' };
