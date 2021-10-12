import styled from '@emotion/styled';
import React from 'react';

export const StepLayout: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  width: 1178px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50vh;
  display: flex;
  justify-content: center;
`;
