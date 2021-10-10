import React from "react";
import styled from "@emotion/styled";
import backImg from "../img/mikolaj-DCzpr09cTXY-unsplash.jpg";
// import backImg from "../img/olga-tutunaru-JMATuFkXeHU-unsplash.jpg";
// import backImg from "../img/cool-background.png";
// import backImg from "../img/trianglify-lowres.png";
// import backImg from "../img/janko-ferlic-sfL_QOnmy00-unsplash.jpg";
// import backImg from "../img/thilak-mohan-C0eMifpRfQE-unsplash.jpg";

export const Layout: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto; */
  /* height: 100vh; */
  background-image: url(${backImg});
  background-attachment: fixed;
  background-size: cover;
`;
