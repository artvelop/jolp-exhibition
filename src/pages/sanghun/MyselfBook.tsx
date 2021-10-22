import React from "react";
import styled from "@emotion/styled";
import { DetailLayout, TopContent, BodyContent,ScrollBtn } from "./components";
import { myself } from "./dummy/books";

const MyselfBook: React.FC = () => {
  return (
    <DetailLayout>
      <Wrapper>
      <ScrollBtn />
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
  height: 100vh;
  padding: 2%;
`;
const Img = styled.img`
  width: 36%;
`;

export default MyselfBook;
