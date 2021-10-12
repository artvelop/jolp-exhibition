import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { ImageBanner } from "./ImageBanner";

export const Description = () => {
  const [first, setFirst] = useState(true);
  const nextButtonIcon = <FontAwesomeIcon icon={faArrowRight} />;

  const imageVariants = {
    hidden: {
      x: "-10%",
      opacity: 0,
      transition: { duration: 0.5 },
      transitionEnd: { display: "none" },
    },
    show: {
      display: "flex",
      x: "0%",
      opacity: 1,
      transition: { duration: 1 },
    },
  };

  return (
    <Wrapper>
      <BrandImage
        src={`/koJaem/img/covernat/covernat1.jpg`}
        alt="brand"
        variants={imageVariants}
        initial="hidden"
        animate={first ? "show" : "hidden"}
      />
      <RightWrapper animate={first ? undefined : { width: "100vw" }}>
        <BrandName
          animate={{
            opacity: first ? [0, 1] : 1,
            top: first ? "150px" : "70px",
            left: first ? "62%" : "50%",
            translateX: first ? undefined : "-50%",
            y: first ? [50, 0] : 0,
            scale: first ? undefined : [1, 2, 1.5],
            rotate: first ? undefined : [0, 360],
            transition: first ? { delay: 1 } : { delay: 1.5, duration: 1.5 },
          }}
        >
          Covernat
        </BrandName>
        <Intro
          animate={{
            opacity: first ? [0, 1] : [1, 0],
            y: first ? [50, 0] : [0, 50],
            transitionEnd: first ? { display: "flex" } : { display: "none" },
            transition: first ? { delay: 2 } : { duration: 0.5 },
          }}
        >
          커버낫(COVERNAT)은 COVER-(다루다) NAT-Needle And Thread-(바늘과 실)의
          합성어로, 의복에 있어 기본 요소라 할수 있는 바늘과 실.
          <br />그 바늘과 실이라는 기본에서 시작하여 기본에 충실한 옷을
          다룬다라는 의미를 가지고 있습니다.
        </Intro>
        <NextButton
          initial={{ opacity: 0 }}
          animate={{
            opacity: first ? 1 : [1, 0],
            x: first ? [-50, 0] : 0,
            transitionEnd: first ? { display: "flex" } : { display: "none" },
            transition: first
              ? { delay: 3, duration: 1.5, repeat: Infinity }
              : { duration: 0.5 },
          }}
          onClick={() => setFirst(false)}
        >
          {nextButtonIcon}
        </NextButton>
        {first ? null : <ImageBanner />}
      </RightWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  display: flex;
  width: 100vw;
  height: 100vh;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const RightWrapper = styled(motion.div)`
  width: 50vw;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const BrandName = styled(motion.h1)`
  position: absolute;
  left: 62%;
  font-size: 30px;
  color: white;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 600px) {
    position: absolute;
    font-size: 40px;
    width: 100vw;
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

const Intro = styled(motion.h1)`
  margin: 0;
  font-size: 20px;
  text-align: left;
  padding: 20px 35px 35px 90px;
  margin-top: 320px;

  @media screen and (max-width: 600px) {
    margin-top: 10px;
    width: 90vw;
    padding: 0px 25px 35px 25px;
  }
  @media screen and (min-width: 800px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1000px) {
    font-size: 23px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 25px;
  }
`;

const NextButton = styled(motion.div)`
  display: flex;
  margin-left: auto;
  color: darkolivegreen;
  font-size: 70px;
  cursor: pointer;
`;

const BrandImage = styled(motion.img)`
  width: 50vw;
  max-width: 800px;
  overflow: hidden;
  @media screen and (max-width: 600px) {
    margin-top: 20px;
    width: 100vw;
    overflow: hidden;
    z-index: 1;
  }
`;
