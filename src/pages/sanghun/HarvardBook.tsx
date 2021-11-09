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
import { harvard } from "./dummy/books";
import { motion } from "framer-motion";

const HarvardBook: React.FC = () => {
  return (
    <DetailLayout>
      <Wrapper>
        <ScrollBtn />
        <Box>
          <Header />
          <TopBox animate={{ opacity: [0, 1] }}>
            <Img src={harvard.imgSrc} />
            <TopContent
              name={harvard.name}
              subject={harvard.subject}
              author={harvard.author}
              authorInfo={harvard.authorInfo}
              summary={harvard.summary}
            />
          </TopBox>
        </Box>
        {harvard.MyOpinionChapter.map((item, index) => (
          <Chapter
            MyOpinionChapter={item}
            MyOpinionDetail={harvard.MyOpinionDetail[index]}
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
  /* width: 100vw; */
`;
export default HarvardBook;
