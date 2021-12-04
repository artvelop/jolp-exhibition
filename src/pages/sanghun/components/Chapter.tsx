import React from "react";
import styled from "@emotion/styled";
import { TypoGraphy } from "./index";
import { color } from "../constants";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

type BodyContentType = {
  MyOpinionChapter: string;
  MyOpinionDetail: string[];
};

export const Chapter: React.FC<BodyContentType> = ({
  MyOpinionChapter,
  MyOpinionDetail,
}) => {
  const regExp = /!$/;
  const { inView, ref } = useInView();
  const boxAni = useAnimation();
  const textBlingBling = useAnimation();

  if (inView) {
    boxAni.start({
      opacity: 1,
      transition: { duration: 2.5 },
    });

    textBlingBling.start({
      opacity: [1, 0, 1, 0, 1, 0, 1],
      transition: { duration: 3, delay: 1 },
      translateX: 40,
      scale: 1.05,
      textShadow: "0px 0px 6px yellow",
    });
  }

  return (
    <Wrap>
      <ViewPort>
        <Box ref={ref} initial={{ opacity: 0 }} animate={boxAni}>
          <Special2>
            <TypoGraphy type="h1" fontWeight="bold" color={color.gold_light}>
              {MyOpinionChapter}
            </TypoGraphy>
          </Special2>
          <Gap />
          {MyOpinionDetail.map((item, index) => {
            return regExp.test(item) ? (
              <Special animate={textBlingBling}>
                <TypoGraphy type="h3" fontHeight="34px" color={color.gold_dark}>
                  <ListItem key={index.toString()}> {item}</ListItem>
                </TypoGraphy>
              </Special>
            ) : (
              <TypoGraphy type="h3" fontHeight="34px" color={color.gray}>
                <ListItem key={index.toString()}> {item}</ListItem>
              </TypoGraphy>
            );
          })}
        </Box>
        <Gap />
      </ViewPort>
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
const Box = styled(motion.div)`
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

const Special = styled(motion.div)``;
const Special2 = styled(motion.div)`
  text-shadow: 0px 0px 10px ${color.gold_light};
`;

const ListItem = styled.li`
  list-style: none;
`;
