import React, { useState, useEffect } from 'react'

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })

  useEffect(() => {
    console.log("form data update", formData) 
  }, [formData])

  const handleChange=(e)=>{
    setformData({
      ...formData,
      [e.target.name]:e.target.value

    })
  }
  const handleSubmit=(e)=>{
    e.peventDefault();
    alert("registeration successful");
    console.log(formData);
  }
  return (
    
      <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="enter name" value={formData.name}/>
        <br/>
      </form>
      </div>
  )
}

export default App