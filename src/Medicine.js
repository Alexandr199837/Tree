import React, {Component} from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import DropdownTreeSelect from "react-dropdown-tree-select";
import data from "./data.json";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

const onChange = (currentNode, selectedNodes) => {
  console.log("path::", currentNode.path);
};

const assignObjectPaths = (obj, stack) => {
  Object.keys(obj).forEach(k => {
    const node = obj[k];
    if (typeof node === "object") {
      node.path = stack ? `${stack}.${k}` : k;
      assignObjectPaths(node, node.path);
    }
  });
};

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
      assignObjectPaths(data);
    return (

    <div >
      <Head/>
     
                   
              <Link to='/'><button className='App-button-home'>Главная страница</button></Link>
              <DropdownTreeSelect data={data} onChange={onChange} className='mdl-demo' /> 
              <div className='bgr'>
                <Link to='/med'><button className ='App-button'>Лекарства</button></Link>
                <button className ='App-button'>Производитель</button>
                <button className ='App-button'>Поставщик</button>
                <button className ='App-button'>Поступление</button>
                <Link to='/sale'><button className ='App-button'>Продажа</button></Link>
                <button className ='App-button'>История цены</button>
                <button className ='App-button'>Единица измерения</button>
            </div>

          </div>

    );
  }
}


                

export default Medicine;