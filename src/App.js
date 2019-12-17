import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Medicine from'./Medicine';
import Home from './Home';
import Sale from './Sale';
import History from './HistoryPrice';
import Unit from './Unit';




class App extends Component {
  render(){  
  return (
        <div>
          <Router>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path="/med" component={Medicine} /> 
              <Route path="/sale" component={Sale}/>
              <Route path="/price" component={History}/>
              <Route path="/unit" component={Unit}/>                          
            </Switch>
          </Router>
          
        </div>
        
          
        
  );
}
}

export default App;
