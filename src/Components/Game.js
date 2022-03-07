import React, { useState } from "react";
import Board from "./Board";
import { calculateWinner } from "../helper";

const styles ={
    width: '200px',
    margin : '20px auto',
};

function Game()  {
    //hooks
    const [history , setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber ,setStepNumber] = useState(0);
    const [xisNext,setXisNext] = useState(true);
    const [draw , setDraw] =useState(false);
    const winner = calculateWinner(history[stepNumber]);
    //
    const handleClick = (i) => {
        const timeInHistory = history.slice(0,stepNumber + 1);
        
        const current = timeInHistory[stepNumber];

       const squares = [...current];
       
       
       if(winner ||  squares[i]) return;
       
       //draw logic
       if(winner===null && timeInHistory.length === 9){
           setDraw(true);
       }

       

       squares[i] = xisNext ? 'X' : 'O';
       setHistory([...timeInHistory,squares]);
       setStepNumber(timeInHistory.length);
       setXisNext(!xisNext);
    }
   
    //Time travel Function
    const jumpTo = (step) => {
        setStepNumber(step);
        setDraw(false);
        setXisNext(step % 2 === 0);
    }

    const renderMoves = () => (
       
        history.map((_step,move) => {
            const destination = move ? `Go to move#${move}`: 'Go to Start';
            return(
                <li key={move}>
                    <button onClick={() => jumpTo(move)}>{destination}</button>
                </li>
            )
        })

    )
    return (
        <div>
               
                      <Board squares={history[stepNumber]} onClick={handleClick}/>
                 
                  <div style={styles}>
                     <p>
                     
                         {winner ?  'Winner:' + winner : 'Next Player : ' + (xisNext ? 'X' : 'O')}
                     </p>
                     <p>{draw ? 'The match is a draw' : ''}</p>
                
                     {renderMoves()}
                  </div>
         </div>

        
         
       
       
       
      
         
      
    );
  }
  
  export default Game;