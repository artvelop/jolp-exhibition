import styled from "@emotion/styled";
import React, { useState } from "react";
import { LayoutContainer } from "../components/LayoutContainer";
import { Loading } from "./components/Loading";
import { motion } from "framer-motion";
import { Description } from "./components/Description";

type Props = {
  selected: string;
  setSelected: (link: string) => void;
};

const transition = {
  duration: 1,
};

const Covernat = ({ selected, setSelected }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <LayoutContainer selected={selected} setSelected={setSelected}>
      {isLoading ? (
        <CovernatWrapper>
          <Description />
        </CovernatWrapper>
      ) : (
        <Loading setIsLoading={setIsLoading} />
      )}
    </LayoutContainer>
  );
};

export default Covernat;

const CovernatWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #d7d7d5;
`;
