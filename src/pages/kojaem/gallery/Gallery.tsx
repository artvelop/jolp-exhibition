import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import LayoutContainer from '../LayoutContainer/LayoutContainer';


const images = [
    "MUSINSA.jpg",
    "COVERNAT.jpg",
    "KIRSH.jpg",
    "LMC.jpg"
];

const link = [
    "MUSINSA",
    "COVERNAT",
    "KIRSH",
    "LMC"
]


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
    index: number,
    setSelected: (link: string) => void
}

const Thumbnail = (props:Props) => {
    return (
        <>
        <motion.div className="thumbnail" variants={thumbnailVariants}>
            <motion.div
            className="frame"
            whileHover="hover"
            variants={frameVariants}
            transition={transition}
            >
             <Link to={`/kojaem/${link[props.index]}`}
             onClick={() => {props.setSelected(link[props.index])}}>
               <motion.img
               src={`/KoJaem/img/${props.name}`}
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

type GalleryProps = {
    selected: string
    setSelected: (link: string) => void
}

const Gallery = (props:GalleryProps) => {
    return(
        <LayoutContainer
            LinkName="HOME"
            color="#5aaddd"
            selected={props.selected}
            setSelected={props.setSelected}
            >
            <h1>KoJaem</h1>
            <div className="gallery">
                <motion.div
                className="thumbnails"
                initial="initial"
                animate="enter"
                exit="exit" // 애니메이션이 끝날때
                variants={{ exit: {transition: { staggerChildren: 0.5 }}}}
                >
                    {images.map((name:string, index:number) => (
                        <Thumbnail key={name} name={name} index={index} setSelected={props.setSelected}/>
                    ))}
                </motion.div>
            </div>
        </LayoutContainer>
    );
};

export default Gallery;