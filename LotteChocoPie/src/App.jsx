//component file is the file whose first letter is capital and the file comes with .jsx extension
// for boiler plate code write rafce and hit enter
// arrow function is used as a lambda expression to reduce the need of writing the whole code separately
//import->add react from node module
// export ->helps other files/folder access this function
// bable is a converter used by react to convert its code(jsx or xml file) into javascript code that the web browser can understand
// to add component add <Student click and then />
// import React from 'react'
// import Student from './Components/Student'
// const App = () => {
//   return (
//     <div style={{display:"flex",gap:'10px'}}>
//       <Student/><br></br>
//       <Student/><br></br>
//       <Student/>
//     </div>
//   )
// }

// export default App





import React from 'react'
import Header from './Components/Header'
import Menu from './Components/Menu'

const App = () => {
  return (
    <div>
      <Header/>
      <Menu name="Pasta"image="https://www.sharmispassions.com/wp-content/uploads/2015/12/alfredopasta5.jpg"price="120"/>
      <Menu name="Bread Pakoda"image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-PgDnDCUJYY3RVBm8DsE1Hymq9lOEXQlYcO49KDfbVc1Hj3VXsXLlNPA&s=10"price="40"/>
    </div>
  )
}

export default App