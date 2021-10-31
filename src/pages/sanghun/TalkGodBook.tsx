import React from "react";
import styled from "@emotion/styled";
import {
  DetailLayout,
  TopContent,
  BodyContent,
  ScrollBtn,
  Header,
  Img,
} from "./components";
import { talkGod } from "./dummy/books";

const TalkGodBook: React.FC = () => {
  return (
    <DetailLayout>
      <Wrapper>
        <ScrollBtn />
        <Box>
          <Header />
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
        </Box>
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
  height: 80vh;
  padding: 2%;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
`;
export default TalkGodBook;
