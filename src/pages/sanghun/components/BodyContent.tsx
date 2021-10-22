import React from "react";
import styled from "@emotion/styled";
import { TypoGraphy } from "./index";

type TopContentType = {
  MyOpinionChapter: string[];
  MyOpinionDetail: string[][];
};
export const BodyContent: React.FC<TopContentType> = ({
  MyOpinionChapter,
  MyOpinionDetail,
}) => {
  return (
    <Wrap>
      <TypoGraphy type="h1" fontWeight="bold" color="white">
        자세한 이야기
      </TypoGraphy>
      {MyOpinionChapter.map((item, i) => {
        return (
          <ViewPort>
            <Box>
              <TypoGraphy type="h1" fontWeight="bold">
                {item}
              </TypoGraphy>
              <Gap />
              {MyOpinionDetail[i].map((item) => {
                return (
                  <TypoGraphy type="h3" fontHeight="34px">
                    <li> {item}</li>
                  </TypoGraphy>
                );
              })}
            </Box>
          </ViewPort>
        );
      })}
    </Wrap>
  );
};

const Wrap = styled.div``;
const ViewPort = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  align-items: center;
`;

const Box = styled.div`
  width: 50%;
  background-color: wheat;
  padding: 2%;
  margin-left: 10%;
`;
const Gap = styled.div`
  margin-top: 1%;
`;
