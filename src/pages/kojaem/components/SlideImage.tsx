import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Dispatch, useState } from "react";

type Props = {
  className: string;
  src: string;
  setPause: Dispatch<React.SetStateAction<boolean>>;
  text?: string;
  smallBrandName: string;
};
export const SlideImage = ({ className, src, setPause, text, smallBrandName }: Props) => {
  const [isClick, setIsClick] = useState(false);
  const [dragging, setDragging] = useState(false);
  const showBackground = () => {
    if(!dragging)
      clickEvent();
  };
  const clickEvent = () => {
    setPause(!isClick);
    setIsClick(!isClick);
  }
  const index = className.charAt(className.length - 1);
  return (
    <>
      <Image
        className={className}
        src={src}
        onMouseMove={() => {setDragging(true)}}
        onClick={() => showBackground()}
        onMouseDown={()=>{setDragging(false)}}
      ></Image>
      <Background
        src={require(`assets/img/KoJaem/${smallBrandName}/top/background_${index}.jpg`).default}
        animate={{
          display: isClick ? "flex" : undefined,
          zIndex: isClick ? 999 : 0,
          opacity: isClick ? 1 : 0,
          transitionEnd: { display: isClick ? undefined : "none" },
        }}
        transition={{
          duration: 0.3,
          ease: "easeIn",
        }}
        onClick={() => clickEvent()}
      />
      {text ? (
        <Text
          animate={{
            display: isClick ? "flex" : "none",
            top: "80vh",
            left: "50vw",
            height: "100px",
            zIndex: isClick ? 1001 : 0,
          }}
          transition={{ delay: 0.1 }}
        >
          {text}
        </Text>
      ) : null}
    </>
  );
};

const Image = styled(motion.img)`
  background-color: white;
`;

const Background = styled(motion.img)`
  background-color: white;
  position: fixed;
  top: 0px;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const Text = styled(motion.div)`
  position: fixed;
  color: white;
  font-size: 24px;
  transform: translate(-50%);
`;
