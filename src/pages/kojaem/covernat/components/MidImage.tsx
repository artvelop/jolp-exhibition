import styled from '@emotion/styled';
import { motion, MotionStyle } from "framer-motion";
import { Ref, useEffect, useRef, useState } from "react";

type Props = {
    src:string,
    show:boolean
}
export const MidImage = ({src,show}:Props) => {
  const [hover, setHover] = useState(false);
  const [click, setClick] = useState(false);
  const imageRef:Ref<HTMLImageElement> = useRef(null);
  
  const onClickEvent = () => {
    if(!click) {
      const imageClickSrc = imageRef.current!.src.replace(/.jpg/gi,"") + "Click.jpg";
      imageRef.current!.src = imageClickSrc;
      setClick(!click);
      console.log(imageClickSrc)
    }
    else {
      const imageSrc = imageRef.current!.src.replace(/Click.jpg/gi,"") + ".jpg";
      imageRef.current!.src = imageSrc;
      setClick(!click);
      console.log(imageSrc)
    }
    // const imgSrc = imageRef.current!.src.slice(-9,-4)
    // if(imgSrc!="Click") {
    //   const imageClickSrc = imageRef.current!.src.replace(/.jpg/gi,"") + "Click.jpg";
    //   imageRef.current!.src = imageClickSrc;
    //   setClick(!click);
    //   console.log(imageClickSrc)
    // }
    // else {
    //   const imageSrc = imageRef.current!.src.replace(/Click.jpg/gi,"") + ".jpg";
    //   imageRef.current!.src = imageSrc;
    //   setClick(!click);
    //   console.log(imageSrc)
    // }
  }

  return (
    <Wrapper
    onMouseOver={() => setHover(true)}
    onMouseOut={() => setHover(false)}
    onClick={onClickEvent}
    >
      <Image src={src}
        ref={imageRef}
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