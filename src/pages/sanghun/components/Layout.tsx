import React from "react";
import styled from "@emotion/styled";
import backImg from "../img/mikolaj-DCzpr09cTXY-unsplash.jpg";
// import backImg from "../img/olga-tutunaru-JMATuFkXeHU-unsplash.jpg";

export const Layout: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  background-image: url(${backImg});
  background-attachment: fixed;
  background-size: cover;
`;
