import React from 'react'
import image from '../assets/image.png'
import { useState } from "react";
const Move = () => {
    const [x,setX]=useState(0);
    const [y,setY]=useState(0);
    function moveRight(){
if(x<200)
setX(x+10)
    }
    function moveLeft(){
if(x>10)
setX(x-10)
    }
    function moveUp(){
if(y>10)
setY(y-10)
    }
    function moveDown(){
if(y<200)
setY(y+10)
    }
  return (
    <div>
        <h3>Move</h3>
        <button onClick={moveRight}>right</button>
        <span>{x}</span>
        <button onClick={moveLeft}>left</button>
        <span>{x}</span>
        <button onClick={moveUp}>up</button>
        <span>{y}</span>
        <button onClick={moveDown}>down</button>
        <span>{y}</span>
        <br/>
        <img src={image}  alt="moving"
                style={{
                    position: "relative",
                    left: x,
                    top: y,
                    width: "100px"
                }}/>
    </div>
  )
}

export default Move