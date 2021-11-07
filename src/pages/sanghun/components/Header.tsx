import React, { useState } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { harvard, philosophy, talkGod, live, myself } from "../dummy/books";
import { GiBurningBook } from "react-icons/gi";
import { color } from "../constants";
import { motion } from "framer-motion";

export const Header: React.FC = () => {
  const [show, setShow] = useState(false);

  const bookAnimate = {
    opacity: show ? 1 : 0,
    x: show ? [-1000, 0] : [0, -1800],
    transition: { duration: 1.6, ease: "easeOut" },
  };
  return (
    <Head>
      <HomeLogo
        onClick={() => setShow(!show)}
        whileTap={{ rotate: 1800, transition: { duration: 1 } }}
        whileHover={{ scale: 1.3 }}
      >
        <GiBurningBook
          style={{
            backgroundColor: color.gold_dark,
            color: "black",
            borderRadius: "50%",
          }}
        />
      </HomeLogo>
      <Link to="/sanghun/Menu">
        <Menu
          animate={{
            opacity: show ? 0 : 1,
            transition: { duration: 1, ease: "linear" },
          }}
          whileHover={{ color: color.gold_light }}
        >
          MENU
        </Menu>
      </Link>
      <ImgBox>
        <Link to="/sanghun/PhilosophyBook">
          <Img
            src={philosophy.imgSrc}
            initial={{ opacity: 0 }}
            animate={bookAnimate}
            whileHover={{ scale: 2, translateY: 100 }}
          />
        </Link>
        <Link to="/sanghun/MyselfBook">
          <Img
            src={myself.imgSrc}
            animate={bookAnimate}
            initial={{ opacity: 0 }}
            whileHover={{ scale: 2, translateY: 100 }}
          />
        </Link>
        <Link to="/sanghun/HarvardBook">
          <Img
            src={harvard.imgSrc}
            animate={bookAnimate}
            initial={{ opacity: 0 }}
            whileHover={{ scale: 2, translateY: 100 }}
          />
        </Link>
        <Link to="/sanghun/LiveBook">
          <Img
            src={live.imgSrc}
            animate={bookAnimate}
            initial={{ opacity: 0 }}
            whileHover={{ scale: 2, translateY: 100 }}
          />
        </Link>
        <Link to="/sanghun/TalkGodBook">
          <Img
            src={talkGod.imgSrc}
            animate={bookAnimate}
            initial={{ opacity: 0 }}
            whileHover={{ scale: 2, translateY: 100 }}
          />
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

const Img = styled(motion.img)`
  aspect-ratio: 2/3;
  width: 70px;
  cursor: pointer;
`;
const ImgBox = styled(motion.div)`
  display: flex;
  gap: 20%;
  user-select: none;
  margin-right: 400px;
  flex: 2 1 0;
`;
const HomeLogo = styled(motion.span)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  font-size: 70px;
  color: ${color.gray};
  cursor: pointer;
  flex: 0.2 1 0;
`;
const Menu = styled(motion.span)`
  font-size: 30px;
  margin-right: 10px;
  color: ${color.gray};
  cursor: pointer;
  flex: 2 1 0;
`;
