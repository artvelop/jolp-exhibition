import React from "react";
import styled from "@emotion/styled";
import {
  DetailLayout,
  TopContent,
  Chapter,
  ScrollBtn,
  Header,
  Img,
} from "./components";
import { talkGod } from "./dummy/books";
import { motion } from "framer-motion";

const TalkGodBook: React.FC = () => {
  return (
    <DetailLayout>
      <Wrapper>
        <ScrollBtn />
        <Box>
          <Header />
          <TopBox animate={{ opacity: [0, 1] }}>
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
        {talkGod.MyOpinionChapter.map((item, index) => (
          <Chapter
            MyOpinionChapter={item}
            MyOpinionDetail={talkGod.MyOpinionDetail[index]}
          />
        ))}
      </Wrapper>
    </DetailLayout>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const TopBox = styled(motion.div)`
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
