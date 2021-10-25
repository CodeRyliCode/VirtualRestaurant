import React, {useState} from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar';
import { HeroContainer, HeroContent, HeroItems, HeroH2, HeroP, HeroBtn, } from './HeroElements'

const Hero = () => {
    const[isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
    <HeroContainer>
        <Navbar toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle}/>
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
