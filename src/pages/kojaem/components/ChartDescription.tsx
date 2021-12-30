import styled from "@emotion/styled";
import { motion } from "framer-motion";

type Props = {
  show: boolean;
  ChartIntroduce: string;
  LineBreak: Number[];
};
export const ChartDescription = ({ show, ChartIntroduce, LineBreak }: Props) => {
  const makeText = (item: string, index: number) => {
    if (index === LineBreak[0] || index === LineBreak[1])
      return <span key={index}><br /></span>;
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
    <Wrapper>
      {ChartIntroduce.split("").map((item, index) => makeText(item, index))}
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  margin-left : 10vw;
  width: 100%;
`;
const Text = styled(motion.span)`
  color: white;
  font-size: 2vw;
  font-weight: bold;
  opacity: 0;
`;
