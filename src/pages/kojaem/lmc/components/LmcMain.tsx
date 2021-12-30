import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Top, Mid, Bottom } from "pages/kojaem/components";
import { lmc } from 'pages/kojaem/dummy/brands';

export const LmcMain = () => {
  return (
    <Wrapper>
      <Top
        TopWrapperColor={lmc.TopWrapperColor}
        BrandImageSrc={lmc.BrandImageSrc}
        Introduce={lmc.Introduce}
        BrandName={lmc.BrandName}
        BrandNameColors={lmc.BrandNameColors}
        NextButtonColor={lmc.NextButtonColor}
        SlideImageDescription={lmc.SlideImageDescription}
      />
      <Mid
        SeasonDescription={lmc.SeasonDescription}
        TitleShadow={lmc.TitleShadow}
        MidBackgroundColors={lmc.MidBackgroundColors}
        BrandName={lmc.BrandName}
      />
      <Bottom
        BottomTitle={lmc.BottomTitle}
        ChartData={lmc.ChartData}
        ChartIntroduce={lmc.ChartIntroduce}
        LineBreak={lmc.LineBreak}
      />
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  width: 100%;
`;