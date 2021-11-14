import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import LmcDescription from 'assets/img/KoJaem/lmc/LmcDescription.jpg'

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
        src={LmcDescription}
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
            translateX: "-50%",
          }}
          animate={{
            opacity: show ? [0, 1] : 1,
            top: show ? "10%" : "0%",
            y: show ? [50,0] : 0,
            scale: show ? undefined : [1, 2, 1.5],
            rotate: show ? undefined : [0, 360],
            transition: show ? { delay: 1 } : { delay: 1, duration: 1.5 },
          }}
        >
          LMC
        </BrandName>
        <Intro
          animate={{
            opacity: show ? [0, 1] : [1, 0],
            y: show ? [50, 0] : [0, 50],
            transitionEnd: show ? { display: "flex" } : { display: "none" },
            transition: show ? { delay: 2 } : { duration: 0.5 },
          }}
        >
          Lost Manegement Cities. LMC는 Lost Manegement Cities라는 뜻이다.<br />
          그 의미처럼 LMC는 통제를 잃은 도시를 표현하려고 항상 노력해왔다.<br />
          도시 안에서 발생하는 불안함과 자유로움의 괴리에서 나오는 사회적인 문화를 옷에 표현하고자한다.
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
  @media screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
  }
`;
const BrandImage = styled(motion.img)`
  width: 40%;
  max-width: 800px;
  overflow: hidden;
  @media screen and (max-width: 600px) {
    margin-top: 20px;
    width: 100%;
    overflow: hidden;
    z-index: 1;
  }
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
  color: #c08bc7;
  text-shadow: 1px 1px 5px #0c0c4f;
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
  margin-right: 5vw;
  color: #84618f;
  font-size: 70px;
  cursor: pointer;
`;

