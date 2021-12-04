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

export const Step5Box = () => {
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
            <Body
              animate={{
                backgroundColor: visible
                  ? ['#fff', '#1b2431']
                  : ['#fff', '#fff'],
              }}
              transition={{ delay: visible ? 1 : 0 }}>
              <H2
                animate={{
                  opacity: visible ? [0, 1] : [0, 0],
                  color: visible ? ['#000', '#ff7400'] : ['#000', '#000'],
                }}
                transition={{ delay: visible ? 2 : 0 }}>
                ARTVELOP
              </H2>
              <Ul
                animate={{
                  opacity: visible ? [0, 1] : [0, 0],
                  borderColor: visible ? ['#000', '#fff'] : ['#000', '#000'],
                }}>
                <Item>
                  <motion.path
                    d="M0 0 L0 100 L111 100 L111 0 L-1 0"
                    style={{ stroke: '#fff', x: -12, y: -10 }}
                    animate={{
                      opacity: visible ? 1 : 0,
                      pathLength: visible ? 1 : 0,
                      fill: 'transparent',
                    }}
                    transition={{
                      default: visible
                        ? { delay: 3, duration: 2, ease: 'easeInOut' }
                        : {},
                      fill: visible
                        ? { delay: 3, duration: 2, ease: [1, 0, 0.8, 1] }
                        : {},
                    }}
                  />
                </Item>
                <Li
                  animate={{
                    opacity: visible ? [0, 1] : [0, 0],
                    color: visible ? ['#000', '#fff'] : ['#000', '#000'],
                  }}
                  transition={{ delay: visible ? 5 : 0 }}>
                  ⸜(*ˊᗜˋ*)⸝
                </Li>
                <Li
                  animate={{
                    opacity: visible ? [0, 1] : [0, 0],
                    color: visible ? ['#000', '#fff'] : ['#000', '#000'],
                  }}
                  transition={{ delay: visible ? 5.5 : 0 }}>
                  BROSWER
                </Li>
                <Li
                  animate={{
                    opacity: visible ? [0, 1] : [0, 0],
                    color: visible ? ['#000', '#fff'] : ['#000', '#000'],
                  }}
                  transition={{ delay: visible ? 6 : 0 }}>
                  RENDERING
                </Li>
                <Li
                  animate={{
                    opacity: visible ? [0, 1] : [0, 0],
                    color: visible ? ['#000', '#fff'] : ['#000', '#000'],
                  }}
                  transition={{ delay: visible ? 6.5 : 0 }}>
                  PROCESS
                </Li>
              </Ul>
            </Body>
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

const Body = styled(motion.div)`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 360px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

const H2 = styled(motion.h2)`
  color: #ff7400;
`;

const Ul = styled(motion.ul)`
  /* border: 1px solid #fff; */
  padding: 12px;
  margin-left: 48px;
`;

const Li = styled(motion.div)`
  color: #fff;
`;

const Item = styled(motion.svg)`
  position: absolute;
  overflow: visible;
  stroke: #fff;
  stroke-width: 2;
`;
