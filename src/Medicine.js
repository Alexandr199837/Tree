import React, {Component} from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import './App.css';
import MaterialTableDemo from './editable';


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
                       
              <div className='bgr'>
                <Link to='/med'><button className ='App-button'>Лекарства</button></Link>
                <button className ='App-button'>Производитель</button>
                <button className ='App-button'>Поставщик</button>
                <button className ='App-button'>Поступление</button>
                <Link to='/sale'><button className ='App-button'>Продажа</button></Link>
                <button className ='App-button'>История цены</button>
                <button className ='App-button'>Единица измерения</button>
            </div>
<MaterialTableDemo/> 
          </div>

    );
  }
}


                

export default Medicine;