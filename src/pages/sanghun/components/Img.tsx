import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

type TopContentType = {
  src: string;
};

export const Img: React.FC<TopContentType> = ({ src }) => {
  return <ImgWrap src={src}></ImgWrap>;
};

const ImgWrap = styled(motion.img)`
  width: 36%;
`;
export default Img;
