import React from 'react';
import LayoutContainer from '../LayoutContainer/LayoutContainer';

type Props = {
  selected: string;
  setSelected: (link:string) => void;
}
const Musinsa = (props:Props) => {
  return (
  <LayoutContainer
    LinkName="MUSINSA"
    color="#434946"
    selected={props.selected}
    setSelected={props.setSelected}
  >
    <div>무신사 스탠다드</div>
    <div>무신사 스탠다드2</div>
    <div>무신사 스탠다드3</div>
    <div>무신사 스탠다드4</div>
    <div>무신사 스탠다드5</div>
  </LayoutContainer>);
};

export default Musinsa;
