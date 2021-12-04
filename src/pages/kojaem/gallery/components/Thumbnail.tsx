import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "@emotion/styled";

const transition = { duration: 0.5 };

const thumbnailVariants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { transition },
  },
};

const frameVariants = {
  hover: { scale: 0.95 },
};

const imageVariants = {
  hover: { scale: 1.1 },
};

type Props = {
  name: string;
  linkName: string;
  setSelected: (link: string) => void;
};

export const Thumbnail = ({ name, linkName, setSelected }: Props) => {
  return (
    <Wrapper variants={thumbnailVariants}>
      <Frame
        whileHover="hover"
        variants={frameVariants}
        transition={transition}
      >
        <Link
          to={`/kojaem/${linkName}`}
        >
          <ThumbnailImage
            src={require(`assets/img/KoJaem/${name}`).default}
            alt="brand"
            variants={imageVariants}
            transition={transition}
          />
        </Link>
      </Frame>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  flex: 1 0 33%;
  margin: 10px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  max-width: 800px;
  min-width: 400px;
`;

const Frame = styled(motion.div)`
  overflow: hidden;
`;

const ThumbnailImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;
