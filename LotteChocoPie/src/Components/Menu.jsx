import React from 'react'

const Menu = (props) => {
  return (
    <div style={{display:"flex",justifyContent:,border:'2px solid',borderColor:'solid red',backgroundColor:"lightpink",height:'300px',height:'250px',width:'200px',margin:'30px'}}>
<h3>{props.name}</h3>
<img src={props.image} height='100px' width='100px'></img>
<h4>Rs.{props.price}</h4>
    </div>
  )
}

export default Menu