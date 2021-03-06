import React from 'react';
import './contact.css'

const textStyle = {
    color: '#50495A',
    alignText: 'center'
}

export default class Contact extends React.Component {
    render(){
        return (
            <div className={'container'}>
                <div className={'animation'}>
                    <h2 style={textStyle}>Contact Me</h2>
                    <hr style={{height: '2px', width: '100px'}}/>
                    <p style={textStyle}>
                        Email me at <a style={{color:'#50495A', fontWeight: 'bold', textDecoration: 'underline'}} href="mailto:midoz393@gmail.com">midoz393@gmail.com</a>
                    </p>
                    <p style={textStyle}>
                        Follow me on <a style={{color: '#50495A', fontWeight: 'bold', textDecoration: 'underline'}} href="https://twitter.com/notZinedine">Twitter</a>
                    </p>
                    <p style={textStyle}>
                        Connect on <a style={{color: '#50495A', fontWeight: 'bold', textDecoration: 'underline'}} href="https://www.linkedin.com/in/zidane-mohamed-15002795/">LinkedIn</a>
                    </p>
                </div>
            </div>
        )
    }
}