import React, { useState } from 'react';
import { Page1, Page2, Page3 } from './index';
import styled from '@emotion/styled';

export default function Main() {
  const [pageNumber, setPageNumber] = useState(1);
  const handlePage = () => {
    setPageNumber((pageNumber) => pageNumber + 1);
  };
  return (
    <Section>
      {pageNumber === 1 && <Page1 handlePage={handlePage} />}
      {pageNumber === 2 && <Page2 handlePage={handlePage} />}
      {pageNumber === 3 && <Page3 handlePage={handlePage} />}
    </Section>
  );
}
const Section = styled.div`
  background: black;
`;
