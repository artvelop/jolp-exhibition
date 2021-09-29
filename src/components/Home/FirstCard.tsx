import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

export const FirstCard = () => {
  const [boxVisible, setBoxVisible] = useState<boolean>(true);

  return (
    <Wrapper>
      <Content>
        <motion.div
          animate={{
            scale: boxVisible ? [1, 2, 2, 1, 1] : [1, 2, 2, 1, 0],
            rotate: boxVisible ? [0, 0, 270, 270, 0] : [0, 270, 270, 270, 0],
            borderRadius: boxVisible
              ? ['20%', '20%', '50%', '50%', '20%']
              : ['20%', '20%', '50%', '50%', '50%'],
          }}
          style={{
            width: 100,
            height: 100,
            borderRadius: 4,
            backgroundColor: '#000',
          }}
        />
      </Content>
      <Bottom>
        <motion.div
          onClick={() => setBoxVisible((cur) => !cur)}
          whileTap={{ scale: 1.5 }}
          style={{
            height: '100%',
            backgroundColor: '#000',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
          }}>
          <motion.p style={{ color: '#fff' }} whileHover={{ scale: 1.5 }}>
            생성
          </motion.p>
        </motion.div>
      </Bottom>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #333;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 400px;
  margin-left: auto;
  margin-right: auto;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Bottom = styled.div`
  margin-top: auto;
  width: 100%;
  height: 50px;
`;
