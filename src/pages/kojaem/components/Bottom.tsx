import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { GenderChart } from './index';

const options = { threshold: 0.2 };

type Props = {
  BottomTitle: string;
  ChartData: Number[];
  ChartIntroduce: string;
  LineBreak: Number[];
};
export const Bottom = ({ BottomTitle, ChartData, ChartIntroduce, LineBreak }: Props) => {
  const [show, setShow] = useState(false);
  const midRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShow(true);
      } else {
        setShow(false);
      }
    }, options);

    if (midRef.current) {
      observer.observe(midRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Wrapper
      ref={midRef}
      animate={{
        y: show ? [20, 0] : 0,
        opacity: show ? [0, 1] : 0,
        transition: { duration: 0.5 },
      }}
    >
      <Title
        animate={{
          transformPerspective: 300,
          rotateY: show ? [180, 360] : 0,
          opacity: show ? [0, 1] : 0,
          transition: { duration: 1.2 },
        }}
      >
        {BottomTitle}
      </Title>
      <GenderChart
        ChartData={ChartData}
        ChartIntroduce={ChartIntroduce}
        LineBreak={LineBreak}
      />
    </Wrapper>
  );
};


const Wrapper = styled(motion.div)`
  background-color : #413f47;
  width: 100%;
  height: 150vh;
  display:flex;
  flex-direction: column;
  overflow: hidden;
`;
const Title = styled(motion.div)`
  color:white;
  font-size: 4vw;
  opacity: 0;
  margin-top: 20vh;
  align-self: center;
  text-shadow: 1px 1px 5px white;
`;