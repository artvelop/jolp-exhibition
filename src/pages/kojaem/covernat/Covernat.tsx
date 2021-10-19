import styled from "@emotion/styled";
import { useState } from "react";
import { LayoutContainer } from "../components/LayoutContainer";
import { Loading } from "./components/Loading";
import { CovernatMain } from "./components/CovernatMain";

type Props = {
  selected: string;
  setSelected: (link: string) => void;
};
const Covernat = ({ selected, setSelected }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <LayoutContainer selected={selected} setSelected={setSelected}>
      {isLoading ? (
        <CovernatWrapper>
          <CovernatMain />
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
`;