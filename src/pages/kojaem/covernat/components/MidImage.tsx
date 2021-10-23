import styled from '@emotion/styled';
import { motion, MotionStyle } from "framer-motion";
import { Ref, useEffect, useRef, useState } from "react";
import Covernat from "./../Covernat";

const options = {threshold: 0.45}
type Props = {
    src:string,
    show:any
    // style: MotionStyle
}
export const MidImage = ({src,show}:Props) => {
  const [hover, setHover] = useState(false);
  const [click, setClick] = useState(false);
  const imageRef:Ref<HTMLImageElement> = useRef(null);
  // useEffect(() => {
  //   const observer = new IntersectionObserver(([entry]) => {
  //       if(entry.isIntersecting) {
  //         setShow(true);
  //       }
  //       else {
  //         setShow(false)
  //       }
  //   },options)

  //   if(imageRef.current) {
  //     observer.observe(imageRef.current)
  //   }
  //   return () => {
  //     observer.disconnect();
  //   }
  // }, [])
  
  const onClickEvent = () => {
    if(!click) {
      const imageHoverSrc = imageRef.current!.src.replace(/.jpg/gi,"") + "Hover.jpg";
      imageRef.current!.src = imageHoverSrc;
      setClick(!click);
    }
    else {
      const imageHoverOutSrc = imageRef.current!.src.replace(/Hover.jpg/gi,"") + ".jpg";
      imageRef.current!.src = imageHoverOutSrc;
      setClick(!click);
    }
  }




  return (
    <Wrapper
    onMouseOver={() => setHover(true)}
    onMouseOut={() => setHover(false)}
    onClick={onClickEvent}
    >
      <Image src={src}
        ref={imageRef}
        // style={style}
        animate={{
          y: show? [100,0] : 0,
          opacity: show? [0,1] : 0,
          transition: {duration:1},
          rotateY: hover ? 180 : 0
        }}

        />
      </Wrapper>
  );
};

const Wrapper = styled.div`
`;
const Image = styled(motion.img)`
  width:30vw;
  pointer-events: none;
`;