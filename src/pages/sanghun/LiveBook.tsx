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
import { live } from "./dummy/books";
import { motion } from "framer-motion";

const LiveBook: React.FC = () => {
  return (
    <DetailLayout>
      <Wrapper>
        <ScrollBtn />
        <Box>
          <Header />
          <TopBox animate={{ opacity: [0, 1] }}>
            <Img src={live.imgSrc} />
            <TopContent
              name={live.name}
              subject={live.subject}
              author={live.author}
              authorInfo={live.authorInfo}
              summary={live.summary}
            />
          </TopBox>
        </Box>
        {live.MyOpinionChapter.map((item, index) => (
          <Chapter
            MyOpinionChapter={item}
            MyOpinionDetail={live.MyOpinionDetail[index]}
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

export default LiveBook;
