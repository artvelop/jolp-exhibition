import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

const options = { threshold: 1.0 };

export const ShowCard: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const target = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(([enteries], observer) => {
      setVisible(enteries.isIntersecting);
    }, options);

    if (target.current !== null) {
      io.observe(target.current);
    }
  }, []);

  return (
    <Wrapper ref={target}>
      <TextMotion
        animate={{
          scale: [0, 1],
          rotateY: [0, 360, 0],
          opacity: visible ? [0, 1] : [1, 0],
        }}>
        범인
      </TextMotion>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 30vh;
  margin-left: auto;
  margin-right: auto;
`;

const TextMotion = styled(motion.div)`
  opacity: 1;
  font-size: 400px;
  font-weight: bold;
  color: #000;
`;
