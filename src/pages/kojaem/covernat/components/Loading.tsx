import styled from "@emotion/styled";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

type Props = {
  setIsLoading: (loading: boolean) => void;
};

export const Loading = ({ setIsLoading }: Props) => {
  const loadingRef = useRef<HTMLSpanElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const tick = setTimeout(() => {
      loadingRef.current!.style.opacity = "0";
      imageRef.current!.style.opacity = "0";
    }, 3000);
    return () => clearTimeout(tick);
  });

  useEffect(() => {
    const tick = setTimeout(() => {
      setIsLoading(true);
    }, 4000);
    return () => clearTimeout(tick);
  });

  return (
    <LoadingWrapper>
      <Colored
        initial={{ height: 0 }}
        animate={{ height: 60 }}
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
    bottom: 54%;
    transition: height 2000ms, opacity 300ms linear;
    background-color: #37664d;
}
`;

const LoadingImage = styled(motion.img)`
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: opacity 1500ms linear;
`;
