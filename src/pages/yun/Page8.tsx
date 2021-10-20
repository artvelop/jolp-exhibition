import React, { useState, useEffect } from 'react';
import { LayoutContainer } from './components/index';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { ArrowNext } from './components';

type Props = { handlePage: () => void };
export const Page8: React.FC<Props> = ({ handlePage }) => {
  const [curState, setCurState] = useState(0);
  const [nextButton, setNextButton] = useState(0);

  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }

  useEffect(() => {
    const wait2 = async () => {
      await timeout(3000);
      setNextButton(1);
    };
    wait2();
  }, []);

  const NextPage = async () => {
    await timeout(200);
    setCurState(1);
    setNextButton(0);
    await timeout(1000);
    handlePage();
  };

  return (
    <LayoutContainer>
      <Background
        animate={{
          opacity: curState === 0 ? [0, 1] : 0,
        }}
        transition={{
          duration: 1,
          ease: 'easeOut',
          delay: curState === 0 ? 0 : 0,
        }}
      >
        <Section>
          <JackImgWrapper
            animate={{
              opacity: curState === 0 ? [0, 1] : 1,
              y: '80vh',
            }}
            transition={{
              duration: 1,
              ease: 'easeOut',
              delay: curState === 0 ? 1 : 0,
            }}
          >
            <JackImg
              animate={{
                rotate: 180,
                opacity: 1,
              }}
              transition={{
                duration: 0.1,
                ease: 'easeOut',
                delay: curState === 0 ? 0 : 0,
              }}
            />
          </JackImgWrapper>
          <TitleSection
            animate={{
              opacity: curState === 0 ? [0, 1] : 1,
              rotate: 360,
            }}
            transition={{
              duration: 1,
              ease: 'easeOut',
              delay: curState === 0 ? 2 : 0,
            }}
          >
            <MainTitle
              animate={{
                opacity: curState === 0 ? [0, 1] : 1,
                scale: 2,
              }}
              transition={{
                duration: 1,
                ease: 'easeOut',
                delay: curState === 0 ? 2 : 0,
              }}
            >
              잭콕
            </MainTitle>
            <SubTitle
              animate={{
                opacity: curState === 0 ? [0, 1] : 1,
                scale: 2,
              }}
              transition={{
                duration: 1,
                ease: 'easeOut',
                delay: curState === 0 ? 2 : 0,
              }}
            >
              콜라의 만남, 색다른 맛
            </SubTitle>
          </TitleSection>

          <CockImgWrapper
            animate={{
              opacity: curState === 0 ? [0, 1] : 1,
              y: '-70vh',
            }}
            transition={{
              duration: 1,
              ease: 'easeOut',
              delay: curState === 0 ? 1 : 0,
            }}
          >
            <CockImg
              animate={{
                opacity: curState === 0 ? [0, 1] : 1,
              }}
              transition={{
                duration: 1,
                ease: 'easeOut',
                delay: curState === 0 ? 1 : 0,
              }}
            />
          </CockImgWrapper>
        </Section>
        <ArrowNext NextPage={NextPage} Color={'white'} Display={nextButton} />

        <Circle
          animate={{
            opacity: curState === 0 ? [0, 1] : 1,
            scale: 2,
          }}
          transition={{
            duration: 1,
            ease: 'easeOut',
            delay: curState === 0 ? 2 : 0,
          }}
        />
        <LineWrapper>
          <Line
            animate={{
              opacity: curState === 0 ? [0, 1] : 1,
            }}
            transition={{
              duration: 1,
              ease: 'easeOut',
              delay: curState === 0 ? 2 : 0,
            }}
          />
        </LineWrapper>
      </Background>
    </LayoutContainer>
  );
};

const Background = styled(motion.div)`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: 0;
  background-color: black;
  overflow: hidden;
`;

const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  /* align-items: center; */
`;

const JackImgWrapper = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;

  bottom: 110vh;
`;
const JackImg = styled(motion.div)`
  position: relative;
  background: url('${process.env.PUBLIC_URL}/yun/img/jack.png');
  object-fit: cover;
  width: 315px;
  height: 870px;
  background-repeat: no-repeat;
  background-size: cover;

  opacity: 0;
`;

const TitleSection = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  width: 40%;
`;

const MainTitle = styled(motion.div)`
  font-size: 30px;
`;
const SubTitle = styled(motion.div)`
  font-size: 20px;
`;

const Circle = styled(motion.div)`
  position: absolute;
  width: 250px;
  height: 250px;
  border: 3px solid white;
  border-radius: 100%;
`;
const CockImgWrapper = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;

  bottom: -100vh;
`;
const CockImg = styled(motion.div)`
  position: relative;
  background: url('${process.env.PUBLIC_URL}/yun/img/coca.png');
  object-fit: cover;
  width: 315px;
  height: 870px;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0;
`;

const LineWrapper = styled(motion.div)`
  position: absolute;
  width: 200px;
  height: 200px;
  overflow: none;
`;
const Line = styled(motion.hr)`
  position: absolute;
  width: 200px;
  border: 2px solid white;
  border-radius: 50px;
  background-color: white;
  transform: translateY(50px) rotate(45deg);
  margin: 0;
  opacity: 0;
`;
