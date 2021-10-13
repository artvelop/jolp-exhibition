import React, { useState, useEffect } from 'react';
import { LayoutContainer } from './components/index';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { ArrowNext } from './components';

type Props = { handlePage: () => void };
export const Page4: React.FC<Props> = ({ handlePage }) => {
  const [curState, setCurState] = useState(0);
  const [nextButton, setNextButton] = useState(0);

  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }

  useEffect(() => {
    const wait2 = async () => {
      await timeout(4500);
      setNextButton(1);
    };
    wait2();
  }, []);

  const NextPage = async () => {
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
        <ImgSection>
          <JackImg
            animate={{
              opacity: curState === 0 ? [0, 1] : 1,
              y: '-160px',
            }}
            transition={{
              duration: 1,
              ease: 'easeOut',
              delay: curState === 0 ? 1 : 0,
            }}
          />
          <BarWrapper>
            <WidthBar
              animate={{
                opacity: curState === 0 ? [0, 1] : 0,
                width: '180px',
              }}
              transition={{
                duration: 1,
                ease: 'easeOut',
                delay: curState === 0 ? 2 : 0,
              }}
            />
            <HeightBar
              animate={{
                display: 'flex',
                opacity: curState === 0 ? [0, 1] : 0,
                height: '80px',
              }}
              transition={{
                duration: 1,
                ease: 'easeOut',
                delay: curState === 0 ? 3 : 0,
              }}
            />
            <ImgText
              animate={{
                display: 'flex',
                opacity: curState === 0 ? [0, 1] : 0,
                marginTop: '20px',
                marginBottom: '20px',
              }}
              transition={{
                duration: 1,
                ease: 'easeOut',
                delay: curState === 0 ? 3 : 0,
              }}
            >
              맥아, 밀
            </ImgText>

            <MiddleWidthBar
              animate={{
                display: 'flex',
                opacity: curState === 0 ? [0, 1] : 0,
                width: '50px',
              }}
              transition={{
                duration: 1,
                ease: 'easeOut',
                delay: curState === 0 ? 3 : 0,
              }}
            />
            <MiddleHeightBar
              animate={{
                display: 'flex',
                opacity: curState === 0 ? [0, 1] : 0,
                height: '180px',
              }}
              transition={{
                duration: 1,
                ease: 'easeOut',
                delay: curState === 0 ? 3 : 0,
              }}
            />
            <ImgText
              animate={{
                display: 'flex',
                opacity: curState === 0 ? [0, 1] : 0,
                marginTop: '20px',
                marginBottom: '20px',
              }}
              transition={{
                duration: 1,
                ease: 'easeOut',
                delay: curState === 0 ? 3 : 0,
              }}
            >
              옥수수
            </ImgText>
            <HeightBar
              animate={{
                display: 'flex',
                opacity: curState === 0 ? [0, 1] : 0,
                height: '80px',
              }}
              transition={{
                duration: 1,
                ease: 'easeOut',
                delay: curState === 0 ? 3 : 0,
              }}
            />
            <WidthBar
              animate={{
                opacity: curState === 0 ? [0, 1] : 0,
                width: '180px',
              }}
              transition={{
                duration: 1,
                ease: 'easeOut',
                delay: curState === 0 ? 2 : 0,
              }}
            />
          </BarWrapper>
        </ImgSection>
        <TitleSection
          animate={{ opacity: curState === 0 ? [0, 1] : 0, y: '-50px ' }}
          transition={{
            duration: 1,
            ease: 'easeOut',
            delay: curState === 0 ? 4 : 0,
          }}
        >
          <Title>자신있는 완벽한 비율</Title>
          <SubTitle>옥수수 51% 맥아, 밀...</SubTitle>
        </TitleSection>

        <ArrowNext NextPage={NextPage} Color={'black'} Display={nextButton} />
      </Background>
    </LayoutContainer>
  );
};

const Background = styled(motion.div)`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: rgba(253, 224, 223, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
`;
const ImgSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

const JackImg = styled(motion.div)`
  background: url('/yun/img/jack.png');
  object-fit: cover;
  width: 315px;
  height: 870px;
  background-repeat: no-repeat;
  background-size: cover;

  filter: drop-shadow(16px 16px 10px);
  opacity: 0;
`;
const BarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
`;
const WidthBar = styled(motion.hr)`
  width: 0px;
  border: 2px solid black;
  opacity: 0;
  background-color: black;
  margin: 0;
`;
const HeightBar = styled(motion.hr)`
  display: none;
  margin: 0;
  width: 1px;
  height: 0;
  border: 1px solid black;
  opacity: 0;
  background-color: black;
  margin-right: 50px;
`;
const MiddleWidthBar = styled(motion.hr)`
  display: none;
  position: absolute;
  margin: 0;
  width: 0px;
  border: 1px solid black;
  opacity: 0;
  background-color: black;
  margin-right: 25px;
  transform: rotate(0deg);
`;
const MiddleHeightBar = styled(motion.hr)`
  display: none;
  margin: 0;
  width: 1px;
  height: 0px;
  border: 1px solid black;
  opacity: 0;
  background-color: black;
  margin-right: 50px;
`;

const ImgText = styled(motion.div)`
  display: none;
  font-size: 40px;
  font-weight: bold;

  opacity: 0;
`;
///////////// title //////////////
const TitleSection = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  opacity: 0;
`;

const Title = styled(motion.div)`
  font-size: 50px;
  font-weight: bold;
`;
const SubTitle = styled(motion.div)`
  margin-top: 30px;
  font-size: 40px;
`;
