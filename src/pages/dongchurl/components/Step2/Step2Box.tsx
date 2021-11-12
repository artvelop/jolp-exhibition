import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { TagCard } from './TagCard';
import { motion } from 'framer-motion';
import { CssTagCard } from './CssTagCard';

const options = { threshold: 0.2 };

export const Step2Box = () => {
  const [visible, setVisible] = useState(false);
  const target = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(([enteries], observer) => {
      if (enteries.isIntersecting) {
        setVisible(true);
      } else if (enteries.intersectionRatio < 0.2) {
        setVisible(false);
      }
    }, options);

    if (target.current !== null) {
      io.observe(target.current);
    }
  }, []);

  return (
    <Wrapper ref={target}>
      <Content>
        <TagCard
          visibleDelay={1.0}
          visible={visible}
          left="43.5%"
          title="Document"
        />
        <TagCard
          visible={visible}
          left="45.5%"
          top="120px"
          title="Html"
          visibleDelay={1.0}
        />
        <TagCard
          visibleDelay={1.0}
          visible={visible}
          left="30%"
          top="200px"
          title="head"
        />
        <TagCard
          visibleDelay={1.0}
          visible={visible}
          left="61%"
          top="200px"
          title="body"
        />
        <TagCard
          visibleDelay={1.0}
          visible={visible}
          left="30.2%"
          top="320px"
          title="title"
        />
        <TagCard
          visibleDelay={1.0}
          visible={visible}
          left="51%"
          top="320px"
          title="h2"
        />
        <TagCard
          visibleDelay={1.0}
          visible={visible}
          left="73%"
          top="320px"
          title="ul"
        />
        <TagCard
          visibleDelay={1.0}
          visible={visible}
          left="73.2%"
          top="440px"
          title="li"
        />
        <TagCard
          visibleDelay={1.0}
          visible={visible}
          left="61.2%"
          top="440px"
          title="li"
        />
        <TagCard
          visibleDelay={1.0}
          visible={visible}
          left="49.2%"
          top="440px"
          title="li"
        />
        <TagCard
          visibleDelay={1.0}
          visible={visible}
          left="37.2%"
          top="440px"
          title="li"
        />
        <CssTagCard
          visibleDelay={2.2}
          title="<br />background-color: #1b2431; <br />font-size: 16px; <br /> display: flex; <br /> justify-content: center; <br /> align-items: center;"
          visible={visible}
          left="71%"
          top="155px"
        />
        <CssTagCard
          visibleDelay={2.25}
          title="color: #ff7400;"
          visible={visible}
          left="58%"
          top="320px"
        />
        <CssTagCard
          visibleDelay={2.25}
          title="border: 1px soild #fff; <br /> padding: 12px; <br /> margin-left:48px;"
          visible={visible}
          left="79.5%"
          top="320px"
        />
        <CssTagCard
          visibleDelay={2.3}
          title="color: #fff;"
          visible={visible}
          left="70.2%"
          top="510px"
        />
        <CssTagCard
          visibleDelay={2.3}
          title="color: #fff;"
          visible={visible}
          left="58%"
          top="510px"
        />
        <CssTagCard
          visibleDelay={2.3}
          title="color: #fff;"
          visible={visible}
          left="46.2%"
          top="510px"
        />
        <CssTagCard
          visibleDelay={2.3}
          title="color: #fff;"
          visible={visible}
          left="34.2%"
          top="510px"
        />
      </Content>
      <Gap
        animate={{
          opacity: visible ? [0, 1] : [1, 0],
        }}
        transition={{ delay: visible ? 0.5 : 0 }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Content = styled.div`
  margin-top: 80px;
  position: relative;
  width: 1178px;
  display: flex;
`;

const Gap = styled(motion.div)`
  height: 500px;
  background-image: url(${process.env.PUBLIC_URL +
  '/dongchurl/img/step1/domtreedivider.png'});
`;
