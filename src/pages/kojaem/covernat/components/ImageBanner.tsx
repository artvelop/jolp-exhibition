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
    mode: "free",
    loop: true,
    duration: 1500,
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
    }, 1500);
    return () => {
      clearInterval(timer.current as NodeJS.Timeout);
    };
  }, [pause, slider]);

  return (
    <ImageUl
      ref={sliderRef}
      className="keen-slider"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 5,
        duration: 1,
      }}
    >
      <SlideImage
        className="keen-slider__slide number-slide1"
        src="/koJaem/img/covernat/roll_01.jpg"
        setPause={setPause}
      />
      <SlideImage
        className="keen-slider__slide number-slide2"
        src="/koJaem/img/covernat/roll_02.jpg"
        setPause={setPause}
      />
      <SlideImage
        className="keen-slider__slide number-slide3"
        src="/koJaem/img/covernat/roll_03.jpg"
        setPause={setPause}
      />
      <SlideImage
        className="keen-slider__slide number-slide4"
        src="/koJaem/img/covernat/roll_04.jpg"
        setPause={setPause}
      />
      <SlideImage
        className="keen-slider__slide number-slide5"
        src="/koJaem/img/covernat/roll_05.jpg"
        setPause={setPause}
      />
    </ImageUl>
  );
};

const ImageUl = styled(motion.div)`
  margin-top: 200px;
  width: 100vw;
`;
