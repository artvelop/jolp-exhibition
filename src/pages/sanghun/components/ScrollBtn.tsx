import React from "react";
import styled from "@emotion/styled";
import { BsCaretUpSquareFill, BsCaretDownSquareFill } from "react-icons/bs";

export const ScrollBtn: React.FC = () => {
  const pageDown = () => {
    window.scrollBy({
      top: 980,
      left: 0,
      behavior: "smooth",
    });
  };
  const pageUp = () => {
    window.scrollBy({
      top: -980,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <UpBtn onClick={pageUp} />
      <DownBtn onClick={pageDown} />
    </>
  );
};

const UpBtn = styled(BsCaretUpSquareFill)`
  width: 50px;
  height: 50px;
  color: wheat;
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
  color: wheat;
  position: fixed;
  right: 30px;
  bottom: 10px;
  cursor: pointer;
  transition: transform 100ms ease-in;
  &:hover {
    transform: scale(1.1);
  }
`;
