import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { ImageBanner } from "./ImageBanner";
import { Description } from './Description';
import { Top } from './Top';
import { Mid } from "./Mid";


export const CovernatMain = () => {
  return (
    <Wrapper>
      <Top />
      <Mid />
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  @media screen and (max-width: 600px) {
    justify-content: center;
  }
`;