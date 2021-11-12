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

const WIDTH = 640;
const HEIGHT = 360;

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
            <BoxContent>
              <Body
                animate={{
                  opacity: visible ? [0, 1] : [1, 0],
                  width: visible ? [0, WIDTH - 36] : [0, 0],
                  height: visible ? [0, HEIGHT - 36] : [0, 0],
                }}
                transition={{ delay: visible ? 1 : 0 }}>
                <BodyTag
                  animate={{ opacity: visible ? [0, 1] : [1, 0] }}
                  transition={{ delay: visible ? 1.5 : 0 }}>
                  body
                </BodyTag>
              </Body>
              <H2Tag
                animate={{
                  opacity: visible ? [0, 1] : [1, 0],
                  x: visible ? [0, 180] : [1, 0],
                  y: visible ? [0, 150] : [1, 0],
                  width: visible ? [0, 0, 0, 80] : [1, 0],
                }}
                transition={{ delay: visible ? 2 : 0 }}>
                h2
              </H2Tag>
              <Ul
                animate={{
                  opacity: visible ? [0, 1] : [1, 0],
                  x: visible ? [0, 320] : [1, 0],
                  y: visible ? [0, 105] : [1, 0],
                  width: visible ? [0, 0, 80] : [1, 0],
                }}
                transition={{ delay: visible ? 2.5 : 0 }}>
                ul
                <UlTag
                  animate={{
                    opacity: visible ? [0, 1] : [1, 0],
                    height: visible ? [0, 0, 80] : [1, 0],
                  }}
                  transition={{ delay: visible ? 3 : 0 }}>
                  <Li
                    animate={{
                      opacity: visible ? [0, 1] : [1, 0],
                    }}
                    transition={{ delay: visible ? 3.5 : 0 }}>
                    li
                  </Li>
                  <Li
                    animate={{
                      opacity: visible ? [0, 1] : [1, 0],
                    }}
                    transition={{ delay: visible ? 4 : 0 }}>
                    li
                  </Li>
                  <Li
                    animate={{
                      opacity: visible ? [0, 1] : [1, 0],
                    }}
                    transition={{ delay: visible ? 4.5 : 0 }}>
                    li
                  </Li>
                  <Li
                    animate={{
                      opacity: visible ? [0, 1] : [1, 0],
                    }}
                    transition={{ delay: visible ? 5 : 0 }}>
                    li
                  </Li>
                </UlTag>
              </Ul>
            </BoxContent>
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
  width: ${WIDTH}px;
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
  min-height: ${HEIGHT}px;
  max-height: ${HEIGHT}px;
  height: ${HEIGHT}px;
`;

const BoxContent = styled.div`
  display: flex;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
`;

const Body = styled(motion.div)`
  position: absolute;
  border: 2px solid #000;
`;
const BodyTag = styled(motion.div)`
  padding: 8px;
`;

const H2Tag = styled(motion.div)`
  display: flex;
  border: 2px solid #000;
  padding: 8px;
  justify-content: center;
  align-items: center;
`;

const Ul = styled(motion.div)`
  position: absolute;
  display: flex;
  flex-direction: column;
  border: 2px solid #000;
  padding: 8px;
`;
const UlTag = styled(motion.div)`
  border: 2px solid #000;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Li = styled(motion.div)``;
