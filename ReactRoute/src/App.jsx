import React from 'react'
import { Link } from 'react-router-dom'
function Home(){
  return <h1>This is my Home Page</h1>
}
function About(){
  return <h1>This is my About Us Page</h1>
}
const App = () => {
  return (
    <div>
      <BrowserRouter><map>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT US</Link>
        </map></BrowserRouter>
    </div>
  )
}

export default App