import React , {useState} from 'react';
import {calcWinner} from '../helpers';
import Board from './board';

const header = {
    textAlign:'center',
    justifyContent:'center',
    color : 'lightblue',
    fontSize:'50px' 
}
const styles = {
    width:'300px',
    margin : 'auto',
    color : 'cyan',
    fontSize:'30px' 
}
const list = {
   listStyleType:'none' 
}

const btnStyle = {
    width:'100%',
    margin : 'auto',
    backgroundColor : 'lightcyan',
    fontSize:'20px',
    color: 'cyan',
    fontWeight:'500',
    border:'2px solid cyan',
    borderRadius : '5px',
    padding:'10px'
}

const Game = () => {
    const [history,setHistory] = useState([Array(9).fill(null)]);
    const [stepNo,setStepNo] = useState(0);
    const [xIsnext,setXisNext] = useState(true);
    const winner = calcWinner(history[stepNo]);


    const handleClick = i => {
        const timeInHistory= history.slice(0, stepNo + 1);
        const current = timeInHistory[stepNo];

        const squares =[...current];
        if (winner || squares[i]) return;

        squares[i]= xIsnext ? 'X' : 'O';
        setHistory([...timeInHistory,squares]);
        setStepNo(timeInHistory.length);
        setXisNext(!xIsnext);

    }
    const jumpTo = step => {

        setStepNo(step);
        setXisNext(step % 2 === 0)
    };

    const render = () => (

        history.map((_step , move) => {
                const destination = move ? `View move #${move}` : `Start Game`;

                return(
                    <li key={move} style={list}>
                        <button style={btnStyle} onClick={() => jumpTo(move)}>{destination}</button>
                    </li>
                    
                )
        })
         
        )
    

    return(
        <>
        <h3 style={header}>Tic Tac Toe</h3>
        <Board squares={history[stepNo]} onClick={handleClick} />
        
        <div style={styles}>

        <p>{winner ? 'Winner : ' + winner : 'Next Player : ' + (xIsnext ? 'P1' : 'P2')}</p>
        {render()}

        </div>
        </>
    )
};

export default Game;