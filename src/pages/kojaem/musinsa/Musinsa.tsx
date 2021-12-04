import { useState } from "react";
import { LayoutContainer } from "../components/LayoutContainer";
import { Loading } from "./components/Loading";
import { MusinsaMain } from "./components/MusinsaMain";

type Props = {
  selected: string;
  setSelected: (link: string) => void;
};
const Musinsa = ({ selected, setSelected }: Props) => {
  const [onLoading, setOnLoading] = useState(true);
  return (
    <LayoutContainer selected={selected} setSelected={setSelected}>
      {onLoading ? <Loading setOnLoading={setOnLoading} /> : <MusinsaMain /> }
    </LayoutContainer>
  );
};

export default Musinsa;
