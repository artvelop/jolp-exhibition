import styled from "@emotion/styled";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

type Props = {
  setOnLoading: React.Dispatch<React.SetStateAction<boolean>>,
};

export const Loading = ({ setOnLoading: setOnLoading }: Props) => {
  const loadingRef = useRef<HTMLSpanElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
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
    <LoadingWrapper>
      <Colored
        initial={{ height: 0 }}
        animate={{ 
          height: 68,
          transition: {
            duration:2.5,
            ease: 'easeOut'
          },
          transitionEnd: {
            opacity:0,
          }          
        }}
        exit={{ opacity: 0 }}
        ref={loadingRef}
      />

      <LoadingImage
        src="/koJaem/img/covernat/Covernat_logo.png"
        ref={imageRef}
      />
    </LoadingWrapper>
  );
};

const LoadingWrapper = styled.div`
  position: relative;
  height: 100vh;
  text-align: center;
  display: flex;
  justify-content: center;
  background-color: #d7d7d5;
`;

const Colored = styled(motion.span)`
    position: absolute;
    width: 240px;
    height: 0px;
    left: 50vw;
    bottom: 50vh;
    transform: translate(-120px, -34px);
    transition: opacity 500ms linear;
    background-color: #37664d;
}
`;

const LoadingImage = styled(motion.img)`
  width: 240px;
  height: 68px;
  position: absolute;
  bottom: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
`;