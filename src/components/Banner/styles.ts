import styled from "styled-components";

export const BannerContainer = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-items: center;
`;

export const BannerImage = styled.div`
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-image: url('https://wallpaperaccess.com/full/49618.jpg');
    background-position: 22.5% 35%;
    background-size: 205%;
`;

export const ContainerHolder = styled.div`
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.70);
    backdrop-filter: blur(2px);
`;

interface TitleProps {
    font: string
}

export const TitleName = styled.p<TitleProps>`
    position: relative;
    z-index: 3;
    font-size: 120px;
    color: white;
    font-family: ${props => props.font};
    text-shadow: 10px 10px 0px rgba(0, 0, 0, 1);
`