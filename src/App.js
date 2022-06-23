import './resources/styles.css';
import { Component } from 'react';
import Header from './components/header_footer/Header';

class App extends Component {
  render(){
    return ( 
      <div className="App">
        <Header/>
      </div>
    );
  }
}

export default App;
