import React from "react";
import styled from "@emotion/styled";

export const DetailLayout: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  width: 100%;
  background-color: black;
`;
