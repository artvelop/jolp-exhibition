import React from "react";
import styled from "@emotion/styled";

// : React.FC  이게 뭔지 검색하기
export const Layout: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
`;
