import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Doughnut } from "react-chartjs-2";

type Props = {
    show: boolean
}
// 커버낫 브랜드의 남여 구매자 비율은 57 : 43으로
//         성별에 상관없이 즐겨 입을 수 있는 브랜드입니다.
export const ChartDescription = ({show}:Props) => {
  return (
    <Wrapper>
      <p>
          <Text
          animate={{ opacity: show? [0,1] : 0, textShadow: show ? "rgb(255 255 255) 0.5px 0.5px 0.5px" : "", }} transition={{duration:2, delay: 1.5}}>커</Text>
          <Text
          animate={{ opacity: show? [0,1] : 0, textShadow: show ? "rgb(255 255 255) 0.5px 0.5px 0.5px" : "", }} transition={{ duration:2, delay: 1.6 }}>버</Text>
          <Text
          animate={{ opacity: show? [0,1] : 0, textShadow: show ? "rgb(255 255 255) 0.5px 0.5px 0.5px" : "", }} transition={{ duration:2, delay: 1.6 }}>낫</Text>
          <Text
          animate={{ opacity: show? [0,1] : 0, textShadow: show ? "rgb(255 255 255) 0.5px 0.5px 0.5px" : "", }} transition={{ duration:2, delay: 1.7 }}> </Text>
          <Text
          animate={{ opacity: show? [0,1] : 0, textShadow: show ? "rgb(255 255 255) 0.5px 0.5px 0.5px" : "", }} transition={{ duration:2, delay: 1.7 }}>브</Text>
          <Text
          animate={{ opacity: show? [0,1] : 0, textShadow: show ? "rgb(255 255 255) 0.5px 0.5px 0.5px" : "", }} transition={{ duration:2, delay: 1.8 }}>랜</Text>
          <Text
          animate={{ opacity: show? [0,1] : 0, textShadow: show ? "rgb(255 255 255) 0.5px 0.5px 0.5px" : "", }} transition={{ duration:2, delay: 1.8 }}>드</Text>
          <Text
          animate={{ opacity: show? [0,1] : 0, textShadow: show ? "rgb(255 255 255) 0.5px 0.5px 0.5px" : "", }} transition={{ duration:2, delay: 1.9 }}>의</Text>
          <Text
          animate={{ opacity: show? [0,1] : 0, textShadow: show ? "rgb(255 255 255) 0.5px 0.5px 0.5px" : "", }} transition={{ duration:2, delay: 1.9 }}> </Text>
          <Text
          animate={{ opacity: show? [0,1] : 0, textShadow: show ? "rgb(255 255 255) 0.5px 0.5px 0.5px" : "", }} transition={{ duration:2, delay: 2.0 }}>남</Text>
          <Text
          animate={{ opacity: show? [0,1] : 0, textShadow: show ? "rgb(255 255 255) 0.5px 0.5px 0.5px" : "", }} transition={{ duration:2, delay: 2.0 }}>여</Text>
          <Text
          animate={{ opacity: show? [0,1] : 0, textShadow: show ? "rgb(255 255 255) 0.5px 0.5px 0.5px" : "", }} transition={{ duration:2, delay: 2.1 }}>구</Text>
          <Text
          animate={{ opacity: show? [0,1] : 0, textShadow: show ? "rgb(255 255 255) 0.5px 0.5px 0.5px" : "", }} transition={{ duration:2, delay: 2.1 }}>매</Text>
          <Text
          animate={{ opacity: show? [0,1] : 0, textShadow: show ? "rgb(255 255 255) 0.5px 0.5px 0.5px" : "", }} transition={{ duration:2, delay: 2.2 }}>자</Text>
          <Text
          animate={{ opacity: show? [0,1] : 0, textShadow: show ? "rgb(255 255 255) 0.5px 0.5px 0.5px" : "", }} transition={{ duration:2, delay: 2.2 }}> </Text>
          <Text
          animate={{ opacity: show? [0,1] : 0, textShadow: show ? "rgb(255 255 255) 0.5px 0.5px 0.5px" : "", }} transition={{ duration:2, delay: 2.3 }}>비</Text>
          <Text
          animate={{ opacity: show? [0,1] : 0, textShadow: show ? "rgb(255 255 255) 0.5px 0.5px 0.5px" : "", }} transition={{ duration:2, delay: 2.3 }}>율</Text>
          <Text
          animate={{ opacity: show? [0,1] : 0, textShadow: show ? "rgb(255 255 255) 0.5px 0.5px 0.5px" : "", }} transition={{ duration:2, delay: 2.4 }}>은</Text>
          <Text
          animate={{ opacity: show? [0,1] : 0, textShadow: show ? "rgb(255 255 255) 0.5px 0.5px 0.5px" : "", }} transition={{ duration:2, delay: 2.4 }}> </Text>
          <Text
          animate={{ opacity: show? [0,1] : 0, textShadow: show ? "rgb(255 255 255) 0.5px 0.5px 0.5px" : "", }} transition={{ duration:2, delay: 2.5 }}>5</Text>
          <Text
          animate={{ opacity: show? [0,1] : 0, textShadow: show ? "rgb(255 255 255) 0.5px 0.5px 0.5px" : "", }} transition={{ duration:2, delay: 2.5 }}>7</Text>
          <Text
          animate={{ opacity: show? [0,1] : 0, textShadow: show ? "rgb(255 255 255) 0.5px 0.5px 0.5px" : "", }} transition={{ duration:2, delay: 2.6 }}> </Text>
          <Text
          animate={{ opacity: show? [0,1] : 0, textShadow: show ? "rgb(255 255 255) 0.5px 0.5px 0.5px" : "", }} transition={{ duration:2, delay: 2.6 }}>:</Text>
          <Text
          animate={{ opacity: show? [0,1] : 0, textShadow: show ? "rgb(255 255 255) 0.5px 0.5px 0.5px" : "", }} transition={{ duration:2, delay: 2.7 }}> </Text>
          <Text
          animate={{ opacity: show? [0,1] : 0, textShadow: show ? "rgb(255 255 255) 0.5px 0.5px 0.5px" : "", }} transition={{ duration:2, delay: 2.7 }}>4</Text>
          <Text
          animate={{ opacity: show? [0,1] : 0, textShadow: show ? "rgb(255 255 255) 0.5px 0.5px 0.5px" : "", }} transition={{ duration:2, delay: 2.8 }}>3</Text>
          <Text
          animate={{ opacity: show? [0,1] : 0, textShadow: show ? "rgb(255 255 255) 0.5px 0.5px 0.5px" : "", }} transition={{ duration:2, delay: 2.8 }}> </Text>
          <Text
          animate={{ opacity: show? [0,1] : 0, textShadow: show ? "rgb(255 255 255) 0.5px 0.5px 0.5px" : "", }} transition={{ duration:2, delay: 2.9 }}>으</Text>
          <Text
          animate={{ opacity: show? [0,1] : 0, textShadow: show ? "rgb(255 255 255) 0.5px 0.5px 0.5px" : "", }} transition={{ duration:2, delay: 2.9 }}>로</Text>
        </p>
        <p>
          <Text
          animate={{ opacity: show? [0,1] : 0, textShadow: show ? "rgb(255 255 255) 0.5px 0.5px 0.5px" : "", }} transition={{ duration:2, delay: 3.0 }}>성</Text>
          <Text
          animate={{ opacity: show? [0,1] : 0, textShadow: show ? "rgb(255 255 255) 0.5px 0.5px 0.5px" : "", }} transition={{ duration:2, delay: 3.0 }}>별</Text>
          <Text
          animate={{ opacity: show? [0,1] : 0, textShadow: show ? "rgb(255 255 255) 0.5px 0.5px 0.5px" : "", }} transition={{ duration:2, delay: 3.1 }}>에</Text>
          <Text
          animate={{ opacity: show? [0,1] : 0, textShadow: show ? "rgb(255 255 255) 0.5px 0.5px 0.5px" : "", }} transition={{ duration:2, delay: 3.1 }}> </Text>
          <Text
          animate={{ opacity: show? [0,1] : 0, textShadow: show ? "rgb(255 255 255) 0.5px 0.5px 0.5px" : "", }} transition={{ duration:2, delay: 3.2 }}>상</Text>
          <Text
          animate={{ opacity: show? [0,1] : 0, textShadow: show ? "rgb(255 255 255) 0.5px 0.5px 0.5px" : "", }} transition={{ duration:2, delay: 3.2 }}>관</Text>
          <Text
          animate={{ opacity: show? [0,1] : 0, textShadow: show ? "rgb(255 255 255) 0.5px 0.5px 0.5px" : "", }} transition={{ duration:2, delay: 3.3 }}>없</Text>
          <Text
          animate={{ opacity: show? [0,1] : 0, textShadow: show ? "rgb(255 255 255) 0.5px 0.5px 0.5px" : "", }} transition={{ duration:2, delay: 3.3 }}>이</Text>
          <Text
          animate={{ opacity: show? [0,1] : 0, textShadow: show ? "rgb(255 255 255) 0.5px 0.5px 0.5px" : "", }} transition={{ duration:2, delay: 3.4 }}> </Text>
          <Text
          animate={{ opacity: show? [0,1] : 0, textShadow: show ? "rgb(255 255 255) 0.5px 0.5px 0.5px" : "", }} transition={{ duration:2, delay: 3.4 }}>인</Text>
          <Text
          animate={{ opacity: show? [0,1] : 0, textShadow: show ? "rgb(255 255 255) 0.5px 0.5px 0.5px" : "", }} transition={{ duration:2, delay: 3.5 }}>기</Text>
          <Text
          animate={{ opacity: show? [0,1] : 0, textShadow: show ? "rgb(255 255 255) 0.5px 0.5px 0.5px" : "", }} transition={{ duration:2, delay: 3.5 }}>있</Text>
          <Text
          animate={{ opacity: show? [0,1] : 0, textShadow: show ? "rgb(255 255 255) 0.5px 0.5px 0.5px" : "", }} transition={{ duration:2, delay: 3.6 }}>는</Text>
          <Text
          animate={{ opacity: show? [0,1] : 0, textShadow: show ? "rgb(255 255 255) 0.5px 0.5px 0.5px" : "", }} transition={{ duration:2, delay: 3.6 }}> </Text>
          <Text
          animate={{ opacity: show? [0,1] : 0, textShadow: show ? "rgb(255 255 255) 0.5px 0.5px 0.5px" : "", }} transition={{ duration:2, delay: 3.7 }}>브</Text>
          <Text
          animate={{ opacity: show? [0,1] : 0, textShadow: show ? "rgb(255 255 255) 0.5px 0.5px 0.5px" : "", }} transition={{ duration:2, delay: 3.7 }}>랜</Text>
          <Text
          animate={{ opacity: show? [0,1] : 0, textShadow: show ? "rgb(255 255 255) 0.5px 0.5px 0.5px" : "", }} transition={{ duration:2, delay: 3.8 }}>드</Text>
          <Text
          animate={{ opacity: show? [0,1] : 0, textShadow: show ? "rgb(255 255 255) 0.5px 0.5px 0.5px" : "", }} transition={{ duration:2, delay: 3.8 }}> </Text>
          <Text
          animate={{ opacity: show? [0,1] : 0, textShadow: show ? "rgb(255 255 255) 0.5px 0.5px 0.5px" : "", }} transition={{ duration:2, delay: 3.9 }}>입</Text>
          <Text
          animate={{ opacity: show? [0,1] : 0, textShadow: show ? "rgb(255 255 255) 0.5px 0.5px 0.5px" : "", }} transition={{ duration:2, delay: 3.9 }}>니</Text>
          <Text
          animate={{ opacity: show? [0,1] : 0, textShadow: show ? "rgb(255 255 255) 0.5px 0.5px 0.5px" : "", }} transition={{ duration:2, delay: 4.0 }}>다</Text>
        </p>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
`;
const Text = styled(motion.span)`
  color: white;
  font-size: 2vh;
  font-weight: bold;
  // text-shadow: rgb(255 255 255) 0px 0px 0px;
  // text-shadow: rgb(255 255 255) 1px 1px 1px;

  
`;