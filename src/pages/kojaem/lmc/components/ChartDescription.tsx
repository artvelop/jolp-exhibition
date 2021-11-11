import styled from "@emotion/styled";
import { motion } from "framer-motion";

type Props = {
  show: boolean;
};
const text =
  "엘엠씨 브랜드의 구매자 남여 비율은 67 : 33으로 남성에게 더 인기가 많습니다. 하지만 패션을 좋아하시는 여성분들도 많이 즐겨입으시는 브랜드입니다.";
const textArray = text.split("");
// 엘엠씨 브랜드의 구매자 남여 비율은 67 : 33으로 남성에게 더 인기가 많습니다.
// 하지만 스트릿 브랜드 특성 상 여성분들도 많이 즐겨입는 입는 브랜드입니다.
export const ChartDescription = ({ show }: Props) => {
  const makeText = (item: string, index: number) => {
    if (index === 46) return <p key={index}></p>;

    return (
      <Text
        key={index}
        animate={{
          opacity: show ? [0, 1] : 0,
          textShadow: show
            ? "white 1px 1px 5px"
            : "text-shadow: white 0px 0px 0px",
        }}
        transition={{
          duration: show ? 1 : undefined,
          delay: show ? 1.2 + index * 0.05 : undefined
          }}
      >
        {item}
      </Text>
    );
  };
  return (
    <Wrapper>{textArray.map((item, index) => makeText(item, index))}</Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  margin-left : 10vw;
`;
const Text = styled(motion.span)`
  color: white;
  font-size: 3vh;
  font-weight: bold;
  opacity: 0;
`;
