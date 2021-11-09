import React from "react";
import styled from "@emotion/styled";
import { BsCaretUpSquareFill, BsCaretDownSquareFill } from "react-icons/bs";
import { color } from "../constants";
// import { motion } from "framer-motion";

export const ScrollBtn: React.FC = () => {
  const pageDown = () => {
    window.scrollBy({
      top: 950,
      left: 0,
      behavior: "smooth",
    });
  };
  const pageUp = () => {
    window.scrollBy({
      top: -950,
      left: 0,
      behavior: "smooth",
    });
  };
  const pageUpUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <BtnBox>
      <UpUpBtn onClick={pageUpUp} />
      <UpBtn onClick={pageUp} />
      <DownBtn onClick={pageDown} />
    </BtnBox>
  );
};
const BtnBox = styled.div`
  z-index: 2;
`;

const UpUpBtn = styled(BsCaretUpSquareFill)`
  width: 50px;
  height: 50px;
  color: ${color.gold_dark};
  position: fixed;
  right: 170px;
  bottom: 10px;
  cursor: pointer;
  transition: transform 100ms ease-in;
  &:hover {
    transform: scale(1.1);
  }
`;
const UpBtn = styled(BsCaretUpSquareFill)`
  width: 50px;
  height: 50px;
  color: ${color.gold_dark};
  position: fixed;
  right: 100px;
  bottom: 10px;
  cursor: pointer;
  transition: transform 100ms ease-in;
  &:hover {
    transform: scale(1.1);
  }
`;
const DownBtn = styled(BsCaretDownSquareFill)`
  width: 50px;
  height: 50px;
  color: ${color.gold_dark};
  position: fixed;
  right: 30px;
  bottom: 10px;
  cursor: pointer;
  transition: transform 100ms ease-in;
  &:hover {
    transform: scale(1.1);
  }
`;
