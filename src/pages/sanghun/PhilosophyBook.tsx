import React from "react";
import styled from "@emotion/styled";
import { Layout, TopContent, BodyContent } from "./components";
import { philosophy } from "./dummy/books";

const PhilosophyBook: React.FC = () => {
  return (
    <Layout>
      <Wrapper>
        <TopBox>
          <Img src={philosophy.imgSrc} />
          <TopContent
            name={philosophy.name}
            subject={philosophy.subject}
            author={philosophy.author}
            authorInfo={philosophy.authorInfo}
            summary={philosophy.summary}
          />
        </TopBox>
        <BodyContent
          MyOpinionChapter={philosophy.MyOpinionChapter}
          MyOpinionDetail={philosophy.MyOpinionDetail}
        />
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const TopBox = styled.div`
  display: flex;
  gap: 2%;
  height: 100vh;
  padding: 2%;
`;
const Img = styled.img`
  flex: 1.2;
`;

export default PhilosophyBook;
