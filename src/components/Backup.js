import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
} from "react-router-dom";


// const nameFirst = "Nirav Lad";

// const nameFunc = {
//   firstName: "Learn",
//   lastName: "React"
// }

// function technology(nameFunc) {
//   return nameFunc.firstName + nameFunc.lastName;
// }

// const element = React.createElement(
//   'h1',
//   { className: 'greeting' },
//   'Hello, world!'
// );

// function tick() {
//   return new Date().toLocaleTimeString();
// }

function App() {

  

  return (
    <Routes>
      <Route></Route>
    <div className="App">
      {/* <header className="App-header">
        {element}
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello {nameFirst}</h1>
        <p>{nameFunc.firstName} {nameFunc.lastName}</p>
        <b>{technology(nameFunc)}</b>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h3>It is {tick()}.</h3>
      </header> */}
      
      {/* Pass props value set nav bar */}

      
      <Navbar title="TextUtils" LinkText="Link" NavNumber={5}></Navbar>
      
      {/* defaults props value set nav bar */}
      <Navbar ></Navbar>

      

      <div className='container'>
        {/* <TextForm Heading="Enter the text to analyze"></TextForm> */}
        <About></About>
      </div>
    </div>
    </Routes>
  );
}

// setInterval(tick, 1000);

export default App;
