import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Top } from './Top';
import { Mid } from "./Mid";
import { Bottom } from "./Bottom";
// import { View3D } from './View3D';

export const KirshMain = () => {
  return (
    <Wrapper>
      <Top />
      <Mid />
      <Bottom />
      {/* <View3D /> */}
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  width: 100%;
  @media screen and (max-width: 600px) {
    justify-content: center;
  }
`;