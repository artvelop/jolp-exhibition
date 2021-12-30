import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useState } from "react";
import { ImageBanner, Description } from "./index";
type Props = {
  TopWrapperColor: string;
  BrandImageSrc: string;
  Introduce: string;
  BrandName: string;
  BrandNameColors: string[];
  NextButtonColor: string;
  SlideImageDescription: string[];
};
export const Top = ({ TopWrapperColor, BrandImageSrc, Introduce, BrandName, BrandNameColors, NextButtonColor, SlideImageDescription}: Props) => {
  const [first, setFirst] = useState(true);
  return (
    <Wrapper TopWrapperColor={TopWrapperColor}>
      {first ? (
        <Description
          setFirst={setFirst}
          BrandImageSrc={BrandImageSrc}
          Introduce={Introduce}
          BrandName={BrandName}
          BrandNameColors={BrandNameColors}
          NextButtonColor={NextButtonColor}
        />
      ) : (
        <ImageBanner
          SlideImageDescription={SlideImageDescription}
          BrandName={BrandName}
          BrandNameColors={BrandNameColors}
        />
      )}
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)<{ TopWrapperColor: string }>`
  display: flex;
  background-color: ${props => props.TopWrapperColor};
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;
