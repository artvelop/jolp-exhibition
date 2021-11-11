import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { ChartDescription } from './ChartDescription';

const data = {
  labels: ["남", "여"],
  datasets: [
    {
      label: "구매자 남여 비율",
      data: [26, 74],
      backgroundColor: ["#2f2e61", "#f27272"],
      hoverBorderColor:"black",
      hoverBorderWidth:3,
    },
  ],
};
const chartOptions = {
  plugins: {
    legend: {
      // display: false,
      reverse:true,
      labels: {
        color:'#FFFFFF',
      }
    }
  },
  
}

const options = { threshold: 0.5 };

export const GenderChart = () => {
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
        <Doughnut data={data} options={chartOptions}/>
      </ChartWrapper>
      <ChartDescriptionWrapper
        animate={{
          opacity: show ? [0, 1] : 0,
        }}
      >
        <ChartDescription show={show}/>
      </ChartDescriptionWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  margin-top: 30vh;
`;
const ChartWrapper = styled(motion.div)`
  width: 25vw;
  margin-left: 10vw;
`;

const ChartDescriptionWrapper = styled(motion.div)`
  margin-right: 20vw;
  align-self: center;
`;