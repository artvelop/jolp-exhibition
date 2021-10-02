import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const transition = { duration: 0.5 }; // 전체적인 transition 크기 조절

const thumbnailVariants = {
  initial: { scale: 0.9, opacity: 0},
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { transition }
  }
};

const frameVariants = { // 마우스 올리면 사진 div 크기를 축소
  hover: { scale: 0.95 }
};

const imageVariants = { // 마우스 올리면 이미지가 크게 보이게 확대.
  hover: { scale: 1.1 }
};

// frameVariants 와 imageVariants 를 같이 써서 마우스를 올리면
// 사용자에게 전체 사진의 크기는 작아지면서, 확대되는 느낌을 줄 수 있음.





type Props = {
    name: string,
    imageName: string,
    setSelected: (link: string) => void
}

export const Thumbnail = ({name, imageName, setSelected}:Props) => {
    return (
        <>
        <motion.div className="thumbnail" variants={thumbnailVariants}>
            <motion.div
            className="frame"
            whileHover="hover"
            variants={frameVariants}
            transition={transition}
            >
             <Link to={`/kojaem/${imageName}`}
             onClick={() => {setSelected(imageName)}}>
               <motion.img
               src={`/KoJaem/img/${name}`}
               alt="brand"
               variants={imageVariants}
               transition={transition}
              />
          </Link>
         </motion.div>
        </motion.div>
        </>
    );
}