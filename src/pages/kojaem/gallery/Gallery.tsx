import { motion } from "framer-motion";
import LayoutContainer from '../components/LayoutContainer';
import { Thumbnail } from "./components/Thumbnail";


const images:string[] = [
    'MUSINSA.jpg',
    'COVERNAT.jpg',
    'KIRSH.jpg',
    'LMC.jpg'
];


type GalleryProps = {
    selected: string
    setSelected: (link: string) => void
}

const Gallery = ({selected, setSelected}:GalleryProps) => {
    
    const getImageName = (image:string) => (image.replace(/.jpg|.jpeg|.png|.gif/gi,''))

    return(
        <LayoutContainer
            selected={selected}
            setSelected={setSelected}
            >
            <h1>KoJaem</h1>
            <div className="gallery">
                <motion.div
                className="thumbnails"
                initial="initial"
                animate="enter"
                exit="exit" // 애니메이션이 끝날때
                variants={{ exit: {transition: { staggerChildren: 0.1 }},
                            enter: {transition: { staggerChildren: 0.1, staggerDirection: -1}}}}>
                                {/* staggerDirection: -1 애니메이션 방향을 반대로 함. */}
                    {images.map((name:string, i:number) => (
                        <Thumbnail key={name} name={name} index={i} imageName={getImageName(name)}
                        setSelected={setSelected}/>
                    ))}
                </motion.div>
            </div>
        </LayoutContainer>
    );
};

export default Gallery;