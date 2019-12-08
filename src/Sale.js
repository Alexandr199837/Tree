import React, {Component} from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import DropdownTreeSelect from "react-dropdown-tree-select";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import {render} from 'react-dom';
import { makeData, Logo, Tips } from "./Utils";
import matchSorter from 'match-sorter'
import ReactTable from "react";




class Sale extends Component {
  render() {
    return <div className='App-header'>
      <div className='App-font'>Аптека+   </div>  
    <div>
      <button className='App-button-login'>Login</button>     
      </div>
      </div>
  }
}




                

export default Sale;