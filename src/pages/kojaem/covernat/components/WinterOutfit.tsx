import styled from "@emotion/styled";
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { GenderChart } from './GenderChart';
import { MidImage } from './MidImage';

const options = {threshold: [0.1,0.2,0.3,0.4]};
const season = "Winter";
const seasonTitle = "커버낫의 따뜻한 겨울 코디";
const titleArray = seasonTitle.split("");
export const WinterOutfit = () => {
  const [show, setShow] = useState(false);
  const [showImg1, setShowImg1] = useState(false);
  const [showImg2, setShowImg2] = useState(false);
  const [showImg3, setShowImg3] = useState(false);
  const seasonRef = useRef<HTMLDivElement>(null);
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
      animate={{
        opacity: show ? [0, 1] : 0,
        y: show ? [50,-50,0] : 0,
        scale: show ? [1, 1.2, 1] : 1,
        rotateZ: show? [0,20,0] : 0,
        textShadow: show
          ? "white 1px 1px 5px"
          : "text-shadow: white 0px 0px 0px",
      }}
      transition={{
        duration: show ? 1 : undefined,
        delay: show ? index * 0.05 : undefined
        }}
    >
      {item}
    </Title>
);

return (
  <Wrapper ref={seasonRef}
  animate={{
    rotate: show? [1,0]: 0,
    opacity: show? [0.8,1]: 0.8,
  }}
  >
      <TitleWrapper>
        {titleArray.map((item, index) => makeText(item, index))}
      </TitleWrapper>
        <MidImageContainer>
        <MidImage src={`/kojaem/img/covernat/${season}Image1.jpg`} show = {showImg1}
        />
        <MidImage src={`/kojaem/img/covernat/${season}Image2.jpg`} show = {showImg2}
        />
        <MidImage src={`/kojaem/img/covernat/${season}Image3.jpg`} show = {showImg3}
        />
        </MidImageContainer>
    </Wrapper>
  );
};


const Wrapper = styled(motion.div)`
  background-color: black;
  width: 100%;
  height: 100%;
  display:flex;
  flex-direction: column;
  opacity: 0.8;
`;
const TitleWrapper = styled(motion.div)`
  display:flex;
  white-space: pre;
  margin-left: auto;
  margin-right: auto;
`;
const Title = styled(motion.div)`
  color:white;
  opacity:0;
  font-size: 4vw;
  margin-top: 20vh;
  align-self: center;
`;
const MidImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width:100%;
  margin-top: 10vh;
`;