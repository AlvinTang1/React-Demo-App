import React, { Component } from 'react';
import './App.css';
import Employee from './employee';
import Training from './Training/training';


class  App extends Component {

  render(){
  return (
    <div>      
      <Employee></Employee>  
      <Training></Training>
      
    </div>    
  );
}
}

export default App;
