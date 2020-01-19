import React from 'react';
import LazyHero from 'react-lazy-hero';
import img from '../../public/static/code.jpg';

const h1Style = {
    color: 'white',
    padding: '35px',
    backgroundColor: 'black',
    border: '2px solid black',
    borderRadius: '50px',
    whiteSpace: 'pre',
}

const Zidane = <span style={{color:'purple', opacity: 0.8}}>{"Zidane."}</span>
const heroText = [`Hello, I'm `, Zidane, "\n","\n", `I Am A Fullstack Developer`]

const Hero = () => {
    return (
        <div>
            <LazyHero style={{height: '100vh', marginBottom: '50px'}}imageSrc={img} parallaxOffset={100} color='purple' opacity={0.3}>
                <h1 style={h1Style}>{heroText.map(x => x)}</h1>
            </LazyHero>
        </div>
    );
}

export default Hero;