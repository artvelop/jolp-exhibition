import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const Description = () => {
  const [first, setFirst] = useState(true);

  const nextButtonIcon = <FontAwesomeIcon icon={faArrowRight} />;

  const transition = {
    duration: 1,
  };
  const imageVariants = {
    hidden: {
      x: "-10%",
      opacity: 0,
      transition,
      transitionEnd: { display: "none" },
    },
    show: {
      display: "flex",
      x: "0%",
      opacity: 1,
      transition,
    },
  };

  const descriptionVariants = {
    hidden: {
      opacity: 0,
      transition,
      transitionEnd: { display: "none" },
    },
    show: {
      display: "flex",
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 1,
        ...transition,
      },
    },
  };

  const descriptionContents = {
    hidden: {
      y: 50,
      opacity: 0,
      transition,
    },
    show: {
      y: 0,
      opacity: 1,
      transition,
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
      <RightWrapper
        variants={descriptionVariants}
        initial="hidden"
        animate={first ? "show" : "hidden"}
      >
        <BrandName variants={descriptionContents}>Covernat</BrandName>
        <Intro variants={descriptionContents}>
          커버낫(COVERNAT)은 COVER-(다루다) NAT-Needle And Thread-(바늘과 실)의
          합성어로, 의복에 있어 기본 요소라 할수 있는 바늘과 실.
          <br />그 바늘과 실이라는 기본에서 시작하여 기본에 충실한 옷을
          다룬다라는 의미를 가지고 있습니다.
        </Intro>
        <NextButton
          onClick={() => setFirst(false)}
          variants={descriptionContents}
          initial={{ y: 0, opacity: 0 }}
          animate={{
            x: [-50, 0],
          }}
          transition={{
            delay: 2,
            duration: 2,
            repeat: Infinity,
          }}
        >
          {nextButtonIcon}
        </NextButton>
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
  //   display: flex;
  flex-direction: column;
  text-align: center;
  padding: 35px;
  @media screen and (max-width: 600px) {
    padding: 0;
  }
`;

const BrandName = styled(motion.h1)`
  margin-top: 100px;
  font-size: 30px;
  color: white;

  @media screen and (max-width: 600px) {
    margin: 20px 0 20px 0;
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
  padding: 0px 35px 35px 35px;
  margin-top: 100px;

  @media screen and (max-width: 600px) {
    margin-top: 0px;
    width: 90vw;
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
  //   display: flex;
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
  }
`;
