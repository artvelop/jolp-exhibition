import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { ImageBanner } from "./ImageBanner";
import { Description } from './Description';
import { Top } from './Top';


export const CovernatMain = () => {
  return (
    <Wrapper>
      <Top />
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  display: flex;
  width: 100vw;
  height: 100vh;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
  }
`;