import React from 'react';
import { Page1, Page2 } from './index';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

type Props = { disabled: boolean; onCilck: (e: any) => void };

export default function Main() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [ref, slider] = useKeenSlider<HTMLDivElement>({
    spacing: 10,
    slidesPerView: 1,
    centered: true,
    vertical: true,
    loop: true,
  });
  return (
    <div>
      <div ref={ref} className="keen-slider">
        <Page1 />
        <Page2 />
      </div>
      {slider && <ArrowLeft onCilck={(e: any) => e.stopPropagation() || slider.prev()} disabled={currentSlide === 0} />}
    </div>
  );
}

const ArrowLeft: React.FC<Props> = (props) => {
  const disabeld = props.disabled ? ' arrow--disabled' : '';
  return (
    <svg onClick={props.onCilck} className={'arrow arrow--left' + disabeld} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
    </svg>
  );
};
