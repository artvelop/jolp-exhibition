import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useState } from "react";
import { ImageBanner } from "./ImageBanner";
import { Description } from './Description';

export const Top = () => {
  const [first, setFirst] = useState(true);
  return (
    <Wrapper>
        {first ? <Description setFirst={setFirst} /> : <ImageBanner />}
    </Wrapper>
  );
}

const Wrapper = styled(motion.div)`
  display: flex;
  background-color: #d7d7d5;
  width: 100%;
  height: 100vh;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
  }
`;