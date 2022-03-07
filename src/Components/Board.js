import React from "react";
import Square from "./Square";
import "../board.css";


/*const style = {
    border : '4px solid darkblue',
    borderRadius : '10px',
    width :'550px',
    height : '550px',
    margin : '0 auto',
    display : 'grid',
    gridTemplate : 'repeat(3 , 1fr) / repeat(3 , 1fr)',
    

};*/
const  Board = ({squares , onClick}) => { 
    return (
     <div className="board">
         {squares.map((square, i) => (
           <Square key={i} value={square} onClick={() => onClick(i)}/>
         ))}
       
     </div>
        
      
    );
  }
  
  export default Board;