import React, {Component} from 'react';
import './App.css';
import { Link } from 'react-router-dom';




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

class Home extends Component {
    render()
    {
        return(
            <div className="App">
               <Head/>            
            <div>
                <div className='bgr'>
                <Link to='/med'><button className ='App-button'>Лекарства</button></Link>
                <button className ='App-button'>Производитель</button>
                <button className ='App-button'>Поставщик</button>
                <button className ='App-button'>Поступление</button>
                <button className ='App-button'>Продажа</button>
                <button className ='App-button'>История цены</button>
                <button className ='App-button'>Единица измерения</button>
            </div>
                </div>
                    </div>
        )
    }
}



export default Home;