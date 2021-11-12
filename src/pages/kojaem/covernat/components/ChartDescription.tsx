import styled from "@emotion/styled";
import { motion } from "framer-motion";

type Props = {
  show: boolean;
};
const text =
  "커버낫 브랜드의 구매자 남여 비율은 57 : 43으로 성별에 상관없이 즐겨 입을 수 있는 브랜드입니다.";
const textArray = text.split("");
// 커버낫 브랜드의 남여 구매자 비율은 57 : 43으로
// 성별에 상관없이 즐겨 입을 수 있는 브랜드입니다.
export const ChartDescription = ({ show }: Props) => {
  const makeText = (item: string, index: number) => {
    if (index === 29) return <p key={index}></p>;

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
