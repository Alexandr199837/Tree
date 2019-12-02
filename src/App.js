import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Medicine from'./Medicine';
import Home from './Home';
import DropdownTreeSelect from "react-dropdown-tree-select";
import data from "./data.json";



class App extends Component {
  render(){  
  return (
        <div>
          <Router>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path="/med" component={Medicine} />                         
            </Switch>
          </Router>
          
        </div>
        
          
        
  );
}
}

export default App;
