import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useState } from "react";
import { Description, ImageBanner } from './index';

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
  background-color: #8d8aa6;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;