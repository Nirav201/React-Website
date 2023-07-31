import React from 'react';
import Heropart from './Heropart';
import Ourservices from './Ourservices';
import Clients from './Clients';
import Projects from './Projects';


function Homepage() {
  return (
    <div>
      <Heropart></Heropart>
      <Ourservices></Ourservices>
      <Projects></Projects>
      <Clients></Clients>
    </div>
  )
}

export default Homepage
