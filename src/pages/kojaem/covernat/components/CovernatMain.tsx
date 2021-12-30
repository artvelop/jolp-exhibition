import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Top } from "pages/kojaem/components/Top";
import { Mid } from "pages/kojaem/components/Mid";
import { Bottom } from "pages/kojaem/components/Bottom";
import { covernat } from "pages/kojaem/dummy/brands";


export const CovernatMain = () => {
  return (
    <Wrapper>
      <Top
        TopWrapperColor={covernat.TopWrapperColor}
        BrandImageSrc={covernat.BrandImageSrc}
        Introduce={covernat.Introduce}
        BrandName={covernat.BrandName}
        BrandNameColors={covernat.BrandNameColors}
        NextButtonColor={covernat.NextButtonColor}
        SlideImageDescription={covernat.SlideImageDescription}
      />
      <Mid
        SeasonDescription={covernat.SeasonDescription}
        TitleShadow={covernat.TitleShadow}
        MidBackgroundColors={covernat.MidBackgroundColors}
        BrandName={covernat.BrandName}
      />
      <Bottom
        BottomTitle={covernat.BottomTitle}
        ChartData={covernat.ChartData}
        ChartIntroduce={covernat.ChartIntroduce}
        LineBreak={covernat.LineBreak}
      />
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  width: 100%;
`;