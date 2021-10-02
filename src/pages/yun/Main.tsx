import React from 'react';
import { Page1, Page2 } from './index';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

export default function Main() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [ref, slider] = useKeenSlider<HTMLDivElement>({
    // spacing: 10,
    slidesPerView: 1,
    // centered: true,
    vertical: true,
    loop: true,
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });

  const NextPageHandle = () => {
    slider.next();
  };

  return (
    <div>
      <div ref={ref} className="keen-slider">
        <div className={'keen-slider__slide number-slide1'}>
          <Page1 NextPageHandle={NextPageHandle} />
        </div>
        <div className={'keen-slider__slide number-slide2'}>
          <Page2 NextPageHandle={NextPageHandle} />
        </div>
      </div>
    </div>
  );
}
