import styled from "@emotion/styled";
import { motion } from "framer-motion";
import KeenSlider from "keen-slider";
import { useKeenSlider } from "keen-slider/react";
import { RefObject, useEffect, useRef, useState } from "react";

type sliderType = [sliderRef: RefObject<HTMLDivElement>, slider: KeenSlider];
export const ImageBanner = () => {
  const [pause, setPause] = useState(false);

  const timer: any = useRef(null);

  const [sliderRef, slider]: sliderType = useKeenSlider({
    slidesPerView: 4,
    spacing: 10,
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
    sliderRef.current!.addEventListener("mouseover", () => {
      setPause(true);
    });
    sliderRef.current!.addEventListener("mouseout", () => {
      setPause(false);
    });
  }, [sliderRef]);

  useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next();
      }
    }, 2000);
    return () => {
      clearInterval(timer.current);
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
      <Image
        className="keen-slider__slide number-slide1"
        src="/koJaem/img/covernat/roll_01.jpg"
      />
      <Image
        className="keen-slider__slide number-slide2"
        src="/koJaem/img/covernat/roll_02.jpg"
      />
      <Image
        className="keen-slider__slide number-slide3"
        src="/koJaem/img/covernat/roll_03.jpg"
      />
      <Image
        className="keen-slider__slide number-slide4"
        src="/koJaem/img/covernat/roll_04.jpg"
      />
      <Image
        className="keen-slider__slide number-slide5"
        src="/koJaem/img/covernat/roll_05.jpg"
      />
    </ImageUl>
  );
};

const ImageUl = styled(motion.div)`
  margin-top: 200px;
  width: 100vw;
`;

const Image = styled(motion.img)``;
