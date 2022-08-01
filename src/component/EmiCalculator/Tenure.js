import React from 'react';

const Tenure = (props) => {
    return(
        <>
        <div>
        <label> Tenure: </label> 
        <input type="number" onChange={props.handleClick} value = {props.tenure}/>
        </div>
        </>
    )
}

export default Tenure;
