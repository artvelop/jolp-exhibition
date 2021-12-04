import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Top, Mid, Bottom } from './index';

export const KirshMain = () => {
  return (
    <Wrapper>
      <Top />
      <Mid />
      <Bottom />
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  width: 100%;
`;