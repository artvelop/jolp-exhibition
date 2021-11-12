import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useState } from "react";
import { Description } from './Description';
import { ImageBanner } from './ImageBanner';

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
  background-color: #f5c4dc;
  width: 100%;
  height: 100vh;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
  }
`;