import styled from "@emotion/styled";
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { GenderChart } from './GenderChart';
import { MidImage } from './MidImage';
import { ChangingSeasonOutfit } from "./ChangingSeasonOutfit";
import { WinterOutfit } from "./WinterOutfit";
import { SummerOutfit } from './SummerOutfit';

const options = { threshold: 0.1 }
const seasons = ["ChangingSeason","Summer","Winter"];
let index = 0;
export const Mid = () => {
  const [show, setShow] = useState(false);
  const [season, setSeason] = useState(seasons[index])
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
        {index == 0 ? <ChangingSeasonOutfit /> : index == 1 ? <WinterOutfit /> : <SummerOutfit />}
        <NextButton
        onClick = {() => nextSeason()}
        >{nextButtonIcon}</NextButton>
      </Wrapper>
  );
};


const Wrapper = styled(motion.div)`
  background-color: white;
  width: 100vw;
  height: 200vh;
  display:flex;
  flex-direction: column;
`;

const NextButton = styled(motion.div)`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  color: darkolivegreen;
  font-size: 70px;
  cursor: pointer;
`;