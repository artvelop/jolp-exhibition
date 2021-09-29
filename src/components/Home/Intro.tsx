import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import React, { Ref } from 'react';

type Props = {
  target?: Ref<HTMLDivElement>;
};

export const Intro: React.FC<Props> = ({ target }) => {
  return (
    <Wrapper ref={target || null}>
      {target && <div>이건 타겟있음</div>}
      <TextMotion animate={{ scale: [0, 1], rotateY: [0, 360, 0] }}>
        왜
      </TextMotion>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 30vh;
  margin-left: auto;
  margin-right: auto;
`;

const TextMotion = styled(motion.div)`
  opacity: 1;
  font-size: 400px;
  font-weight: bold;
  color: #000;
`;
