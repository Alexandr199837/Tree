import React, {Component} from 'react';
import './App.css';
import LeftPanel from './LeftPanel';



class Head extends Component {
    render() {
      return <div className='App-header'>
        <div className='App-font'>Аптека+   </div>  
      <div>
        <button className='App-button-login'>Войти</button>     
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
            
                <LeftPanel/>
                
                    </div>
        )
    }
}



export default Home;