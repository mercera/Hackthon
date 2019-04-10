
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {


   

  render() {

    
    return (
      <div className="App">
        <Header/>
        <Intro/>
      </div>
    );
  }
} 
class Header extends Component{
  render(){
    return(

<div>
   <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
</div> );
  }
}

class Intro extends Component{
  render(){
    return(
<div>
<h2>some info</h2> 
<Cars msg="cars are cool!!"model="1234"/>     
</div>
    );
  }
}



class Cars extends Component{
  
  render(){
    console.log(this.props);
    return(
<div>
<h4>i am  a cars component</h4>
<h5>{this.props.msg}</h5>
<h6>{this.props.model}</h6>
</div>
    );
  }
}
 export default App;
