import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Ref, useRef, useState } from "react";

type Props = {
  show: boolean;
  index: number;
  season: string;
  smallBrandName: string;
};
export const MidImage = ({ show, index, season, smallBrandName }: Props) => {
  const [hover, setHover] = useState(false);
  const [click, setClick] = useState(false);
  const imageRef: Ref<HTMLImageElement> = useRef(null);

  const onClickEvent = () => {
    if (!click) {
      const imageClickSrc =
        require(`assets/img/KoJaem/${smallBrandName}/mid/${season}Image${index}Click.jpg`).default;
      imageRef.current!.src = imageClickSrc;
      setClick(!click);
    } else {
      const imageSrc =
        require(`assets/img/KoJaem/${smallBrandName}/mid/${season}Image${index}.jpg`).default;
      imageRef.current!.src = imageSrc;
      setClick(!click);
    }
    // const imgSrc = imageRef.src.slice(-9,-4)
    // if(imgSrc!="Click") {
    //   const imageClickSrc = imageRef.current!.src.replace(/.jpg/gi,"") + "Click.jpg";
    //   imageRef.current!.src = imageClickSrc;
    //   setClick(!click);
    //   console.log(imageClickSrc)
    // }
    // else {
    //   const imageSrc = imageRef.current!.src.replace(/Click.jpg/gi,"") + ".jpg";
    //   imageRef.current!.src = imageSrc;
    //   setClick(!click);
    //   console.log(imageSrc)
    // }
  };

  return (
    <Wrapper
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      onClick={onClickEvent}
    >
      <Image
        src={
          require(`assets/img/KoJaem/${smallBrandName}/mid/${season}Image${index}.jpg`)
            .default
        }
        ref={imageRef}
        animate={{
          y: show ? [100, 0] : [0, 100],
          opacity: show ? [0, 1] : 0,
          transition: { duration: 1 },
          rotateY: hover ? 180 : 0,
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const Image = styled(motion.img)`
  width: 30vw;
  height: 60vh;
  opacity: 0;
  pointer-events: none;
`;
