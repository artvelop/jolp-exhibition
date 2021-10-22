import React from "react";
import styled from "@emotion/styled";
import {
  DetailLayout,
  TopContent,
  BodyContent,
  ScrollBtn,
  Header,
} from "./components";
import { live } from "./dummy/books";

const LiveBook: React.FC = () => {
  return (
    <DetailLayout>
      <Wrapper>
        <ScrollBtn />
        <Box>
          <Header />
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
        </Box>
        <BodyContent
          MyOpinionChapter={live.MyOpinionChapter}
          MyOpinionDetail={live.MyOpinionDetail}
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
const Img = styled.img`
    width: 36%;

`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 100vw; */
`;
export default LiveBook;
