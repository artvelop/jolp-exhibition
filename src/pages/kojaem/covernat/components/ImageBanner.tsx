import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { THookReturn, useKeenSlider } from "keen-slider/react";

export const ImageBanner = () => {
  const [sliderRef]: THookReturn<HTMLDivElement> = useKeenSlider({
    slidesPerView: 4,
    spacing: 10,
    loop: true,
  });

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
