import styled from "@emotion/styled";
import { motion } from "framer-motion";

type Props = {
  show: boolean;
};
const text =
  "무신사 스탠다드의 남여 구매자 비율은 80 : 20으로 남성 위주의 브랜드이지만, 무신사에서는 우신사스토어 라는 여성분들을 위한 스토어도 같이 론칭중입니다.";
const textArray = text.split("");
// 무신사 스탠다드의 남여 구매자 비율은 80 : 20으로
// 남성 위주의 브랜드이지만,
// 무신사에서는 우신사스토어 라는 여성분들을 위한 스토어도 같이 론칭중입니다.
export const ChartDescription = ({ show }: Props) => {
  const makeText = (item: string, index: number) => {
    if (index === 30 || index === 44) return <p key={index}></p>;

    return (
      <Text
        key={index}
        animate={{
          opacity: show ? [0, 1] : 0,
          textShadow: show
            ? "white 1px 1px 5px"
            : "white 0px 0px 0px",
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
