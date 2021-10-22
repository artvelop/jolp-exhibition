import React from "react";
import styled from "@emotion/styled";
import { DetailLayout, TopContent, BodyContent,ScrollBtn } from "./components";
import { harvard } from "./dummy/books";

const HarvardBook: React.FC = () => {
  return (
    <DetailLayout>
      <Wrapper>
        <ScrollBtn />
        <TopBox>
          <Img src={harvard.imgSrc} />
          <TopContent
            name={harvard.name}
            subject={harvard.subject}
            author={harvard.author}
            authorInfo={harvard.authorInfo}
            summary={harvard.summary}
          />
        </TopBox>
        <BodyContent
          MyOpinionChapter={harvard.MyOpinionChapter}
          MyOpinionDetail={harvard.MyOpinionDetail}
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
  width: 40%;
`;

export default HarvardBook;
