import React from 'react';
const style ={
    background:'lightblue',
    border : '2px solid lightcyan',
    borderRadius : '10px',
    fontSize: '60px',
    fontWeight:'500',
    cursor:'pointer',
    outline:'none'

}

const Square = ({value , onClick}) => (
<button style = {style} onClick = {onClick}>
    {value}
    </button>
    );

export default Square;

