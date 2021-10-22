import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { MidImage } from './MidImage';

const options = {threshold: 0.1}
export const Mid = () => {
  const [show, setShow] = useState(false);
  const midRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
        if(entry.isIntersecting) {
          setShow(true);
        }
        else {
          setShow(false)
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
        <Title>편안한 커버낫의 가을 코디</Title>
        <MidImageContainer>
        <MidImage src="/kojaem/img/covernat/MidImage1.jpg"
        />
        <MidImage src="/kojaem/img/covernat/MidImage2.jpg"
        />
        <MidImage src="/kojaem/img/covernat/MidImage3.jpg"
        />
        </MidImageContainer>
      </Wrapper>
  );
};


const Wrapper = styled(motion.div)`
  background-color: #f7ebcb;
  width: 100vw;
  display:flex;
  flex-direction: column;
`;
const Title = styled(motion.div)`
  color:white;
  text-shadow: 1px 1px 5px black;
  font-size: 4vw;
  margin-top: 10vh;
  align-self: center;
`;
const MidImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width:100%;
  margin-top: 10vh;
`;
// const Img1 = {
//   marginTop:'10%',
//   marginLeft: '10%',
//   width:'20%',
//   height:'20%',
// };
// const Img2 = {
//   marginTop: '70%',
//   marginLeft: 'auto',
//   marginRight: '10%',
//   width:'20%',
//   height:'20%',
// };