// rafce-> react arrow function export component
// component ->app.jsx->main.jsx->index.html(parents order wise from lower to higher)
// open in integrated terminal and do npm run dev
import React from 'react'

const Student = () => {
  return (
    <div style={{backgroundColor:'yellow',border:'2px solid blue',height:'100px',width:'300px'}}>
        <h2 style={{ color : 'red'}}>Student Info</h2>
        <img src="images.jpg" alt="" height='100px' width='100px'></img>
        <h3>Student Name:Aryan</h3>
        <h4>B.Tech (DS-A)</h4>
    </div>
  )
}
export default Student
