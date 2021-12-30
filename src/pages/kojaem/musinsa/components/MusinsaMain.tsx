import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Top, Mid, Bottom } from "pages/kojaem/components";
import { musinsa } from 'pages/kojaem/dummy/brands';
 
export const MusinsaMain = () => {
  return (
    <Wrapper>
      <Top
        TopWrapperColor={musinsa.TopWrapperColor}
        BrandImageSrc={musinsa.BrandImageSrc}
        Introduce={musinsa.Introduce}
        BrandName={musinsa.BrandName}
        BrandNameColors={musinsa.BrandNameColors}
        NextButtonColor={musinsa.NextButtonColor}
        SlideImageDescription={musinsa.SlideImageDescription}
      />
      <Mid
        SeasonDescription={musinsa.SeasonDescription}
        TitleShadow={musinsa.TitleShadow}
        MidBackgroundColors={musinsa.MidBackgroundColors}
        BrandName={musinsa.BrandName}
      />
      <Bottom
        BottomTitle={musinsa.BottomTitle}
        ChartData={musinsa.ChartData}
        ChartIntroduce={musinsa.ChartIntroduce}
        LineBreak={musinsa.LineBreak}
      />
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  width: 100%;
`;