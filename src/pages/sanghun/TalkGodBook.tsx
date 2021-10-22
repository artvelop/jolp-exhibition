import React from "react";
import styled from "@emotion/styled";
import { DetailLayout, TopContent, BodyContent, ScrollBtn } from "./components";
import { talkGod } from "./dummy/books";

const TalkGod: React.FC = () => {
  return (
    <DetailLayout>
      <Wrapper>
        <ScrollBtn />
        <TopBox>
          <Img src={talkGod.imgSrc} />
          <TopContent
            name={talkGod.name}
            subject={talkGod.subject}
            author={talkGod.author}
            authorInfo={talkGod.authorInfo}
            summary={talkGod.summary}
          />
        </TopBox>
        <BodyContent
          MyOpinionChapter={talkGod.MyOpinionChapter}
          MyOpinionDetail={talkGod.MyOpinionDetail}
        />
      </Wrapper>
    </DetailLayout>
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

export default TalkGod;
