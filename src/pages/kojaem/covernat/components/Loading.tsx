import styled from '@emotion/styled';
import React from 'react';


export const Loading = () => (
    <LoadingWrapper>
        <Colored />
        <LoadingImage src="/koJaem/img/covernat/Covernat_logo.png" />

    </LoadingWrapper>
);

const LoadingWrapper = styled.div`
    position: relative;
    height:100vh;
    text-align:center;
    display: flex;
    justify-content: center;
    background-color:#d7d7d5;
`;

const Colored = styled.span`
    position: absolute;
    width: 240px;
    height: 0px;
    bottom: 50%;
    transition: height 1000ms linear;
    background-color: #37664d;
    :hover {
        //height: 100px; // 100px까지 애니메이션. hover 말고 그냥.
    }
}
`;

const LoadingImage = styled.img`
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
`;

