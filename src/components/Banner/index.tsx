import { useEffect, useState } from "react";
import { BannerContainer, BannerImage, ContainerHolder, LettersHolder, TitleName } from "./styles";

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

    const [letters, setLetters] = useState([
        { letter: 'I', font: 'butterfly' },
        { letter: 'g', font: 'caesarDressing' },
        { letter: 'o', font: 'cairoVariable' },
        { letter: 'r ', font: 'chelseaMarket' },
        { letter: '\u00A0', font: 'constantine' },
        { letter: ' N', font: 'constantine' },
        { letter: 'a', font: 'craftyGirls' },
        { letter: 's', font: 'dacianDonarium' },
        { letter: 'c', font: 'decoratedRomanInitials' },
        { letter: 'i', font: 'frederickat' },
        { letter: 'm', font: 'goudy' },
        { letter: 'e', font: 'homespun' },
        { letter: 'n', font: 'medusa' },
        { letter: 't', font: 'miniver' },
        { letter: 'o', font: 'mountains' },
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            const newLetters = letters.map((letter) => {
                return {
                    letter: letter.letter,
                    font: letter.font = fonts[Math.floor(Math.random() * fonts.length)]
                }
            })
            setLetters(newLetters);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <BannerContainer>
            <BannerImage></BannerImage>
            <ContainerHolder></ContainerHolder>
            <LettersHolder>
                {
                    letters.map(({ letter, font }, index) => {
                        return <TitleName key={index + 'letter'} font={font}>
                            {letter}
                        </TitleName>;
                    })
                }
            </LettersHolder>
        </BannerContainer>
    )
}
