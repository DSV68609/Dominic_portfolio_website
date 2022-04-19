import React from 'react'
import './App.css';
import { Navbar, Header } from './components';

const App = () => {
  return (
    <div className="App">
        <div className="gradiant__bg">
            <Navbar/>
            <Header/>
         </div>
    </div>
  )
}

export default App;