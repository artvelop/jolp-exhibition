import styled from '@emotion/styled';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

type Page = {
  header: string;
  subHeader: string;
  link: string;
};

const CHAPTER1: number = 0;
const CHAPTER2: number = 1;
const CHAPTER3: number = 2;
const CHAPTER4: number = 3;

const pageList: Array<Page> = [
  {
    header: 'BROSWER\nRENDERING PROCESS',
    subHeader:
      '브라우저가 렌더링 되는 5가지 과정을\n보기 쉽도록 interactive한 효과를 넣어\n소개한 작품입니다.',
    link: '/dongchurl',
  },
  {
    header: 'Jack Daniel’s\nOld No.7',
    subHeader:
      '잭다니엘의 주력 상품인 Old No.7의 매력, 특징에 대해 설명한 작품\n당신과의 만남을 기다리고 있습니다\nWe Love Jack Daniel',
    link: '/yun',
  },
  {
    header: 'Introducing\nImpressive books',
    subHeader:
      '제가 읽었던 책 중에서  감명깊었던 책을 5개를 선정하여 소개하고 그 내용 중에서 중요하다고 생각한\n내용을 적었고 그중에서도 더 와닿는 문장을 강조한 작품입니다.\n소개한 작품입니다.',
    link: '/sanghun/Menu',
  },
  {
    header: 'Fashion brand\nExhibition',
    subHeader:
      '평소 패션에 관심없던 분들도\n여러 사진들과 함께 편하고 친근하게 다가갈 수 있도록 만든 작품입니다.\n당신도 오늘부터 패션피플!',
    link: '/kojaem/HOME',
  },
];

const Home = () => {
  const [pageIndex, setPageIndex] = useState<number>(CHAPTER1);
  const history = useHistory();

  return (
    <Wrapper>
      <LeftMenu>
        <Section onClick={() => setPageIndex(CHAPTER1)}>
          <h1>Chapter1</h1>
          <SectionDivider />
        </Section>
        <Section onClick={() => setPageIndex(CHAPTER2)}>
          <h1>Chapter2</h1>
          <SectionDivider />
        </Section>
        <Section onClick={() => setPageIndex(CHAPTER3)}>
          <h1>Chapter3</h1>
          <SectionDivider />
        </Section>
        <Section onClick={() => setPageIndex(CHAPTER4)}>
          <h1>Chapter4</h1>
          <SectionDivider />
        </Section>
      </LeftMenu>
      <Content>
        <ContentHeader>
          {pageList[pageIndex].header.split('\n').map((text, index) => (
            <span key={index.toString()}>
              {text}
              <br />
            </span>
          ))}
        </ContentHeader>
        <ContentSubHeader>
          {pageList[pageIndex].subHeader.split('\n').map((text, index) => (
            <span key={index.toString()}>
              {text}
              <br />
            </span>
          ))}
        </ContentSubHeader>
        <GoButton onClick={() => history.push(pageList[pageIndex].link)}>
          <h2>GO TO PAGE</h2>
        </GoButton>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const LeftMenu = styled.div`
  background-color: #312450;
  width: 20vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

const Content = styled.div`
  background-color: #5e42a6;
  width: 80vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 8em;
  color: #fff;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: #ffffff;
  cursor: pointer;
  padding-right: 40px;
  margin-bottom: 40px;

  &:hover {
    opacity: 0.8;
  }
`;

const SectionDivider = styled.div`
  height: 1px;
  background-color: #fff;
  opacity: 0.2;
  width: 15vw;
`;

const ContentHeader = styled.h1`
  font-size: 64px;
`;

const ContentSubHeader = styled.h1`
  opacity: 0.7;
  font-size: 32px;
`;

const GoButton = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-right: auto;
  padding-left: 24px;
  padding-right: 24px;
  border-radius: 72px;
  color: rgba(255, 255, 255, 0.9);
  margin-top: 2em;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export default Home;
