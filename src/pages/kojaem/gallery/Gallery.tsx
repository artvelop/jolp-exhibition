import styled from '@emotion/styled';
import { motion } from "framer-motion";
import { LayoutContainer } from '../components/LayoutContainer';
import { Thumbnail } from "./components/Thumbnail";


const images:string[] = [
    'MUSINSA.jpg',
    'COVERNAT.jpg',
    'KIRSH.jpg',
    'LMC.jpg'
];


type Props = {
    selected: string
    setSelected: (link: string) => void
}

const Gallery = ({selected, setSelected}:Props) => {
    
    const getImageName = (image:string) => (image.replace(/.jpg|.jpeg|.png|.gif/gi,''))

    return(
        <LayoutContainer
            selected={selected}
            setSelected={setSelected}
            >
            <Developer>KoJaem</Developer>
            <GalleryWrapper>
                <Thumbnails
                initial="initial"
                animate="enter"
                exit="exit" // 애니메이션이 끝날때
                variants={{ exit: {transition: { staggerChildren: 0.1 }},
                            enter: {transition: { staggerChildren: 0.1, staggerDirection: -1}}}}>
                                {/* staggerDirection: -1 애니메이션 방향을 반대로 함. */}
                    {images.map((name:string) => (
                        <Thumbnail key={name} name={name} imageName={getImageName(name)}
                        setSelected={setSelected}/>
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
    min-height: 900px;
    position: relative;
    margin: 0;
`;

const Thumbnails = styled(motion.div)`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
`;


const Developer = styled.h1`
    font-size: 100px;
    text-align: center;
    position: fixed; /* 스크롤을 내려도 쫓아오게 */
    bottom: -100px;
    z-index: 1; /* 맨 앞으로 나오게 하기 위한 코드 */
    color: #f9fbf8;
    left: 50%; /* 가운데 정렬 */
    transform: translateX(-50%); /* 가운데 정렬 */
    pointer-events: none; /* 글씨에 pointer 이벤트 없애기 */
  
  
  /* 스크린 창에 따라 h1 글씨 크기, 높이 조정 */
  @media screen and (min-width: 600px) {
      font-size: 140px;
      bottom: -130px;
  }
  
  @media screen and (min-width: 800px) {
      font-size: 180px;
      bottom: -170px;
  }
  
  @media screen and (min-width: 1000px) {
      font-size: 220px;
      bottom: -200px;
  }
  @media screen and (min-width: 1200px) {
      font-size: 280px;
      bottom: -260px;
  }
`;