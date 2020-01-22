import React from 'react';

const style = {
    background: '#230051',
    fontSize: '0.8em',
    color: 'white',
    border: '2px black solid',
    float: 'left',
    padding: '7px',
    listStyle: 'none',
    margin: '0px 5px 5px 0px'
}

const Tech = (props) => {
    const tech = props.tech.map(tech => tech)
    console.log(tech)
    const arr = tech.map((tech) => {
        return(
            <ul>
                <li style={style} key={tech.id}>
                    {tech}
                </li>
            </ul>
        )
    })
    return arr
}

export default Tech;