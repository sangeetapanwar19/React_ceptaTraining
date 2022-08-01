import React from 'react';

const Interest = (props) => {
    return(
        <>
        <div>
        <label> Interest: </label> 
        <input type="number" onChange={props.handleClick} value= {props.interest}/>
        </div>
        </>
    )
}

export default Interest;
