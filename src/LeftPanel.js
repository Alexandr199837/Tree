import React, {Component} from 'react';
import './App.css';
import { Link } from 'react-router-dom';




class LeftPanel extends Component {
    render() {
      return <div>
      <div className='bgr'>
      <Link to='/med'><button className ='App-button'>Лекарства</button></Link>
      <button className ='App-button'>Производитель</button>
      <button className ='App-button'>Поставщик</button>
      <button className ='App-button'>Поступление</button>
      <Link to='/sale'><button className ='App-button'>Продажа</button></Link>
      <Link to='/price'><button className ='App-button'>История цены</button></Link>
      <Link to='/unit'><button className ='App-button'>Единица измерения</button></Link>
  </div>
      </div>
    }
}

export default LeftPanel;