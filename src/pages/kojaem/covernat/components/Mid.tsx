import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Dispatch, useState } from "react";

export const Mid = () => {
  return (
      <Wrapper>
        aaaa
      </Wrapper>
  );
};


const Wrapper = styled(motion.div)`
  margin-top: 50vh;
  display: flex;
  width: 100vw;
  height: 100vh;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
  }
`;