import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Dispatch, useState } from "react";

type Props = {
  className: string;
  src: string;
  setPause: Dispatch<React.SetStateAction<boolean>>;
};
export const SlideImage = ({ className, src, setPause }: Props) => {
  const [isClick, setIsClick] = useState(false);
  const clickEvent = () => {
    setPause(!isClick);
    setIsClick(!isClick);
  };
  return (
    <>
      <Image
        className={className}
        src={src}
        onClick={() => clickEvent()}
        animate={{
          zIndex: isClick ? 1000 : 0,
        }}
      ></Image>
      <Colored
        animate={{
          width: isClick ? "100vw" : 0,
          height: isClick ? "100vh" : 0,
          zIndex: isClick ? 999 : 0,
          opacity: isClick ? 0.9 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeIn",
        }}
        onClick={() => clickEvent()}
      />
    </>
  );
};

const Image = styled(motion.img)``;

const Colored = styled(motion.div)`
  background-color: white;
  position: fixed;
  top: 0px;
`;
