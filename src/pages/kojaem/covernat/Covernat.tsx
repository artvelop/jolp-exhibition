import { useState } from "react";
import { LayoutContainer } from "../components";
import { Loading, CovernatMain } from "./components";

type Props = {
  selected: string;
  setSelected: (link: string) => void;
};
const Covernat = ({ selected, setSelected }: Props) => {
  const [onLoading, setOnLoading] = useState(true);
  return (
    <LayoutContainer selected={selected} setSelected={setSelected}>
      {onLoading ? <Loading setOnLoading={setOnLoading} /> : <CovernatMain />}
    </LayoutContainer>
  );
};

export default Covernat;
