import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { TyphoGraphy } from '..';

type Props = {
  title: string;
  left?: string;
  top?: string;
  bottom?: string;
  right?: string;
  center?: boolean;
  visible: boolean;
  visibleDelay: number;
  color?: string;
  tagScale?: boolean;
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

export const TagCard: React.FC<Props> = ({
  title,
  left,
  top,
  right,
  bottom,
  center,
  visible,
  visibleDelay,
  color,
  tagScale = false,
}) => {
  const [colorChange, setColorChange] = useState<boolean>(false);

  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        setColorChange(true);
      }, 2000);
    } else {
      setColorChange(false);
    }

    return () => {
      setColorChange(false);
    };
  }, [visible]);

  return (
    <Wrapper
      left={left || false}
      top={top || false}
      right={right || false}
      bottom={bottom || false}
      center={center || false}>
      <Box
        animate={{
          opacity: visible ? [0, 1] : [1, 0],
          backgroundColor: colorChange ? color : '#fff',
          scale: tagScale && colorChange ? [1, 1.5, 1.2] : 1,
        }}
        variants={variants}
        transition={{ delay: visible ? visibleDelay : 0 }}>
        <TyphoGraphy type="h2" color="#000">
          {title}
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
  background: #fff;
  border: 3px solid #000;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 24px;
  padding-right: 24px;
`;
