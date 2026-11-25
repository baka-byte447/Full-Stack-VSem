import './App.css'
import Button from './Button.jsx'
import { useState } from 'react'


function App() {

  const [count, setCount] = useState(0)

  const handleBtnClick = () => setCount((count) => count+1);
  const obj = {
    src : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSue--mhreNaE6Rqry4uXLEhsoZU-NDUxQQcUmE-z4Ang&s",
    id : "1234",
    name : "DUCK"
  }
  return(
    <>
      <section id="center">

        <img src="obj.src" alt="" style={{width:"10%"}} />
        <p className="test">{obj.id}</p>
        <p className="test">{obj.name}</p>

        <Button count={count} handleBtnClick={handleBtnClick}/>
        <Button count={count} handleBtnClick={handleBtnClick}/>
        <Button count={count} handleBtnClick={handleBtnClick}/>
        <Button count={count} handleBtnClick={handleBtnClick}/>
        <Button count={count} handleBtnClick={handleBtnClick}/>
      </section>
    </>
  )
}
export default App
