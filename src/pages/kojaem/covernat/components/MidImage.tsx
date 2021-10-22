import styled from '@emotion/styled';
import { motion, MotionStyle } from "framer-motion";
import { Ref, useEffect, useRef, useState } from "react";
import Covernat from "./../Covernat";

const options = {threshold: 0.45}
type Props = {
    src:string,
    // style: MotionStyle
}
export const MidImage = ({src}:Props) => {
  const [show, setShow] = useState(false);
  const [hover, setHover] = useState(false);
  const imageRef:Ref<HTMLImageElement> = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
        if(entry.isIntersecting) {
          setShow(true);
        }
        else {
          setShow(false)
        }
    },options)

    if(imageRef.current) {
      observer.observe(imageRef.current)
    }
    return () => {
      observer.disconnect();
    }
  }, [])
  const onMouseOverEvent = () => {
    setHover(true)
    setTimeout(() => {
      // const imgSrc = imageRef.current!.src.replace(/.jpg|.jpeg|.png|.gif/gi, "") + "Hover";
      const imageHoverSrc = imageRef.current!.src.replace(/.jpg/gi,"") + "Hover.jpg";
      imageRef.current!.src = imageHoverSrc;
    },500)

  }
  const onMouseOutEvent = () => {
    setHover(false)
    setTimeout(() => {
    const imageHoverOutSrc = imageRef.current!.src.replace(/Hover.jpg/gi,"") + ".jpg";
    imageRef.current!.src = imageHoverOutSrc;
  },500)

  }



  return (
    <Wrapper
    onMouseOver={onMouseOverEvent}
    onMouseOut={onMouseOutEvent}
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