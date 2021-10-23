import styled from "@emotion/styled";
import { motion } from "framer-motion";
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
  @media screen and (max-width: 600px) {
    justify-content: center;
  }
`;