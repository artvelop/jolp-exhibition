import styled from '@emotion/styled'
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from "react";
import { Doughnut } from 'react-chartjs-2';

const data = {
    labels: [
      '남',
      '여',
    ],
    datasets: [{
      label: '구매자 남여 비율',
      data: [57, 43],
      backgroundColor: [
        '#2f2e61',
        '#f27272',
      ],
      hoverOffset: 2,
    }]
  };
const options = {threshold: 0.8}

export const GenderChart = () => {
  const chartRef = useRef(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
        if(entry.isIntersecting) {
          setShow(true);
        }
        else {
          setShow(false);
        }
    },options)

    if(chartRef.current) {
      observer.observe(chartRef.current)
    }
    return () => {
      observer.disconnect();
    }
  }, [])
    
    return(
        <Wrapper
        ref={chartRef}
        animate={{
          scale: show ? [0.25,1] : 0,
          opacity: show ? [0,1] : 0,
          transition:{duration:2}
        }}
        >
            <Doughnut data={data} />
        </Wrapper>
    )
}

const Wrapper = styled(motion.div)`
    margin-top : 50vh;
    margin-left : 10vw;
    width:30vw;
    height:30vh;
`;