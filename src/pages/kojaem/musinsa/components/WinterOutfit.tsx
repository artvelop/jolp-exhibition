import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { MidImage } from './MidImage';

const options = {threshold: [0.2,0.3,0.4]};
const season = "Winter";
const seasonTitle = "무신사의 따뜻한 겨울 코디";
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
      animate={{
        opacity: show ? [0, 1] : 0,
        y: show ? [50,-50,0] : 0,
        scale: show ? [1, 1.2, 1] : 1,
        rotateZ: show? [0,20,0] : 0,
        textShadow: show
          ? "1px 1px 5px #f59db9"
          : "text-shadow: 0px 0px 0px #f59db9",
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
    rotate: show? [5,0]: 0,
    opacity: show? [0,1]: 0,
  }}
  >
      <TitleWrapper>
        {titleArray.map((item, index) => makeText(item, index))}
      </TitleWrapper>
        <MidImageContainer>
        <MidImage season={season} show = {showImg1} index={1}
        />
        <MidImage season={season} show = {showImg2} index={2}
        />
        <MidImage season={season} show = {showImg3} index={3}
        />
        </MidImageContainer>
    </Wrapper>
  );
};


const Wrapper = styled(motion.div)`
  background: linear-gradient(to top right, #ffc180, #bddfff);
  width: 100%;
  height: 100%;
  display:flex;
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
  opacity:0;
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