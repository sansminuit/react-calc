// eslint-disable-next-line
import React, {useState} from 'react'

const Button = (props) => {
    return (
        <div className={`col-${props.column}`}>
            <button className='calc-button' onClick={() => props.action(props.symbol)} >{props.symbol}</button>
        </div>
    )
}

export default Button
