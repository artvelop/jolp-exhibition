import styled from "@emotion/styled";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
type Props = {
  setOnLoading: React.Dispatch<React.SetStateAction<boolean>>;
  LoadingSrc: string;
  LoadingBackgroundColors: string[];
};
export const Loading = ({ setOnLoading, LoadingSrc, LoadingBackgroundColors }: Props) => {
  const loadingRef = useRef<HTMLSpanElement>(null);
  function delay(time: number) {
    return new Promise((res) => {
      setTimeout(() => {
        res(null)
      }, time)
    })
  }
  const imageUrl = require(`assets/img/KoJaem/${LoadingSrc}`).default;

  useEffect(() => {
    const tick = async () => {
      await delay(4500);
      setOnLoading(false);
    }
    tick();
    return () => setOnLoading(false)
  }, [setOnLoading]);

  return (
    <Wrapper
      animate={{
        backgroundColor: [
          LoadingBackgroundColors[0],
          LoadingBackgroundColors[1],
        ],
        transition: { duration: 3 },
      }}
    >
      <LoadingImageWrapper>
        <LoadingImage
          imageUrl={imageUrl}
          initial={{ width: "0%" }}
          animate={{
            width: "100%",
            transition: {
              duration: 3,
              ease: "easeOut",
            },
            transitionEnd: {
              opacity: 0,
            },
          }}
          ref={loadingRef}
        />
      </LoadingImageWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  position: relative;
  height: 100vh;
  text-align: center;
  display: flex;
  justify-content: center;
`;

const LoadingImage = styled(motion.span)<{ imageUrl: string }>`
  position: absolute;
  height: 90%;
  left: 0;
  bottom: 0;
  right: 0;
  transition: opacity 500ms linear;
  background: no-repeat url(${props => props.imageUrl}) 0 100%;
  // background: no-repeat url('../koJaem/img/musinsa/musinsa_logo.png') 0 100%;
  // background-position: 0 100%;
  background-size: auto 100%;
  overflow: visible;
`;

const LoadingImageWrapper = styled(motion.div)`
  width: 200px;
  height: 90px;
  position: absolute;
  bottom: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
`;