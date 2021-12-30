import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { MidImage } from './index';

const options = {threshold: [0.2,0.3,0.4]};
const season = "Summer";
type Props = {
  SeasonDescription: string;
  smallBrandName: string;
  TitleShadow: string;
  MidBackgroundColors: string[];
};
export const SummerOutfit = ({ SeasonDescription, smallBrandName, TitleShadow, MidBackgroundColors }: Props) => {
  const [show, setShow] = useState(false);
  const [showImg1, setShowImg1] = useState(false);
  const [showImg2, setShowImg2] = useState(false);
  const [showImg3, setShowImg3] = useState(false);
  const seasonRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
        if(entry.isIntersecting) {
          setShow(true);
          setShowImg1(true);
        }
        else {
          setShow(false);
          setShowImg1(false);
          setShowImg2(false);
          setShowImg3(false);
        }
        if(entry.intersectionRatio > 0.3) {
          setShowImg2(true);
        }
        if(entry.intersectionRatio > 0.4) {
          setShowImg3(true);
        }
    },options)

    if(seasonRef.current) {
      observer.observe(seasonRef.current)
    }
    return () => {
      observer.disconnect();
    }
  }, [])

  const makeText = (item: string, index: number) => (
    <Title
      key={index}
      initial={{ opacity: 0 }}
      animate={{
        opacity: show ? [0, 1] : 0,
        y: show ? [50, -50, 0] : 0,
        scale: show ? [1, 1.2, 1] : 1,
        rotateZ: show ? [0, 20, 0] : 0,
        textShadow: show
          ? `1px 1px 5px ${TitleShadow}`
          : `0px 0px 0px ${TitleShadow}`,
      }}
      transition={{
        duration: show ? 1 : undefined,
        delay: show ? index * 0.05 : undefined,
      }}
    >
      {item}
    </Title>
  );

  return (
    <Wrapper
      MidBackgroundColors={MidBackgroundColors}
      ref={seasonRef}
      animate={{
        rotate: show ? [5, 0] : 0,
        opacity: show ? [0, 1] : 0,
      }}
    >
      <TitleWrapper>
        {SeasonDescription.split("").map((item, index) =>
          makeText(item, index)
        )}
      </TitleWrapper>
      <MidImageContainer>
        <MidImage
          season={season}
          show={showImg1}
          index={1}
          smallBrandName={smallBrandName}
        />
        <MidImage
          season={season}
          show={showImg2}
          index={2}
          smallBrandName={smallBrandName}
        />
        <MidImage
          season={season}
          show={showImg3}
          index={3}
          smallBrandName={smallBrandName}
        />
      </MidImageContainer>
    </Wrapper>
  );
};


const Wrapper = styled(motion.div)<{ MidBackgroundColors: string[] }>`
  background: linear-gradient(
    250deg,
    ${props => props.MidBackgroundColors[4]},
    ${props => props.MidBackgroundColors[5]}
  );
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  opacity: 0;
`;
const TitleWrapper = styled(motion.div)`
  display:flex;
  white-space: pre;
  margin-left: auto;
  margin-right: auto;
`;
const Title = styled(motion.div)`
  color:white;
  font-size: 4vw;
  margin-top: 25vh;
  align-self: center;
`;
const MidImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width:100%;
  margin-top: 10vh;
`;