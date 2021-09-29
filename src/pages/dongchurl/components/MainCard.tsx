import styled from '@emotion/styled';
import React from 'react';
import { TyphoGraphy } from './TyphoGraphy';

type Props = {
  title: string;
};

export const MainCard: React.FC<Props> = ({ title }) => {
  return (
    <Wrapper>
      <Title>
        <TyphoGraphy type="h1" color="#fff">
          {title}
        </TyphoGraphy>
      </Title>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: url('/dongchurl/img/maincard/domtree.jpeg');
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 320px;
  height: 512px;
  border-radius: 4px;
  box-shadow: -2px 6px 46px 9px rgba(0, 0, 0, 0.21);
  -webkit-box-shadow: -2px 6px 46px 9px rgba(0, 0, 0, 0.21);
  -moz-box-shadow: -2px 6px 46px 9px rgba(0, 0, 0, 0.21);
  margin-left: 24px;
  margin-right: 24px;
`;

const Title = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 32px;
`;
