import React from "react";
import styled from "@emotion/styled";
import { Layout, TopContent, BodyContent } from "./components";
import { live } from "./dummy/books";

const LiveBook: React.FC = () => {
  return (
    <Layout>
      <Wrapper>
        <TopBox>
          <Img src={live.imgSrc} />
          <TopContent
            name={live.name}
            subject={live.subject}
            author={live.author}
            authorInfo={live.authorInfo}
            summary={live.summary}
          />
        </TopBox>
        <BodyContent
          MyOpinionChapter={live.MyOpinionChapter}
          MyOpinionDetail={live.MyOpinionDetail}
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


export default LiveBook;