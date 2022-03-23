import React from 'react';
import Square from './square';

const style = {
    border:'3px solid cyan',
    borderRadius:'10px',
    width:'300px',
    height:'300px',
    padding:'2px',
    margin:'40px auto',
    display:'grid',
    gridTemplate:'repeat(3,1fr)/repeat(3,1fr)',
 
}

const Board = ({squares , onClick}) => (
<div style = { style } >
    {squares.map((square,i) => (
     <Square key ={i} value={square} onClick={()=> onClick(i)} />
    ))}

</div>
);

export default Board;