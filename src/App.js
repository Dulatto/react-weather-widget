import React, {Component} from 'react';
import './App.css';
import GetOnlineForecast from './GetOnlineForecast';




export default class App extends Component {
   render(){
      return (
    <div className="container">
           <GetOnlineForecast  />
           
    </div>
  );
}
}


