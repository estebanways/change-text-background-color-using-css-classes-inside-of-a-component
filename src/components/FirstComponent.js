import React from 'react';
import { useState } from 'react';

export const FirstComponent = () => {

  //let name = "Esteban";
  const [name, setName] = useState("Esteban");

  let courses = [
    "CSS",
    "HTML",
    "Sass",
    "JavaSCript",
    "React",
  ];

  /*
   * Function to change the variable name
   */
  const changeName = (newName) => {
    //setName("Charles")
    setName(newName);
  }

  return (
    <div>
      <h1>My First Component</h1>
      <p>Mi name is: <strong className={name.length >=  4 ? 'green' : 'red'}>{name}</strong></p>

      <input type="text" onChange={e => changeName(e.target.value)} placeholder="Change your name" />

      <button onClick={e => {
        console.log('The saved value of current state is', name);
      } }>SHOW ACTUAL STATE</button>

      <p>My name is {name}</p>
        <button onClick={ e => changeName('ESTEBAN')} >CHANGE NAME</button>
    </div>
  )
}
