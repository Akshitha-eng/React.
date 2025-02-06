/*import React from "react";

function App() {
  //let ele = React.createElement("div" , {className:"App"}),
  //React.createElement("h1" ,null, "Header")
  //)
  let username = "Akshitha";
  return (
    <div className="App">
      <h1 style={{color:"red"}}>Welcome</h1>
      <h1>Header</h1>
      <input/>
        
    </div>
  );
}

export default App;*/



import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'
import Sidebar1 from './components/Sidebar1'
import Sidebar2 from './components/Sidebar2'
import CBCStateEx from './stateexample/CBCStateEx'
import FBCStateEx from './stateexample/FBCStateEx'


const App = () => {
  return (
    // <div className = 'app'>
    // <Navbar/>
    // <Main/>
    // <div className='side1'>
    // <Sidebar1/>
    // <Sidebar2/>
    // <CBCState/>
    // </div>
    // <Footer/>
    // </div>
    <CBCStateEx/>
    
  )
}

export default App

/*import React, { Component } from 'react'
import CBCPropEx from './Propsex/CBCPropsEx'

export default class App extends Component {
  render() {
    return (
      <div>
        <CBCPropEx
        username="akshitha"
        age={20}
        hobbies={["playing" , "reading books"]}
        address={{city:"hyderabad", area:"jagathgirinagar"}}
        sendFun={function(){alert("hi i am akshitha")}}

        />
        
      </div>
    )
  }
}*/



