import React from "react";


const style ={
    background : '#E0115F',
    border : '2px solid black',
    fontSize : '30px',
    fontWeight : '800',
    cursor : 'pointer',
    outline : 'none'

};

function  Square(props){ 
    return (
     
          <button style={style} onClick={props.onClick}>
              {props.value}
          </button>
          
      
    );
  }
  
  export default Square;