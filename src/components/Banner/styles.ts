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
    background-image: url('https://laart.art.br/wp-content/uploads/2020/09/arterenascentista7.png');
    background-position: 22% 35%;
    background-size: 170%;
`;

export const ContainerHolder = styled.div`
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.55);
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
    text-shadow: 8px 8px 5px rgba(0, 0, 0, 1);
`;

export const LettersHolder = styled.div`
    display: flex;
    gap: 8px;
`;