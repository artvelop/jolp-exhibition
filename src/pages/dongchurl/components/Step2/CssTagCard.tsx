import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { TyphoGraphy } from '../TyphoGraphy';

type Props = {
  title: string;
  left?: string;
  top?: string;
  bottom?: string;
  right?: string;
  center?: boolean;
  visible: boolean;
  visibleDelay: number;
};

type StyleWrapperProps = {
  left?: string | boolean;
  top?: string | boolean;
  bottom?: string | boolean;
  right?: string | boolean;
  center?: boolean;
};

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const CssTagCard: React.FC<Props> = ({
  title,
  left,
  top,
  right,
  bottom,
  center,
  visible,
  visibleDelay,
}) => {
  return (
    <Wrapper
      left={left || false}
      top={top || false}
      right={right || false}
      bottom={bottom || false}
      center={center || false}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}>
      <Box
        animate={{
          opacity: visible ? [0, 1] : [1, 0],
        }}
        variants={variants}
        transition={{ delay: visible ? visibleDelay : 0 }}>
        <TyphoGraphy type="h3" color="#3f3f3f">
          {title.split('<br />').map((text, index) => (
            <span key={index.toString()}>
              {text} <br />
            </span>
          ))}
        </TyphoGraphy>
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)<StyleWrapperProps>`
  position: absolute;
  ${(props) => props.left && `left: ${props.left};`}
  ${(props) => props.right && `right: ${props.right};`}
  ${(props) =>
    props.top && `top: ${props.top};`}
  ${(props) =>
    props.bottom && `bottom: ${props.bottom};`}
  ${(props) =>
    props.center && `transform: translate(-50%, -50%);`}
`;

const Box = styled(motion.div)`
  cursor: pointer;
  /* background: #fff; */
  /* border: 3px solid #000; */
  /* padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 24px;
  padding-right: 24px; */
`;
