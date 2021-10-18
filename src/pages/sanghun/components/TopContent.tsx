import React from "react";
import styled from "@emotion/styled";
import { TypoGraphy } from "./index";

type TopContentType = {
  name: string;
  subject: string;
  author: string;
  authorInfo: string;
  summary: string;
};
export const TopContent: React.FC<TopContentType> = ({
  name,
  subject,
  author,
  authorInfo,
  summary,
}) => {
  return (
    <Wrap>
      <Content>
        <TypoGraphy type="h1" fontWeight="bold">
          제목 : {name}
        </TypoGraphy>
      </Content>
      <Content>
        <TypoGraphy type="h1" fontWeight="bold">
          주제 : {subject}
        </TypoGraphy>
      </Content>
      <Content>
        <TypoGraphy type="h1" fontWeight="bold">
          저자 소개 : {author}
        </TypoGraphy>
        <Gap />
        <TypoGraphy type="h3" fontHeight="24px">
          {authorInfo}
        </TypoGraphy>
      </Content>
      <Content>
        <TypoGraphy type="h1" fontWeight="bold">
          줄거리
        </TypoGraphy>
        <Gap />
        <TypoGraphy type="h3" fontHeight="24px">
          {summary}
        </TypoGraphy>
      </Content>
    </Wrap>
  );
};

const Wrap = styled.div`
  flex: 2;
  background-color: white;
  padding: 2%;
  border: 1px solid black;
`;
const Content = styled.div`
  margin-bottom: 2%;
  border: 1px solid black;
  padding: 2%;
`;
const Gap = styled.div`
  margin-bottom: 2%;
`;
