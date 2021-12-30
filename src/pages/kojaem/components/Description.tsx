import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
type Props = {
  setFirst: React.Dispatch<React.SetStateAction<boolean>>;
  BrandImageSrc: string;
  Introduce: string;
  BrandName: string;
  BrandNameColors: string[];
  NextButtonColor: string;
};
export const Description = ({ setFirst, BrandImageSrc, Introduce, BrandName, BrandNameColors, NextButtonColor }: Props) => {
  const nextButtonIcon = <FontAwesomeIcon icon={faArrowRight} />;
  const [show, setShow] = useState(true);
  const introContents = Introduce.split('\n').map((text, index) => {
    return(
      <div key={index}>
      {text}
      <br />
      </div>)
    });

  const imageUrl = require(`assets/img/KoJaem/${BrandImageSrc}`).default;
  const showNext = () => {
    setShow(false);
    setTimeout(() => {
      setFirst(false);
    }, 4000);
  };
  useEffect(() => {
    return () => setFirst(false);
  }, [setFirst]);

  return (
    <Wrapper>
      <BrandImage
        src={imageUrl}
        alt="brand"
        animate={{
          width: show ? "40%" : "0%",
          display: show ? "flex" : undefined,
          x: show ? [-20, 0] : 0,
          opacity: show ? [0, 1] : 0,
          transition: show ? { duration: 1 } : { duration: 2 },
          transitionEnd: show ? { display: "flex" } : { display: "none" },
        }}
      />
      <RightWrapper animate={show ? undefined : { width: "100%" }}>
        <BrandNameWrapper
          BrandNameColors={BrandNameColors}
          initial={{
            translateX: "-50%",
          }}
          animate={{
            opacity: show ? [0, 1] : 1,
            top: show ? "10%" : "0%",
            y: show ? [50, 0] : 0,
            scale: show ? undefined : [1, 2, 1.5],
            rotate: show ? undefined : [0, 360],
            transition: show ? { delay: 1 } : { delay: 1, duration: 1.5 },
          }}
        >
          {BrandName}
        </BrandNameWrapper>
        <Intro
          textShadow={BrandNameColors[1]}
          animate={{
            opacity: show ? [0, 1] : [1, 0],
            y: show ? [50, 0] : [0, 50],
            transitionEnd: show ? { display: "flex" } : { display: "none" },
            transition: show ? { delay: 2 } : { duration: 0.5 },
          }}
        >
          {introContents}
        </Intro>
        <NextButton
          NextButtonColor={NextButtonColor}
          initial={{ opacity: 0 }}
          animate={{
            opacity: show ? 1 : [1, 0],
            x: show ? [-50, 0] : undefined,
            transitionEnd: show ? { display: "flex" } : { display: "none" },
            transition: show
              ? { delay: 3, duration: 1.5, repeat: Infinity }
              : { duration: 0.5 },
          }}
          onClick={() => showNext()}
        >
          {nextButtonIcon}
        </NextButton>
      </RightWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  display: flex;
  width: 100%;
  height: 100vh;
`;
const BrandImage = styled(motion.img)`
  width: 40%;
  max-width: 800px;
  overflow: hidden;
`;

const RightWrapper = styled(motion.div)`
  position: relative;
  width: 60%;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const BrandNameWrapper = styled(motion.h1)<{ BrandNameColors: string[] }>`
  position: absolute;
  left: 50%;
  font-size: 30px;
  color: ${props => props.BrandNameColors[0]};
  text-shadow: 1px 1px 5px ${props => props.BrandNameColors[1]};
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

const Intro = styled(motion.h1)<{ textShadow: string }>`
  margin: 0;
  flex-direction: column;
  font-size: 2vw;
  text-align: left;
  padding: 20px 35px 20px 35px;
  margin-top: 320px;
  text-shadow: 1px 1px 3px ${props => props.textShadow};
`;

const NextButton = styled(motion.div)<{NextButtonColor:string}>`
  display: flex;
  margin-left: auto;
  margin-right: 5vw;
  color: ${(props) => props.NextButtonColor};
  font-size: 70px;
  cursor: pointer;
`;

