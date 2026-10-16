import React,{useState} from 'react'

const Counter = () => {
    const [count,setCount]=useState(0);
    function inc(){
        if(count<10)
        setCount(count+1)
    else
        alert("Max number reached")
    }
    function dec(){
        if(count>0)
        setCount(count-1)
    else
        alert("minimum number is 0")
    }
  return (
    <div>
        <h3>Counter App</h3>
        <br/>
        <button onClick={inc}>+</button>
        <span>{count}</span>
        <button onClick={dec}>-</button>
    </div>
  )
}

export default Counter