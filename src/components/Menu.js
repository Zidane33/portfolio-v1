import React from 'react';
import Logo from './Logo';
import './menuStyle.css';

export default class Menu extends React.Component{

    render(){
        return (
            <nav>
                <ul className="ulStyle">
                    <li className='logoStyle'> <Logo /></li>
                    <li className='liStyle'>ABOUT</li>
                    <li className='liStyle'>
                        <a href="#projects">PROJECTS</a>
                    </li>
                    <li className='liStyle'>RESUME</li>
                    <li className='liStyle'>
                        <a href="#contact">CONTACT</a>
                    </li>
                </ul>
            </nav>
        )
    }
}