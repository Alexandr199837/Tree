import React, {Component} from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import './App.css';
import SpanningTable from './demo';
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

class Sale extends Component{ 
    render() {
   
    return (

    <div >
      <Head/>
     
                   
              <Link to='/'><button className='App-button-home'>Главная страница</button></Link>
              <LeftPanel/>
              <SpanningTable/>

          </div>

    );
  }
}


                

export default Sale;