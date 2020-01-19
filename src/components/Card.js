import Flippy, { FrontSide, BackSide } from 'react-flippy';
import React from 'react';

const cardStyle = {
    width: '45%',
    height: '400px',
    margin: '100px 25px 100px 25px'
}

export default class Card extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Flippy flipOnHover={true} flipDirecttion={"horizontal"} style={cardStyle}>
                <FrontSide animationDuration={1500} style={{backgroundColor: 'purple'}}>
                    <h1>{this.props.name}</h1>
                    <p>{this.props.text}</p>
                </FrontSide>
                <BackSide>
                    <h3>Tech Used</h3>
                    <a href="#">Live Website</a>
                    <a href="#">Source Code</a>
                </BackSide>
            </Flippy> 
        )
    }

}