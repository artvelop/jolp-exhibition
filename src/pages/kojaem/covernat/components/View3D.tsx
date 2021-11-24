import styled from "@emotion/styled";
import { motion } from "framer-motion";
import KeenSlider from "keen-slider";
import { useKeenSlider } from "keen-slider/react";
import { RefObject, useEffect, useRef, useState } from "react";
import { SlideImage3D } from "./SlideImage3D";
import item1 from "assets/img/KoJaem/covernat/item1.png"
import item2 from "assets/img/KoJaem/covernat/item2.png"
import item3 from "assets/img/KoJaem/covernat/item3.png"
import item4 from "assets/img/KoJaem/covernat/item4.png"
import item5 from "assets/img/KoJaem/covernat/item5.png"
import flash from "assets/img/KoJaem/flash.png"

type sliderType = [sliderRef: RefObject<HTMLDivElement>, slider: KeenSlider];
export const View3D = () => {
  const [pause, setPause] = useState(false);
  const [url, setUrl] = useState("");
  const [showCody, setShowCody] = useState(false);
  const timer = useRef<NodeJS.Timeout>();

  const [sliderRef, slider]: sliderType = useKeenSlider({
    slidesPerView: 3,
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

  const changingUrl = (url:string) => {
      setUrl(url)
  }

  return (
    <Wrapper>
      <CodyWrapper>
      <CodyImage
      src={url}
      animate={{
        opacity : showCody ? [0,1] : [1,0],
        transition : {
          delay : showCody ? 0.5 : 0,
        }
      }}
      onClick={() => setShowCody(false)}
      />
      <Flash 
      src={flash}
      animate={{
        opacity : showCody ? [0,0.5,0] : 0,
      }}
      />
      </CodyWrapper>
      <ImageUl
        ref={sliderRef}
        className="keen-slider"
        initial={{ opacity: 0, y: 50 }}
        animate={{ 
          display: showCody ? undefined : 'flex',
          opacity: showCody ? [1,0] : [0,1],
          y: 0 ,
          rotateX: 20,
          transition: {
            delay: showCody ? 0 : 0.5
          },
          transformPerspective:300,
          transitionEnd: {
            display: showCody ? 'none' : undefined,
          }
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <SlideImage3D
          className="keen-slider__slide number-slide1"
          src={item1}
          changingUrl={changingUrl}
          setShowCody={setShowCody}
        />
        <SlideImage3D
          className="keen-slider__slide number-slide2"
          src={item2}
          changingUrl={changingUrl}
          setShowCody={setShowCody}
        />
        <SlideImage3D
          className="keen-slider__slide number-slide3"
          src={item3}
          changingUrl={changingUrl}
          setShowCody={setShowCody}
        />
        <SlideImage3D
          className="keen-slider__slide number-slide4"
          src={item4}
          changingUrl={changingUrl}
          setShowCody={setShowCody}
        />
        <SlideImage3D
          className="keen-slider__slide number-slide5"
          src={item5}
          changingUrl={changingUrl}
          setShowCody={setShowCody}
        />
      </ImageUl>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  position: relative;
  background-color: green;
  width: 100%;
  height: 200vh;
  display: flex;
  flex-direction: column;
  text-align: center;
`;
const ImageUl = styled(motion.div)`
  display: flex;
  // background-color: black;
`;

const CodyWrapper = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
`;
const CodyImage = styled(motion.img)`
  margin-top: 70vh;
  width: 50vh;
  height: 50vh;
  overflow: hidden;
`;

const Flash = styled(motion.img)`
  position: absolute;
  margin-top:20vh;
  width: 100%;
  height: 150vh;
  pointer-events: none;
`;