import React, {Component} from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import DropdownTreeSelect from "react-dropdown-tree-select";
import data from "./data.json";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import SpanningTable from './demo';


class Head extends Component {
  render() {
    return <div className='App-header'>
      <div className='App-font'>Аптека+   </div>  
    <div>
      <button className='App-button-login'>Login</button>     
      </div>
      </div>
  }
}

class Medicine extends Component{ 
    render() {
   
    return (

    <div >
      <Head/>
     
                   
              <Link to='/'><button className='App-button-home'>Главная страница</button></Link>
              <SpanningTable/>

          </div>

    );
  }
}


                

export default Medicine;