import styled from "@emotion/styled";
import { motion } from "framer-motion";
import KeenSlider from "keen-slider";
import { useKeenSlider } from "keen-slider/react";
import { RefObject, useEffect, useRef, useState } from "react";
import { SlideImage } from "./SlideImage";
import slide1 from "assets/img/KoJaem/kirsh/slide_01.jpg"
import slide2 from "assets/img/KoJaem/kirsh/slide_02.jpg"
import slide3 from "assets/img/KoJaem/kirsh/slide_03.jpg"
import slide4 from "assets/img/KoJaem/kirsh/slide_04.jpg"
import slide5 from "assets/img/KoJaem/kirsh/slide_05.jpg"

type sliderType = [sliderRef: RefObject<HTMLDivElement>, slider: KeenSlider];
export const ImageBanner = () => {
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
      <BrandName>KIRSH</BrandName>
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
          src={slide1}
          setPause={setPause}
          text="21AW KIRSH NEW CHERRY & POCKET LINE"
        />
        <SlideImage
          className="keen-slider__slide number-slide2"
          src={slide2}
          setPause={setPause}
          text="KIRSH X WONYOUNG, We are all Kirsh!"
        />
        <SlideImage
          className="keen-slider__slide number-slide3"
          src={slide3}
          setPause={setPause}
          text="21AW KIRSH COLLECTION LINE"
        />
        <SlideImage
          className="keen-slider__slide number-slide4"
          src={slide4}
          setPause={setPause}
        />
        <SlideImage
          className="keen-slider__slide number-slide5"
          src={slide5}
          setPause={setPause}
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

const BrandName = styled(motion.h1)`
  position: absolute;
  top: 0%;
  left: 50%;
  font-size: 30px;
  transform: translateX(-50%) scale(1.5);
  color: #f05f5f;
  text-shadow: 1px 1px 5px #9b47d6;
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


