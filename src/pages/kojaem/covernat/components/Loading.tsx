import styled from '@emotion/styled';
import React, { useRef, useState } from 'react';
import { motion } from "framer-motion";

// type Props = {
//     setLoading: (loading:boolean) => void;
// }

export const Loading = () => {
    // const loading = useRef<HTMLSpanElement>(null);
    // const height = loading.current?.clientHeight;

    return (
    <LoadingWrapper>
        <Colored 
            initial={{ height: 0 }}
            animate={{ height: 60 }}
            exit={{ opacity: 0 }}
            // ref={loading}
        />


        <LoadingImage
            src="/koJaem/img/covernat/Covernat_logo.png" 
        />
    </LoadingWrapper>

    );

};

const LoadingWrapper = styled.div`
    position: relative;
    height:100vh;
    text-align:center;
    display: flex;
    justify-content: center;
    background-color:#d7d7d5;
`;

const Colored = styled(motion.span)`
    position: absolute;
    width: 240px;
    height: 0px;
    bottom: 54%;
    transition: height 2000ms linear;
    background-color: #37664d;
    :hover {
        //height: 100px; // 100px까지 애니메이션. hover 말고 그냥.
    }
}
`;

const LoadingImage = styled(motion.img)`
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
`;

