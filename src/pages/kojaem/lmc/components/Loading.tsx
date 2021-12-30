import styled from "@emotion/styled";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import lmcLogo from "assets/img/KoJaem/lmc/Lmc_logo.png"

type Props = {
  setOnLoading: React.Dispatch<React.SetStateAction<boolean>>,
};
export const Loading = ({ setOnLoading }: Props) => {
  const loadingRef = useRef<HTMLSpanElement>(null);
  function delay(time: number) {
    return new Promise((res) => {
      setTimeout(() => {
        res(null)
      }, time)
    })
  }

  useEffect(() => {
    const tick = async () => {
      await delay(4000);
      setOnLoading(false);
    }
    tick();
    return () => setOnLoading(false)
  }, [setOnLoading]);

  return (
    <Wrapper
    animate = {{
      backgroundColor: ["#716e84", "#8d8aa6"],
      transition: { duration: 3 },
    }}
    >
      <LoadingImageWrapper>
      <LoadingImage
          initial={{ width: "0%" }}
          animate={{
            width: "100%",
            transition: {
              duration: 3,
              ease: "easeOut",
            },
            transitionEnd: {
              opacity:0,
            }
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

const LoadingImage = styled(motion.span)`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    bottom: 0;
    right: 0;
    transition: opacity 500ms linear;
    background: no-repeat url(${lmcLogo}) 0 100%;
    background-size: auto 100%;
`;

const LoadingImageWrapper = styled(motion.div)`
  width: 200px;
  height: 69px;
  position: absolute;
  bottom: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
`;