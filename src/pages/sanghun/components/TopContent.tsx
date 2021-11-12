import React from "react";
import styled from "@emotion/styled";
import { TypoGraphy } from "./index";
import { color } from "../constants";
import { motion } from "framer-motion";

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
      <Content whileHover={{ scale: 1.1, transition: { duration: 1 } }}>
        <TypoGraphy type="h1" fontWeight="bold" color="white">
          제목 : {name}
        </TypoGraphy>
      </Content>
      <Content whileHover={{ scale: 1.1, transition: { duration: 1 } }}>
        <TypoGraphy type="h1" fontWeight="bold" color="white">
          주제 : {subject}
        </TypoGraphy>
      </Content>
      <Content whileHover={{ scale: 1.1, transition: { duration: 1 } }}>
        <TypoGraphy type="h1" fontWeight="bold" color="white">
          저자 소개 : {author}
        </TypoGraphy>
        <Gap />
        <TypoGraphy type="h3" fontHeight="26px" color={color.gray}>
          {authorInfo}
        </TypoGraphy>
      </Content>
      <Content whileHover={{ scale: 1.1, transition: { duration: 1 } }}>
        <TypoGraphy type="h1" fontWeight="bold" color="white">
          줄거리
        </TypoGraphy>
        <Gap />
        <TypoGraphy type="h3" fontHeight="26px" color={color.gray}>
          {summary}
        </TypoGraphy>
      </Content>
    </Wrap>
  );
};

const Wrap = styled(motion.div)`
  flex: 2;
  padding: 2%;
  margin-top: -2%;
`;
const Content = styled(motion.div)`
  margin-bottom: 2%;
  border: 3px inset ${color.gold_normal};
  padding: 2%;
  box-shadow: 5px 1px 10px -1px rgba(199, 175, 35, 0.77);
  -webkit-box-shadow: 5px 1px 10px -1px rgba(199, 175, 35, 0.77);
  -moz-box-shadow: 5px 1px 10px -1px rgba(199, 175, 35, 0.77);
`;
const Gap = styled.div`
  margin-bottom: 2%;
`;
