import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Top, Mid, Bottom } from "pages/kojaem/components";
import { kirsh } from 'pages/kojaem/dummy/brands';

export const KirshMain = () => {
  return (
    <Wrapper>
      <Top
        TopWrapperColor={kirsh.TopWrapperColor}
        BrandImageSrc={kirsh.BrandImageSrc}
        Introduce={kirsh.Introduce}
        BrandName={kirsh.BrandName}
        BrandNameColors={kirsh.BrandNameColors}
        NextButtonColor={kirsh.NextButtonColor}
        SlideImageDescription={kirsh.SlideImageDescription}
      />
      <Mid
        SeasonDescription={kirsh.SeasonDescription}
        TitleShadow={kirsh.TitleShadow}
        MidBackgroundColors={kirsh.MidBackgroundColors}
        BrandName={kirsh.BrandName}
      />
      <Bottom
        BottomTitle={kirsh.BottomTitle}
        ChartData={kirsh.ChartData}
        ChartIntroduce={kirsh.ChartIntroduce}
        LineBreak={kirsh.LineBreak}
      />
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  width: 100%;
`;