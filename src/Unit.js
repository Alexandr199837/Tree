import React, {Component} from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import './App.css';
import SimpleTable from './unittable';
import LeftPanel from './LeftPanel';

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

class Unit extends Component{ 
    render() {
   
    return (

    <div >
      <Head/>
     
                   
              <Link to='/'><button className='App-button-home'>Главная страница</button></Link>
              <LeftPanel/>
              <SimpleTable/>

          </div>

    );
  }
}


                

export default Unit;