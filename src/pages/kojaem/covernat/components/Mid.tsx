import styled from "@emotion/styled";
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { GenderChart } from './GenderChart';
import { MidImage } from './MidImage';

// Mid 높이가 커지면 이 값은 수정해야함
const options = {threshold: [0.1,0.2,0.3,0.4]}
export const Mid = () => {
  const [show, setShow] = useState(false);
  const [showImg1, setShowImg1] = useState(false);
  const [showImg2, setShowImg2] = useState(false);
  const [showImg3, setShowImg3] = useState(false);
  const nextButtonIcon = <FontAwesomeIcon icon={faAngleRight} />;
  const midRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
        if(entry.isIntersecting) {
          setShow(true);
        }
        else {
          setShow(false);
        }

        if(entry.intersectionRatio > 0.2) {
          setShowImg1(true);
        }
        if(entry.intersectionRatio > 0.3) {
          setShowImg2(true);
        }
        if(entry.intersectionRatio > 0.4) {
          setShowImg3(true);
        }

        if(entry.intersectionRatio < 0.2) {
          setShowImg1(false);
          setShowImg2(false);
          setShowImg3(false);
        }
    },options)

    if(midRef.current) {
      observer.observe(midRef.current)
    }
    return () => {
      observer.disconnect();
    }
  }, [])


  return (
      <Wrapper
      ref={midRef}
      animate={{
        y: show ? [20,0] : 0,
        opacity: show ? [0,1] : 0,
        transition:{duration:0.5}
      }}
      >
        <Title>편안한 커버낫의 환절기 코디</Title>
        <MidImageContainer>
        <MidImage src="/kojaem/img/covernat/MidImage1.jpg" show = {showImg1}
        />
        <MidImage src="/kojaem/img/covernat/MidImage2.jpg" show = {showImg2}
        />
        <MidImage src="/kojaem/img/covernat/MidImage3.jpg" show = {showImg3}
        />
        </MidImageContainer>
        <NextButton>{nextButtonIcon}</NextButton>
      </Wrapper>
  );
};


const Wrapper = styled(motion.div)`
  background-color: #f7ebcb;
  width: 100vw;
  height: 200vh;
  display:flex;
  flex-direction: column;
`;
const Title = styled(motion.div)`
  color:white;
  text-shadow: 1px 1px 5px black;
  font-size: 4vw;
  margin-top: 20vh;
  align-self: center;
  text-shadow: blue 1px 1px 3px;
`;
const MidImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width:100%;
  margin-top: 30vh;
`;

const NextButton = styled(motion.div)`
  display:flex;
  margin-left: auto;
  margin-right: auto;
  color: darkolivegreen;
  font-size: 70px;
  cursor: pointer;
`;