import React from "react";
import styled from "@emotion/styled";
import {
  DetailLayout,
  TopContent,
  BodyContent,
  ScrollBtn,
  Header,Img,
} from "./components";
import { myself } from "./dummy/books";

const MyselfBook: React.FC = () => {
  return (
    <DetailLayout>
      <Wrapper>
        <ScrollBtn />
        <Box>
          <Header />
          <TopBox>
            <Img src={myself.imgSrc} />
            <TopContent
              name={myself.name}
              subject={myself.subject}
              author={myself.author}
              authorInfo={myself.authorInfo}
              summary={myself.summary}
            />
          </TopBox>
        </Box>
        <BodyContent
          MyOpinionChapter={myself.MyOpinionChapter}
          MyOpinionDetail={myself.MyOpinionDetail}
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
  /* width: 100vw; */
`;
export default MyselfBook;
