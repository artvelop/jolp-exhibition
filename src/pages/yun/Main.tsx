import React, { useState } from 'react';
import { Page1, Page2, Page3, Page4 } from './index';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
export default function Main() {
  const [pageNumber, setPageNumber] = useState(1);
  const handlePage = () => {
    setPageNumber((pageNumber) => pageNumber + 1);
  };
  return (
    <Section
      animate={{
        background: pageNumber === 2 ? 'white' : pageNumber === 3 ? 'rgba(253, 224, 223, 1)' : 'black',
      }}
      transition={{ delay: 2 }}
    >
      {pageNumber === 1 && <Page1 handlePage={handlePage} />}
      {pageNumber === 2 && <Page2 handlePage={handlePage} />}
      {pageNumber === 3 && <Page3 handlePage={handlePage} />}
      {pageNumber === 4 && <Page4 handlePage={handlePage} />}
    </Section>
  );
}

const Section = styled(motion.div)`
  background: black;
`;
