import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { GenderChart } from './GenderChart';


const options = {threshold: 0.2}
export const Bottom = () => {
  const [show, setShow] = useState(false);
  const midRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
        if(entry.isIntersecting) {
          setShow(true);
        }
        else {
          setShow(false);
        }
    },options)

    if(midRef.current) {
      observer.observe(midRef.current)
    }
    return () => {
      observer.disconnect();
    }
  }, [])


  return (
      <Wrapper
      ref={midRef}
      animate={{
        y: show ? [20,0] : 0,
        opacity: show ? [0,1] : 0,
        transition:{duration:0.5}
      }}
      >
        <Title
        animate={{
          transformPerspective:300,
          rotateY: show ? [180,360] : 0,
          opacity: show ? [0,1] : 0,
          transition:{duration: 1.2}
        }}
        >키르시 구매자 남여 비율</Title>
        <GenderChart />
      </Wrapper>
  );
};


const Wrapper = styled(motion.div)`
  background-color : #413f47;
  width: 100%;
  height: 150vh;
  display:flex;
  flex-direction: column;
`;
const Title = styled(motion.div)`
  color:white;
  text-shadow: 1px 1px 5px black;
  font-size: 4vw;
  opacity: 0;
  margin-top: 20vh;
  align-self: center;
  text-shadow: white 1px 1px 5px;
`;