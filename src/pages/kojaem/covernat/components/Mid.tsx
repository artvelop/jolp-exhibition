import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { MidImage } from './MidImage';

const options = {threshold: 0.1}
export const Mid = () => {
  const [show, setShow] = useState(false);
  const midRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
        if(entry.isIntersecting) {
          setShow(true);
        }
        else {
          setShow(false)
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
        <MidImage src="/kojaem/img/covernat/img1.png"
        style={Img1}
        />
        <MidImage src="/kojaem/img/covernat/img2.png"
        style={Img2}
        />
      </Wrapper>
  );
};


const Wrapper = styled(motion.div)`
  display:flex;
  background-color: #cce0ff;
  width: 100vw;
`;
const Img1 = {
  marginTop:'10%',
  marginLeft: '10%',
  width:'20%',
  height:'20%',
};
const Img2 = {
  marginTop: '70%',
  marginLeft: 'auto',
  marginRight: '10%',
  width:'20%',
  height:'20%',
};