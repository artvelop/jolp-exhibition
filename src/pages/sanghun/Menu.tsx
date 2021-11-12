import React, { useState } from "react";
import styled from "@emotion/styled";
import { TypoGraphy, SanghunModal } from "./components";
import { harvard, myself, philosophy, live, talkGod } from "./dummy/books";
import { randomWisdom } from "./dummy/wiseSaying";
import backImg from "../sanghun/img/mikolaj-DCzpr09cTXY-unsplash.jpg";
import "animate.css";
import { useHistory } from "react-router";

const Menu: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [adress, setAdress] = useState<string>("");
  const history = useHistory();

  function linkToDetail(): void {
    history.push(`/sanghun/${adress}`);
    console.log("이동 할거야");
  }
  return (
    <DDD>
      <Container>
        <Box
          onClick={() => {
            setModalIsOpen(true);
            setAdress(philosophy.address);
          }}
        >
          {" "}
          <Img src={philosophy.imgSrc} />
        </Box>
        <Box
          onClick={() => {
            setModalIsOpen(true);
            setAdress(myself.address);
          }}
        >
          {" "}
          <Img src={myself.imgSrc} />
        </Box>
        <Box
          onClick={() => {
            setModalIsOpen(true);
            setAdress(harvard.address);
          }}
        >
          {" "}
          <Img src={harvard.imgSrc} />
        </Box>
        <Box
          onClick={() => {
            setModalIsOpen(true);
            setAdress(live.address);
          }}
        >
          {" "}
          <Img src={live.imgSrc} />
        </Box>
        <Box
          onClick={() => {
            setModalIsOpen(true);
            setAdress(talkGod.address);
          }}
        >
          {" "}
          <Img src={talkGod.imgSrc} />
        </Box>
      </Container>
      <Content>
        <TitleAnimation>
          <TypoGraphy type="Title" color="white" fontWeight="bold">
            Books are the spring of wisdom.
          </TypoGraphy>
        </TitleAnimation>
        <Gap />
        <TitleAnimation>
          <TypoGraphy
            type="h3"
            color="gray"
            fontWeight="bold"
            textAlign="center"
          >
            책은 지혜의 원천이다.
          </TypoGraphy>
          <Gap />
        </TitleAnimation>
      </Content>
      <SanghunModal
        modalIsOpen={modalIsOpen}
        closeModal={() => setModalIsOpen(!modalIsOpen)}
        text={randomWisdom()}
        linkToDetail={linkToDetail}
      />
    </DDD>
  );
};

const Container = styled.div`
  display: flex;
  padding: 2% 5%;
  height: 50vh;
`;
const Box = styled.div`
  flex: 1;
  transition: 0.5s;
  margin: 0 2%;
  background-color: transparent;
  &:hover {
    flex: 1 1 20%;
    transform: scale(1.1);
  }
`;
const Img = styled.img`
  width: 70%;
  cursor: pointer;
`;
const Gap = styled.div`
  height: 30px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
  width: 1400px;
  height: 300px;
  margin: 36px auto;
`;
const TitleAnimation = styled.span`
  animation: flipInX;
  animation-duration: 3s;
`;
const DDD = styled.div`
  padding: 0.54%;
  background-size: cover;
  background-image: url(${backImg});
`;
export default Menu;
