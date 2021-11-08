import styled from "@emotion/styled";
import { motion } from "framer-motion";
import KeenSlider from "keen-slider";
import { useKeenSlider } from "keen-slider/react";
import { RefObject, useEffect, useRef, useState } from "react";
import { SlideImage } from "./SlideImage";

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
      <BrandName>LMC</BrandName>
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
          src="/koJaem/img/lmc/slide_01.jpg"
          setPause={setPause}
          text="20FW COLLECTION"
        />
        <SlideImage
          className="keen-slider__slide number-slide2"
          src="/koJaem/img/lmc/slide_02.jpg"
          setPause={setPause}
          text="2020 WINTER COLLECTION"
        />
        <SlideImage
          className="keen-slider__slide number-slide3"
          src="/koJaem/img/lmc/slide_03.jpg"
          setPause={setPause}
        />
        <SlideImage
          className="keen-slider__slide number-slide4"
          src="/koJaem/img/lmc/slide_04.jpg"
          setPause={setPause}
          text="2020 Friendship Mix Editorial"
        />
        <SlideImage
          className="keen-slider__slide number-slide5"
          src="/koJaem/img/lmc/slide_05.jpg"
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
  transform: translateX(-50%) scale(1.5);;
  color: white;
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
  margin-top: 200px;
  width: 100%;
`;


