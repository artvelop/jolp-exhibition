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
import { philosophy } from "./dummy/books";
import { motion } from "framer-motion";

const PhilosophyBook: React.FC = () => {
  return (
    <DetailLayout>
      <Wrapper>
        <ScrollBtn />
        <Box>
          <Header />
          <TopBox animate={{ opacity: [0, 1] }}>
            <Img src={philosophy.imgSrc} />
            <TopContent
              name={philosophy.name}
              subject={philosophy.subject}
              author={philosophy.author}
              authorInfo={philosophy.authorInfo}
              summary={philosophy.summary}
            />
          </TopBox>
        </Box>
        {philosophy.MyOpinionChapter.map((item, index) => (
          <Chapter
            MyOpinionChapter={item}
            MyOpinionDetail={philosophy.MyOpinionDetail[index]}
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
export default PhilosophyBook;
