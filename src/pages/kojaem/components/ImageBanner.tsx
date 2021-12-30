import styled from "@emotion/styled";
import { motion } from "framer-motion";
import KeenSlider from "keen-slider";
import { useKeenSlider } from "keen-slider/react";
import { RefObject, useEffect, useRef, useState } from "react";
import { SlideImage } from "./index";

type sliderType = [sliderRef: RefObject<HTMLDivElement>, slider: KeenSlider];
type Props = {
  SlideImageDescription: string[];
  BrandName: string;
  BrandNameColors: string[];
};
export const ImageBanner = ({
  SlideImageDescription,
  BrandName,
  BrandNameColors,
}: Props) => {
  const smallBrandName = BrandName.toLowerCase();
  const [pause, setPause] = useState(false);

  const timer = useRef<NodeJS.Timeout>();

  const [sliderRef, slider]: sliderType = useKeenSlider({
    slidesPerView: 4,
    spacing: 10,
    loop: true,
    duration: 5000,
    mode: "free",
    dragStart: () => {
      setPause(true);
    },
    dragEnd: () => {
      setPause(false);
    },
  });

  useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next();
      }
    }, 2000);
    return () => {
      clearInterval(timer.current as NodeJS.Timeout);
    };
  }, [pause, slider]);

  return (
    <Wrapper>
      <BrandNameWrapper BrandNameColors={BrandNameColors}>
        {BrandName}
      </BrandNameWrapper>
      <ImageUl
        ref={sliderRef}
        className="keen-slider"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
        }}
      >
        <SlideImage
          className="keen-slider__slide number-slide1"
          src={
            require(`assets/img/KoJaem/${smallBrandName}/top/slide_01.jpg`)
              .default
          }
          setPause={setPause}
          text={SlideImageDescription[0]}
          smallBrandName={smallBrandName}
        />
        <SlideImage
          className="keen-slider__slide number-slide2"
          src={
            require(`assets/img/KoJaem/${smallBrandName}/top/slide_02.jpg`)
              .default
          }
          setPause={setPause}
          text={SlideImageDescription[1]}
          smallBrandName={smallBrandName}
        />
        <SlideImage
          className="keen-slider__slide number-slide3"
          src={
            require(`assets/img/KoJaem/${smallBrandName}/top/slide_03.jpg`)
              .default
          }
          setPause={setPause}
          text={SlideImageDescription[2]}
          smallBrandName={smallBrandName}
        />
        <SlideImage
          className="keen-slider__slide number-slide4"
          src={
            require(`assets/img/KoJaem/${smallBrandName}/top/slide_04.jpg`)
              .default
          }
          setPause={setPause}
          text={SlideImageDescription[3]}
          smallBrandName={smallBrandName}
        />
        <SlideImage
          className="keen-slider__slide number-slide5"
          src={
            require(`assets/img/KoJaem/${smallBrandName}/top/slide_05.jpg`)
              .default
          }
          setPause={setPause}
          text={SlideImageDescription[4]}
          smallBrandName={smallBrandName}
        />
      </ImageUl>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const BrandNameWrapper = styled(motion.h1)<{BrandNameColors:string[]}>`
  position: absolute;
  top: 0%;
  left: 50%;
  font-size: 30px;
  transform: translateX(-50%) scale(1.5);
  color: ${(props) => props.BrandNameColors[0]};
  text-shadow: 1px 1px 5px ${(props) => props.BrandNameColors[1]};
  display: flex;
  justify-content: center;

  @media screen and (max-width: 600px) {
    position: absolute;
    font-size: 40px;
    width: 100%;
  }

  @media screen and (min-width: 600px) {
    font-size: 50px;
  }

  @media screen and (min-width: 1000px) {
    font-size: 60px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 70px;
  }
`;

const ImageUl = styled(motion.div)`
  display: flex;
  margin-top: 200px;
  width: 100%;
`;


