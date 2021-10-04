import React from "react";
import styled from "@emotion/styled";
import { Layout, TypoGraphy, Footer } from "./components";
import { harvard, myself, philosophy, live, talkGod } from "./dummy/books";
import { randomWisdom } from "./dummy/wiseSaying";

const Menu: React.FC = () => {
  function onClick(): void {
    alert(randomWisdom());
    // 페이지 이동 추가할 예정
  }
  return (
    <Layout>
      <Container>
        <Box onClick={onClick}>
          {" "}
          <Img src={philosophy.imgSrc} />
        </Box>
        <Box onClick={onClick}>
          {" "}
          <Img src={myself.imgSrc} />
        </Box>
        <Box onClick={onClick}>
          {" "}
          <Img src={harvard.imgSrc} />
        </Box>
        <Box onClick={onClick}>
          {" "}
          <Img src={live.imgSrc} />
        </Box>
        <Box onClick={onClick}>
          {" "}
          <Img src={talkGod.imgSrc} />
        </Box>
      </Container>

      <Content>
        <TypoGraphy type="Title" fontWeight="bold">
          Books are the spring of wisdom.
        </TypoGraphy>
        <Gap />
        <TypoGraphy type="h3" color="gray" fontWeight="bold" textAlign="center">
          책은 지혜의 원천이다.
        </TypoGraphy>
        <Gap />
      </Content>
    </Layout>
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
  width: 100%;
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
  height: 400px;
  margin: 20px auto;
  /* -webkit-box-shadow: 5px 5px 15px 5px #ff8080, -9px 5px 15px 5px #ffe488,
    -7px -5px 15px 5px #8cff85, 12px -5px 15px 5px #80c7ff,
    12px 10px 15px 7px #e488ff, -10px 10px 15px 7px #ff616b,
    -10px -7px 27px 1px #8e5cff, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: 5px 5px 15px 5px #ff8080, -9px 5px 15px 5px #ffe488,
    -7px -5px 15px 5px #8cff85, 12px -5px 15px 5px #80c7ff,
    12px 10px 15px 7px #e488ff, -10px 10px 15px 7px #ff616b,
    -10px -7px 27px 1px #8e5cff, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  border-radius: 20px; */
`;
export default Menu;
