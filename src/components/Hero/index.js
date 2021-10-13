import React from 'react'
import Navbar from '../Navbar'
import { HeroContainer, HeroContent, HeroItems, HeroH2, HeroP, HeroBtn, } from './HeroElements'

const Hero = () => {
    return (
    <HeroContainer>
        <Navbar />
        <HeroContent>
            <HeroItems>
                <HeroH2>Erald and Louis 
                    <br></br>
                    Greatest Meatballs Ever</HeroH2>
                <HeroP>Ready in 10 minutes</HeroP>
                <HeroBtn>Place Order</HeroBtn>
            </HeroItems>
        </HeroContent>
    </HeroContainer>
    );
};

export default Hero;
