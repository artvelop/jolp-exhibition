<<<<<<< HEAD
import React from "react";
import { Page1, Page2 } from "./index";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

type Props = { disabled: boolean; onCilck: (e: any) => void };
=======
import React, { useState } from 'react';
import { Page1, Page2, Page3, Page4, Page5, Page6, Page7, Page8, Page9 } from './index';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
>>>>>>> master

export default function Main() {
  const [pageNumber, setPageNumber] = useState(7);
  const handlePage = () => {
    pageNumber === 9 ? setPageNumber((pageNumber) => (pageNumber = 1)) : setPageNumber((pageNumber) => pageNumber + 1);
  };
  return (
<<<<<<< HEAD
    <div>
      <div ref={ref} className="keen-slider">
        <Page1 />
        <Page2 />
      </div>
      {slider && (
        <ArrowLeft
          onCilck={(e: any) => e.stopPropagation() || slider.prev()}
          disabled={currentSlide === 0}
        />
      )}
    </div>
  );
}

const ArrowLeft: React.FC<Props> = (props) => {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onCilck}
      className={"arrow arrow--left" + disabeld}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
    </svg>
  );
};
=======
    <Section
      animate={{
        background: pageNumber === 2 || pageNumber === 5 || pageNumber === 6 ? 'white' : pageNumber === 3 ? 'rgba(253, 224, 223, 1)' : 'black',
      }}
      transition={{ delay: 2 }}
    >
      {pageNumber === 1 && <Page1 handlePage={handlePage} />}
      {pageNumber === 2 && <Page2 handlePage={handlePage} />}
      {pageNumber === 3 && <Page3 handlePage={handlePage} />}
      {pageNumber === 4 && <Page4 handlePage={handlePage} />}
      {pageNumber === 5 && <Page5 handlePage={handlePage} />}
      {pageNumber === 6 && <Page6 handlePage={handlePage} />}
      {pageNumber === 7 && <Page7 handlePage={handlePage} />}
      {pageNumber === 8 && <Page8 handlePage={handlePage} />}
      {pageNumber === 9 && <Page9 handlePage={handlePage} />}
    </Section>
  );
}

const Section = styled(motion.div)`
  background: black;
`;
>>>>>>> master
