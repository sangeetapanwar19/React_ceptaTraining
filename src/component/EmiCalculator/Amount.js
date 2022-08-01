import React from 'react';

const Amount = (props) => {
    return(
        <>
        <div>
       <label>Amount:  </label> 
        <input type="number" onChange={props.handleClick} value={props.amount}/>
        </div>
        </>
    )
}

export default Amount;