import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { LayoutContainer } from "../components";
import { Thumbnail } from "./components";

const images: string[] = [
  "Musinsa.jpg",
  "Covernat.jpg",
  "Kirsh.jpg",
  "LMC.jpg",
];


type Props = {
  selected: string;
  setSelected: (link: string) => void;
};

const Gallery = ({ selected, setSelected }: Props) => {
  const getLinkName = (image: string) =>
    image.replace(/.jpg|.jpeg|.png|.gif/gi, "").toUpperCase();

  return (
    <LayoutContainer selected={selected} setSelected={setSelected}>
      <GalleryWrapper>
        <Thumbnails
          initial="initial"
          animate="enter"
          exit="exit"
          variants={{
            exit: { transition: { staggerChildren: 0.1 } },
            enter: {
              transition: { staggerChildren: 0.1, staggerDirection: -1 },
            },
          }}
        >
          {images.map((name: string) => (
            <Thumbnail
              key={name}
              name={name}
              linkName={getLinkName(name)}
              setSelected={setSelected}
            />
          ))}
        </Thumbnails>
      </GalleryWrapper>
    </LayoutContainer>
  );
};

export default Gallery;

const GalleryWrapper = styled.div`
  background: linear-gradient(250deg, #6c7981, #aa94e6);
  padding: 40px;
  min-height: 100vh;
  position: relative;
  margin: 0;
`;

const Thumbnails = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;
