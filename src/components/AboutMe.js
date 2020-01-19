import React from 'react';
import {default as Pic} from './Picture';

const Picture = () => {
    return(
        <div>
            <Pic />
        </div>
    )
}

const Bio = () => {
    return(
        <div>
            Hello World2
        </div>
    )
}

const About = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
            <Picture />
            <Bio />
        </div>
    )
}

export default About;