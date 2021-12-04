import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import CovernatDescription from 'assets/img/KoJaem/covernat/top/CovernatDescription.jpg'
type Props = {
  setFirst: React.Dispatch<React.SetStateAction<boolean>>,
}
export const Description = ({setFirst}:Props) => {
  const nextButtonIcon = <FontAwesomeIcon icon={faArrowRight} />;
  const [show, setShow] = useState(true);

  const showNext = () => {
    setShow(false);
    setTimeout(() => {
      setFirst(false);
    },4000)
  }
  useEffect(() => {
    return () => setFirst(false);
  }, [setFirst])

  return (
    <Wrapper>
      <BrandImage
      src={CovernatDescription}
        alt="brand"
        animate={{
          width: show ? '40%' : '0%',
          display: show ? 'flex' : undefined,
          x: show ? [-20 ,0] : 0,
          opacity: show ? [0,1] : 0,
          transition: show ? {duration:1} : {duration:2},
          transitionEnd: show ? {display:'flex'} : {display:'none'}
        }}
        
      />
      <RightWrapper animate={show ? undefined : { width: "100%" }}>
        <BrandName
          initial={{
            translateX: "-50%"
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
          COVERNAT
        </BrandName>
        <Intro
          animate={{
            opacity: show ? [0, 1] : [1, 0],
            y: show ? [50, 0] : [0, 50],
            transitionEnd: show ? { display: "flex" } : { display: "none" },
            transition: show ? { delay: 2 } : { duration: 0.5 },
          }}
        >
          커버낫(COVERNAT)은 COVER Needle And Thread 의
          합성어로, 의복에 있어 기본 요소라 할수 있는 바늘과 실.
          <br />그 바늘과 실이라는 기본에서 시작하여 기본에 충실한 옷을
          다룬다라는 의미를 가지고 있습니다.
        </Intro>
        <NextButton
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

const BrandName = styled(motion.h1)`
  position: absolute;
  left: 50%;
  font-size: 30px;
  color: #3b5e3d;
  text-shadow: 1px 1px 5px #524f4f;
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

const Intro = styled(motion.h1)`
  margin: 0;
  font-size: 2vw;
  text-align: left;
  padding: 20px 35px 20px 35px;
  margin-top: 320px;
  text-shadow: 1px 1px 4px #524f4f;
`;

const NextButton = styled(motion.div)`
  display: flex;
  margin-left: auto;
  margin-right: 5vw;
  color: #6da37e;
  font-size: 70px;
  cursor: pointer;
`;

