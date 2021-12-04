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
  background-color: #abb7ba;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;