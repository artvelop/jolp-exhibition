import styled from "@emotion/styled";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

type Props = {
  setOnLoading: React.Dispatch<React.SetStateAction<boolean>>,
};

export const Loading = ({ setOnLoading }: Props) => {
  const loadingRef = useRef<HTMLSpanElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  function delay(time: number) {
    return new Promise((res) => {
      setTimeout(() => {
        res(null)
      }, time)
    })
  }

  // useEffect(() => {
  //   const tick = async () => {
  //     await delay(5000);
  //     setOnLoading(false);
  //   }
  //   tick();
  //   return () => setOnLoading(false)
  // }, [setOnLoading]);

  return (
    <LoadingWrapper
    animate={{
      backgroundColor : ['#ddc4f5','#f5c4dc'],
      transition:{duration:3}
    }}
    >
      
      <LoadingImage
        ref={imageRef}
      >
        <Colored
        initial={{ height: '0%' }}
        animate={{
          height: '70%',
          transition: {
            duration: 3.5,
            ease: 'easeOut'
          },
        }}
        ref={loadingRef}
      />
      </LoadingImage>
    </LoadingWrapper>
  );
};

const LoadingWrapper = styled(motion.div)`
  position: relative;
  height: 100vh;
  text-align: center;
  display: flex;
  justify-content: center;
`;

const Colored = styled(motion.span)`
    position: absolute;
    width: 120px;
    height: 100%;
    left: 0;
    bottom: 0;
    right: 0;
    transition: opacity 500ms linear;
    background: no-repeat url('../koJaem/img/kirsh/logo_filled.png') 0 100%;
    background-size: 100% auto;
}
`;

const LoadingImage = styled(motion.div)`
  width: 120px;
  height: 130px;
  position: absolute;
  bottom: 50vh;
  left: 50vw;
  background: no-repeat center url('../koJaem/img/kirsh/kirsh_logo.png');
  transform: translate(-50%, -50%);
  background-size: 100% auto;
`;