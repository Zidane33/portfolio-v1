import Flippy, { FrontSide, BackSide } from 'react-flippy';
import React from 'react';
import Tech from './Tech';
import './card.css';

const cardStyle = {
    width: '45%',
    height: 'auto',
    margin: '100px 25px 100px 25px',
    cursor: 'pointer',
    color: '#F6F0FD'
}

export default class Card extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Flippy flipOnHover={false} flipDirecttion={"horizontal"} style={cardStyle} flipOnClick={true}>
                <FrontSide animationDuration={1500} style={{backgroundColor: '#9C6ADE'}}>
                    <h1 style={{display: 'inline'}}>{this.props.name}</h1>
                    <p style={{display: 'inline', fontSize: '0.9em', marginLeft: '20px'}}>-- click for demo</p>
                    <p style={{height: '50%', paddingTop: '20%', paddingBottom: '20%'}}>{this.props.text}</p>
                    <h3>Tech Used</h3>
                    <Tech tech={this.props.tech} />
                </FrontSide>
                <BackSide>
                    <a href="#">Live Website</a>
                    <a href="#">Source Code</a>
                </BackSide>
            </Flippy> 
        )
    }

}