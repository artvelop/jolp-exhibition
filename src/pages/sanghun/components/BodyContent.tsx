import React from "react";
import styled from "@emotion/styled";
import { TypoGraphy } from "./index";
import { color } from "../constants";

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
      {MyOpinionChapter.map((item, i) => {
        return (
          <ViewPort>
            <Box>
              <TypoGraphy type="h1" fontWeight="bold" color={color.gold_light}>
                {item}
              </TypoGraphy>
              <Gap />
              {MyOpinionDetail[i].map((item) => {
                return (
                  <TypoGraphy type="h3" fontHeight="34px" color={color.gray}>
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
  width: 100%;
  height: 100vh;
  background-color: black;
  display: flex;
  align-items: center;
`;

const Box = styled.div`
  width: 80%;
  padding: 2%;
  margin-left: 10%;
  box-shadow: 0px 0px 31px 10px rgba(174, 134, 37, 1);
  -webkit-box-shadow: 0px 0px 31px 10px rgba(174, 134, 37, 1);
  -moz-box-shadow: 0px 0px 31px 10px rgba(174, 134, 37, 1);
  border: 2px inset ${color.gold_light};
  border-radius: 16px;
`;
const Gap = styled.div`
  margin-top: 1%;
`;
