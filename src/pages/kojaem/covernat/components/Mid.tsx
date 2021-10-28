import styled from "@emotion/styled";
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { GenderChart } from './GenderChart';
import { MidImage } from './MidImage';

const options = {threshold: [0.1,0.2,0.3,0.4]}
const seasons = ["ChangingSeason","Summer","Winter"];
const seasonTitle = [
  "커버낫의 편안한 환절기 코디",
  "커버낫의 시원한 여름 코디",
  "커버낫의 따뜻한 겨울 코디"]
let index = 0;
export const Mid = () => {
  const [show, setShow] = useState(false);
  const [season, setSeason] = useState(seasons[index])
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

  const nextSeason = () => {
    if(index < seasons.length-1) {
      index++;
      setSeason(seasons[index])
    }
    else {
      index = 0;
      setSeason(seasons[index])
    }
  }


  return (
      <Wrapper
      ref={midRef}
      animate={{
        y: show ? [20,0] : 0,
        opacity: show ? [0,1] : 0,
        transition:{duration:0.5}
      }}
      >
        <Title>{seasonTitle[index]}</Title>
        <MidImageContainer>
        <MidImage src={`/kojaem/img/covernat/${season}Image1.jpg`} show = {showImg1}
        />
        <MidImage src={`/kojaem/img/covernat/${season}Image2.jpg`} show = {showImg2}
        />
        <MidImage src={`/kojaem/img/covernat/${season}Image3.jpg`} show = {showImg3}
        />
        </MidImageContainer>
        <NextButton
        onClick = {() => nextSeason()}
        >{nextButtonIcon}</NextButton>
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