import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='container1'>
    </div>
    
    <div className='container'>
    <div className='box'><h1><a href='https://www.w3schools.com/html/default.asp'><span>Html</span></a></h1></div>
    <div className='box'><h1><a href='https://www.w3schools.com/css/default.asp'><span>CSS</span></a></h1></div>
    <div className='box'><h1><a href='https://www.w3schools.com/js/default.asp'><span>Javascript</span></a></h1></div>
    <div className='box'><h1><a href='https://www.w3schools.com/nodejs/default.asp'><span>Node </span></a></h1></div>
    <div className='box'><h1><a href='https://www.geeksforgeeks.org/express-js/'><span>Express </span></a></h1></div>
    <div className='box'><h1><a href='https://www.w3schools.com/mongodb/index.php'><span>MongoDB</span></a></h1></div>
    <div className='box'><h1><a href='https://www.geeksforgeeks.org/mongoose-tutorial/'><span>Mongoose</span></a></h1></div>
    <div className='box'><h1><a href='https://www.netlify.com/'><span>Netlify</span></a></h1></div>
    </div>
    
      
    </>
  )
}

export default App
