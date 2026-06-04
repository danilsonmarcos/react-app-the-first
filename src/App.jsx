import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const animals = ["Lion", "Cow","Snake", "Lizard"]; 
  const animalsList = animals.map((animal) => <li key={animal}>{animal}</li>); //the key element inside the li element, is to locate the animal inside the animals array(it's like searching by index using vector or arraylists)

  return (
    <>
      <div>
        <h1>Animals: </h1>
        <List animals={animals}/> 
      </div>
    </>
  );
}

//function that represent the list item 
function ListItem (props){
  return <li>{props.animal}</li>
}

//the main function of the list 
function List (props){
  //conditon to present the "Loading..." information, if there's no item on the represented list
  if (!props.animals){
    return <div>Loading...</div>
  }

  //or if the list length is 0 (that indicates that there's no item inside) return "There are no animal in the list"
  if (props.animals.length === 0){
    return <div>There are no animal in the list!</div>
  }

  return(
    <ul>
      {props.animals.map((animal) => {
        return animal.startsWith("L") && <li key={animal}>{animal}</li>;
      })}
    </ul>
  )
}

// a function that simbolize the button
//adding props to make the changes more dynamic
//This fuctions was used on a lesson about (Passing data between components)
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
