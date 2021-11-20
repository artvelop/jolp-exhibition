import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Dispatch, useState } from "react";

type Props = {
  className: string;
  src: string;
  changingUrl : (url:string) => void;
  setShowCody : Dispatch<React.SetStateAction<boolean>>;
};
export const SlideImage3D = ({ className, src, changingUrl, setShowCody }: Props) => {
  const [dragging, setDragging] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const index = className.charAt(className.length - 1);
  const showBackground = () => {
    if(!dragging)
    {
      clickEvent();
      changingUrl(require(`assets/img/KoJaem/covernat/cody${index}.jpg`).default);
      setShowCody(true);
    }
  };
  const clickEvent = () => {
    setIsClick(!isClick);
  }
  return (
    <>
      <Image
        className={className}
        src={src}
        onMouseMove={() => {setDragging(true)}}
        onClick={() => showBackground()}
        onMouseDown={()=>{setDragging(false)}}
      ></Image>
    </>
  );
};

const Image = styled(motion.img)`
  background-color: white;
  height: 35vh;
`;
