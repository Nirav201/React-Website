import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Home from './components/Home';
import Blog from './components/Blog';
import CrudOpration from './components/CrudOpration';
import Contact from './components/Contact';
import Footer from './components/Footer';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import DataForms from './components/DataForms';


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
    <>
    <div>
      <Navbar title="TextUtils" LinkText="About" NavNumber={5}></Navbar>
    </div>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="TextForm" element={<TextForm Heading="Enter the text to analyze"></TextForm>}></Route>
      <Route path="About" element={<About></About>}></Route>
      <Route path="Blog" element={<Blog></Blog>}></Route>
      <Route path="CrudOpration" element={<CrudOpration></CrudOpration>}></Route>
      <Route path="Contact" element={<Contact></Contact>}></Route>
      {/* <Route path="DataForms" element={<DataForms></DataForms>}></Route> */}
    </Routes>
    <div>
      <Footer></Footer>
    </div>
    </>
  );
}

// setInterval(tick, 1000);

export default App;
