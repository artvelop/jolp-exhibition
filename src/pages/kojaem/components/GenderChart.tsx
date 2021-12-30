import styled from "@emotion/styled";
import { LayoutPosition } from 'chart.js';
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { ChartDescription } from './index';



const options = { threshold: 0.5 };

type Props = {
  ChartData: Number[];
  ChartIntroduce: string;
  LineBreak: Number[];
};
export const GenderChart = ({ ChartData, ChartIntroduce, LineBreak }: Props) => {

  const data = {
    labels: ["여", "남"],
    datasets: [
      {
        data: ChartData,
        borderWidth: 2,
        backgroundColor: ["#f27272", "#2f2e61"],
        hoverBorderColor: "#00000",
        hoverBorderWidth: 3,
      },
    ],
  };
  const legendPosition: LayoutPosition = "bottom";
  const chartOptions = {
    plugins: {
      legend: {
        position: legendPosition,
        // display: false,
        reverse: true,
        labels: {
          boxWidth: 50,
          boxHeight: 20,
          padding: 20,
          color: "#FFFFFF",
          // usePointStyle:true,
        },
      },
    },
    // rotation: 0
  };


  const chartRef = useRef(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShow(true);
      } else {
        setShow(false);
      }
    }, options);

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Wrapper>
      <ChartWrapper
        ref={chartRef}
        animate={{
          rotate: show ? [0, 240, 0] : 0,
          scale: show ? [1, 1.2, 1] : 1,
          opacity: show ? [0, 1] : 0,
          transition: {
            duration: 2,
            ease: "easeOut",
          },
        }}
      >
        <Doughnut data={data} options={chartOptions} />
      </ChartWrapper>
      <ChartDescriptionWrapper
        animate={{
          opacity: show ? [0, 1] : 0,
        }}
      >
        <ChartDescription
          show={show}
          ChartIntroduce={ChartIntroduce}
          LineBreak={LineBreak}
        />
      </ChartDescriptionWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  display: flex;
  margin-top: 30vh;
  height: 50vh;
  display: flex;
  align-items: center;
`;
const ChartWrapper = styled(motion.div)`
  height: 100%;
  width: 30vw;
  margin-left: 10vw;
  display: flex;
  align-items: center;
`;

const ChartDescriptionWrapper = styled(motion.div)`
  margin-right: 10vw;
  width: 70vw;
  height: 100%;
  display: flex;
  align-items: center;
`;