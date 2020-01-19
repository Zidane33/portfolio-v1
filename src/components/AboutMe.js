import React from 'react';
import {default as Pic} from './Picture';

const Picture = () => {
    return(
        <div style={{alignSelf: 'center'}}>
            <Pic />
        </div>
    )
}

const Bio = () => {
    return(
        <div style={{margin:"25px", flexGrow: '1'}}>
            <h3>About Me</h3>
            <p>
                I am an accomplished Executive Director who works with graduate students to help them navigate graduate school.
                I am however an aspiring web developer who is passionate about all things tech and programming. What started as a hobby blossomed into a career aspiration. 
                Working for non-profits taught me a lot on how best to solve complex problems with limited resources, which is an invaluable skill in the tech world.
            </p>
            <p>
                I am fully committed to being the best developer I can be, and to that end I am seeking to develop my skills further working on software that will help people. 
                I am most interestd in spaces that empower others and provide them with the resources to grow. 
            </p>
        </div>
    )
}

const About = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', height: '100%', background: 'black', padding: '1em', marginBottom: '2em'}}>
            <Picture />
            <Bio />
        </div>
    )
}

export default About;