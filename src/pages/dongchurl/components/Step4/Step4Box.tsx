import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const options = { threshold: 0.2 };

type CircleStyleProps = {
  color: string;
};

type BoxStyleProps = {
  top: boolean;
};

export const Step4Box = () => {
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
      <Content>
        <Wrap
          animate={{
            opacity: visible ? [0, 1] : [1, 0],
          }}>
          <WindowTop>
            <CircleButton color="#f25330" />
            <CircleButton color="#FEBB34" />
            <CircleButton color="#5CBA73" />
          </WindowTop>
          <Box top={true}>
            <div
              style={{
                fontSize: 16,
                display: 'flex',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <div style={{ color: '#3f3f3f' }}>HELLO</div>
              <ul style={{ marginTop: 24 }}>
                <li style={{ color: '#333' }}>WOW1</li>
                <li style={{ color: '#333' }}>WOW2</li>
                <li style={{ color: '#333' }}>WOW3</li>
                <li style={{ color: '#333' }}>WOW4</li>
              </ul>
            </div>
          </Box>
        </Wrap>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Content = styled.div`
  margin-top: 80px;
  position: relative;
  width: 1178px;
  display: flex;
`;

const Wrap = styled(motion.div)`
  width: 640px;
  margin-left: auto;
  margin-right: auto;
`;

const WindowTop = styled.div`
  display: flex;
  background-color: #3f3f3f;
  height: 12px;
  padding-left: 8px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.5);
`;

const CircleButton = styled.div<CircleStyleProps>`
  cursor: pointer;
  background-color: ${(props) => props.color};
  width: 12px;
  height: 12px;
  border-radius: 50px;
  margin-right: 8px;
  &:hover {
    opacity: 0.5;
  }
`;

const Box = styled.div<BoxStyleProps>`
  border-radius: 4px;
  ${(props) =>
    props.top && 'border-top-left-radius: 0px; border-top-right-radius: 0px;'}
  background-color: #fff;
  box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.5);
  min-height: 360px;
`;
