import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useState } from "react";
// import { ImageBanner } from "./ImageBanner";
import { Description } from './Description';

export const Top = () => {
  const [first, setFirst] = useState(true);
  return (
    <Wrapper>
        <Description setFirst={setFirst} />
        {/* {first ? <Description setFirst={setFirst} /> : <ImageBanner />} */}
        {/* {first ? <Description setFirst={setFirst} /> : null} */}

    </Wrapper>
  );
}

const Wrapper = styled(motion.div)`
  display: flex;
  background-color: #716e84;
  width: 100vw;
  height: 100vh;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
  }
`;