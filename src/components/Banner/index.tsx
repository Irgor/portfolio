import { useEffect, useState } from "react";
import { BannerContainer, BannerImage, ContainerHolder, TitleName } from "./styles";

const fonts = [
    'butterfly',
    'caesarDressing',
    'cairoVariable',
    'chelseaMarket',
    'comingSoon',
    'constantine',
    'craftyGirls',
    'dacianDonarium',
    'decoratedRomanInitials',
    'frederickat',
    'goudy',
    'homespun',
    'medusa',
    'miniver',
    'mountains',
    'praetoria',
    'princessSofia',
]

export default function Banner() {

    const [currentFont, setCurrentFont] = useState(fonts[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            let font;
            do {
                font = fonts[Math.floor(Math.random() * fonts.length)];
            } while (currentFont == font);
            setCurrentFont(font);
        }, 700);
        return () => clearInterval(interval);
    }, []);

    return (
        <BannerContainer>
            <BannerImage></BannerImage>
            <ContainerHolder></ContainerHolder>
            <TitleName font={currentFont}>Igor Nascimento</TitleName>
        </BannerContainer>
    )
}
