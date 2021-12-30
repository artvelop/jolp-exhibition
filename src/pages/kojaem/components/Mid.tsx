import styled from "@emotion/styled";
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { ChangingSeasonOutfit, WinterOutfit, SummerOutfit } from "./index";
type Props = {
  SeasonDescription: string[];
  TitleShadow: string[];
  MidBackgroundColors: string[];
  BrandName:string;
};
export const Mid = ({ SeasonDescription, TitleShadow, MidBackgroundColors , BrandName}:Props) => {
  const smallBrandName = BrandName.toLowerCase();
  const [order, setOrder] = useState(0);
  const nextButtonIcon = <FontAwesomeIcon icon={faAngleRight} />;
  const midRef = useRef<HTMLDivElement>(null);

  const nextSeason = () => {
    if (order < 2) {
      setOrder(order + 1);
    } else {
      setOrder(0);
    }
  };

  return (
    <Wrapper ref={midRef}>
      {order === 0 ? (
        <ChangingSeasonOutfit
          SeasonDescription={SeasonDescription[0]}
          TitleShadow={TitleShadow[0]}
          MidBackgroundColors={MidBackgroundColors}
          smallBrandName={smallBrandName}
        />
      ) : order === 1 ? (
        <WinterOutfit
          SeasonDescription={SeasonDescription[1]}
          TitleShadow={TitleShadow[1]}
          MidBackgroundColors={MidBackgroundColors}
          smallBrandName={smallBrandName}
        />
      ) : (
        <SummerOutfit
          SeasonDescription={SeasonDescription[2]}
          TitleShadow={TitleShadow[2]}
          MidBackgroundColors={MidBackgroundColors}
          smallBrandName={smallBrandName}
        />
      )}
      <NextButton
        onClick={() => nextSeason()}
        whileHover={{
          scale: 1.2,
        }}
        whileTap={{
          scale: 0.8,
        }}
      >
        {nextButtonIcon}
      </NextButton>
    </Wrapper>
  );
};


const Wrapper = styled(motion.div)`
  position: relative;
  background-color: white;
  width: 100%;
  height: 200vh;
  display:flex;
  flex-direction: column;
  overflow: hidden;
`;

const NextButton = styled(motion.div)`
  position: absolute;
  display:flex;
  top: 106vh;
  left: 50vw;
  margin-left: auto;
  margin-right: auto;
  color: #51b87a;
  font-size: 70px;
  cursor: pointer;
`;