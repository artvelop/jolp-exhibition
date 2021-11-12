import React, { useState, useEffect } from 'react';
import { LayoutContainer } from './components/index';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { ArrowNext } from './components';
import { RainDrop } from './components/page5';

type Props = { handlePage: () => void };
export const Page5: React.FC<Props> = ({ handlePage }) => {
  const [curState, setCurState] = useState(0);
  const [nextButton, setNextButton] = useState(0);
  const xArray = [5, 20, 45, 60, 90];
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
        <Filter
          animate={{
            opacity: curState === 0 ? [0, 1] : 0,
          }}
          transition={{
            duration: 1,
            ease: 'easeOut',
            delay: curState === 0 ? 1 : 0,
          }}
        />
        <RainDropWrapper
          animate={{
            opacity: curState === 0 ? [0, 1] : 0,
          }}
          transition={{
            duration: 1,
            ease: 'easeOut',
            delay: curState === 0 ? 1.5 : 0,
          }}
        >
          {xArray.map((item, index) => (
            <RainDrop key={index} xPosition={item} />
          ))}
        </RainDropWrapper>
        <TitleSection
          animate={{
            opacity: curState === 0 ? [0, 1] : 0,
          }}
          transition={{
            duration: 1,
            ease: 'easeOut',
            delay: curState === 0 ? 1.5 : 0,
          }}
        >
          <Title>양조, 증류, 그리고....</Title>
          <SubTitle>
            사탕단풍 숯이 들어간 3m 통에 한방울씩 증류주를 떨어뜨려 여과
            {/* 그로 인해 증류주의 거친 맛을 부드럽게 만듬 */}
          </SubTitle>
        </TitleSection>

        <ArrowNext NextPage={NextPage} Color={'white'} Display={nextButton} />
      </Background>
    </LayoutContainer>
  );
};

const Background = styled(motion.div)`
  background: url('${process.env.PUBLIC_URL}/yun/img/pipe.jpg');
  background-repeat: no-repeat;
  background-size: cover;

  overflow: hidden;
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: 0;
`;
const Filter = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
  filter: opacity(25%);
`;

const RainDropWrapper = styled(motion.div)`
  width: 100%;
  height: 50%;
  position: relative;
  filter: drop-shadow(16px 16px 10px black);
`;

const TitleSection = styled(motion.div)`
  width: 90%;
  height: 50%;
  color: white;
  filter: drop-shadow(16px 16px 10px black);

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

const Title = styled(motion.div)`
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 50px;
`;
const SubTitle = styled(motion.div)`
  font-size: 40px;
`;
