import React from 'react';
import './Info.css';

const Info = (props) => {
    const { title, date, details } = props;

    return (
        <div className='Info'>
            <h3>Title: {title}</h3>
            <p>Date: {date}</p>
            <p>{details}</p>
        </div>
    );
        
}

export default Info;