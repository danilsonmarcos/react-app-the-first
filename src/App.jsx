import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Button text="Click Me" color="yellow" fontSize="20" />
        <Button text="Don't Click Me!" color="pink" fontSize="40"/>
        <Button text="Click Me" color="green" fontSize="30"/>
      </div>
    </>
  );
}

// a function that simbolize the button
//adding props to make the changes more dynamic

function Button(props){
  //variable that will carry the styles to put in each button we create 
  const buttonStyle = {
    color: props.color, 
    fontSize: props.fontSize + 'px'
  }

  return (
    <>
      <button style={buttonStyle}>{props.text}</button>
    </>
  ); 
}

export default App
