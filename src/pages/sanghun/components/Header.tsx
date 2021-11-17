import React, { useState } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { harvard, philosophy, talkGod, live, myself } from "../dummy/books";
import { GiSecretBook, GiSpellBook } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { color } from "../constants";
import { motion } from "framer-motion";

export const Header: React.FC = () => {
  const [show, setShow] = useState(false);
  return (
    <Head>
      <Link to="/sanghun/Menu">
        <HomeLogo whileHover={{ color: color.gold_light, scale: 1.3 }}>
          <AiFillHome />
        </HomeLogo>
      </Link>
      <MenuLogo
        onClick={() => setShow(!show)}
        // whileTap={{ rotate: 1800, transition: { duration: 1 } }}
        whileTap={{ translateY: 20, transition: { duration: 0.3 } }}
        whileHover={{
          scale: 1.3,
        }}
      >
        {show ? (
          <GiSpellBook
            style={{
              backgroundColor: "transparent",
              color: "white",
            }}
          />
        ) : (
          <GiSecretBook
            style={{
              backgroundColor: "transparent",
              color: "white",
            }}
          />
        )}
      </MenuLogo>
      <ImgBox>
        <Link to="/sanghun/PhilosophyBook">
          <Img
            src={philosophy.imgSrc}
            initial={{ opacity: 0 }}
            animate={{
              opacity: show ? 1 : 0,
              x: show ? [-300, 0] : [0, -300],
              transition: { duration: 1.6, ease: "easeOut" },
            }}
            whileHover={{ scale: 1.6, translateY: 50 }}
          />
        </Link>
        <Link to="/sanghun/MyselfBook">
          <Img
            src={myself.imgSrc}
            animate={{
              opacity: show ? 1 : 0,
              x: show ? [-600, 0] : [0, -600],
              transition: { duration: 1.6, ease: "easeOut" },
            }}
            initial={{ opacity: 0 }}
            whileHover={{ scale: 1.6, translateY: 50 }}
          />
        </Link>
        <Link to="/sanghun/HarvardBook">
          <Img
            src={harvard.imgSrc}
            animate={{
              opacity: show ? 1 : 0,
              x: show ? [-900, 0] : [0, -900],
              transition: { duration: 1.6, ease: "easeOut" },
            }}
            initial={{ opacity: 0 }}
            whileHover={{ scale: 1.6, translateY: 50 }}
          />
        </Link>
        <Link to="/sanghun/LiveBook">
          <Img
            src={live.imgSrc}
            animate={{
              opacity: show ? 1 : 0,
              x: show ? [-1200, 0] : [0, -1200],
              transition: { duration: 1.6, ease: "easeOut" },
            }}
            initial={{ opacity: 0 }}
            whileHover={{ scale: 1.6, translateY: 50 }}
          />
        </Link>
        <Link to="/sanghun/TalkGodBook">
          <Img
            src={talkGod.imgSrc}
            animate={{
              opacity: show ? 1 : 0,
              x: show ? [-1500, 0] : [0, -1500],
              transition: { duration: 1.6, ease: "easeOut" },
            }}
            initial={{ opacity: 0 }}
            whileHover={{ scale: 1.6, translateY: 50 }}
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
  margin-right: 200px;
  margin-left: 200px;
  flex: 2 1 0;
`;
const MenuLogo = styled(motion.span)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-bottom: 10px;
  font-size: 60px;
  color: ${color.gray};
  cursor: pointer;
  flex: 0.2 1 0;
  z-index: 2;
`;
const HomeLogo = styled(motion.div)`
  font-size: 60px;
  color: white;
  cursor: pointer;
  flex: 2 1 0;
  margin-left: 30px;
  z-index: 2;
`;
