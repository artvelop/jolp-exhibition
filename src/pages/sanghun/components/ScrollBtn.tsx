import React from 'react';
import styled from '@emotion/styled';
import { FaAngleDoubleUp, FaChevronUp, FaChevronDown } from 'react-icons/fa';

import { color } from '../constants';

export const ScrollBtn: React.FC = () => {
  const pageDown = () => {
    window.scrollBy({
      top: 950,
      left: 0,
      behavior: 'smooth',
    });
  };
  const pageUp = () => {
    window.scrollBy({
      top: -950,
      left: 0,
      behavior: 'smooth',
    });
  };
  const pageUpUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
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

const UpUpBtn = styled(FaAngleDoubleUp)`
  width: 50px;
  height: 50px;
  background-color: ${color.gold_dark};
  border-radius: 10%;
  position: fixed;
  right: 170px;
  bottom: 10px;
  cursor: pointer;
  transition: transform 100ms ease-in;
  opacity: 0.3;
  &:hover {
    transform: scale(1.1);
    opacity: 0.6;
  }
`;
const UpBtn = styled(FaChevronUp)`
  width: 50px;
  height: 50px;
  background-color: ${color.gold_dark};
  border-radius: 10%;
  position: fixed;
  right: 100px;
  bottom: 10px;
  cursor: pointer;
  transition: transform 100ms ease-in;
  opacity: 0.3;
  &:hover {
    transform: scale(1.1);
    opacity: 0.6;
  }
`;
const DownBtn = styled(FaChevronDown)`
  width: 50px;
  height: 50px;
  background-color: ${color.gold_dark};
  border-radius: 10%;
  position: fixed;
  right: 30px;
  bottom: 10px;
  cursor: pointer;
  transition: transform 100ms ease-in;
  opacity: 0.3;
  &:hover {
    transform: scale(1.1);
    opacity: 0.6;
  }
`;
