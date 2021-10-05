import React from "react";
import styled from "@emotion/styled";
import { Layout, TypoGraphy, Footer } from "./components";
import { harvard, myself, philosophy, live, talkGod } from "./dummy/books";
import { randomWisdom } from "./dummy/wiseSaying";
import "animate.css";

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
  margin: 40px auto;
`;
const TitleAnimation = styled.span`
  animation: flipInX;
  /* animation: flipInY; */
  animation-duration: 3s;
`;
export default Menu;
