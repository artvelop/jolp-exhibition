import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { TyphoGraphy } from './TyphoGraphy';

const options = { threshold: 0.2 };

type Props = {
  title: string;
};

export const IntroduceCard: React.FC<Props> = ({ children, title }) => {
  const [visible, setVisible] = useState(false);
  const target = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(([enteries], observer) => {
      if (enteries.isIntersecting) {
        setVisible(true);
      } else if (enteries.intersectionRatio < 0.2) {
        setVisible(false);
      }
    }, options);

    if (target.current !== null) {
      io.observe(target.current);
    }
  }, []);

  return (
    <Wrapper ref={target}>
      <Title
        animate={{
          scale: [0, 1],
          opacity: visible ? [0, 1] : [1, 0],
        }}>
        <TyphoGraphy type="Title" textAlign="center" color="#000">
          {title}
        </TyphoGraphy>
      </Title>
      <Content
        animate={{
          scale: [0, 1],
          opacity: visible ? [0, 1] : [1, 0],
        }}
        transition={{ delay: visible ? 0.5 : 0 }}>
        <TyphoGraphy type="h1" textAlign="center" color="#000" fontHeight="1.5">
          {children}
        </TyphoGraphy>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 30vh;
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled(motion.div)`
  opacity: 1;
  width: 100%;
`;

const Content = styled(motion.div)`
  margin-top: 80px;
  margin-bottom: 80px;
  opacity: 1;
  width: 100%;
`;
