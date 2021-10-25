import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { harvard, philosophy, talkGod, live, myself } from "../dummy/books";
import { MdMenuBook } from "react-icons/md";
import { color } from "../constants";

export const Header: React.FC = () => {
  return (
    <Head>
      <Link to="/sanghun/Menu">
        <QQQ />
      </Link>
      <ImgBox>
        <Link to="/sanghun/PhilosophyBook">
          <Img src={philosophy.imgSrc} />
        </Link>
        <Link to="/sanghun/MyselfBook">
          <Img src={myself.imgSrc} />
        </Link>
        <Link to="/sanghun/HarvardBook">
          <Img src={harvard.imgSrc} />
        </Link>
        <Link to="/sanghun/LiveBook">
          <Img src={live.imgSrc} />
        </Link>
        <Link to="/sanghun/TalkGodBook">
          <Img src={talkGod.imgSrc} />
        </Link>
      </ImgBox>
    </Head>
  );
};

const Head = styled.div`
  position: sticky;
  top: 10px;
  left: 0;
  width: 100%;
  height: 102px;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Img = styled.img`
  aspect-ratio: 2/3;
  width: 70px;
  cursor: pointer;
`;
const ImgBox = styled.div`
  display: flex;
  gap: 20%;
  margin-right: 400px;
`;
const QQQ = styled(MdMenuBook)`
  margin-left: 30px;
  font-size: 70px;
  color: ${color.gray};
`;
