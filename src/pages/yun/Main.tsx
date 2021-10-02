import React from 'react';
import { Page1, Page2 } from './index';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import styled from '@emotion/styled';

export default function Main() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [ref, slider] = useKeenSlider<HTMLDivElement>({
    duration: 900,
    controls: false,
    slidesPerView: 1,
    vertical: true,
    loop: true,
    initial: 0,
    centered: true,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });

  const NextPageHandle = () => {
    slider.next();
  };

  return (
    <Section>
      <div ref={ref} className="keen-slider" style={{ overflow: 'hidden', touchAction: 'none' }}>
        <div className={'keen-slider__slide number-slide1'}>
          <Page1 NextPageHandle={NextPageHandle} />
        </div>
        <div className={'keen-slider__slide number-slide2'}>
          <Page2 NextPageHandle={NextPageHandle} />
        </div>
      </div>
    </Section>
  );
}

const Section = styled.div`
  height: 100vh;
  min-height: 100vh;
  overflow: hidden !important;
  touch-action: none;
`;
