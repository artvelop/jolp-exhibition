import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Dispatch, Ref, useRef, useState } from "react";

export const Mid = () => {
  const imageRef:Ref<HTMLImageElement> = useRef(null);
  
  return (
      <Wrapper
      animate={{
        y:[50,0]
      }}
      >
        <Img1 src="/kojaem/img/covernat/img1.png"
        ref={imageRef}
        animate={{
          y: [50,0],
          opacity: [0,1]
        }}
        />
        <Img2 src="/kojaem/img/covernat/img2.png"
        animate={{
          x: [50,0],
          opacity: [0,1]
        }}
        
        
        />
      </Wrapper>
  );
};


const Wrapper = styled(motion.div)`
  background-color: #cce0ff;
  display: flex;
  width: 100vw;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
  }
`;
const Img1 = styled(motion.img)`
  margin-top:10%;
  margin-left: 10%;
  width:20%;
  height:20%;
`;
const Img2 = styled(motion.img)`
  margin-top: 70%;
  margin-left: auto;
  margin-right: 10%;
  width:20%;
  height:20%;
`;