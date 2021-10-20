import { motion, MotionStyle } from "framer-motion";
import { Ref, useEffect, useRef, useState } from "react";

const options = {threshold: 0.5}
type Props = {
    src:string,
    style: MotionStyle
}
export const MidImage = ({src,style}:Props) => {
  const [show, setShow] = useState(false);
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



  return (
      <motion.img src={src}
        ref={imageRef}
        style={style}
        animate={{
          y: show? [50,0] : 0,
          opacity: show? [0,1] : 0,
          transition: {duration:1}
        }}
        />
  );
};