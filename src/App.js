import React from 'react'
import './App.css';
import { Navbar, Header } from './components';
import { Technologies, Projects } from './components';
import { Contacts, Footer } from './components';
import { Project_frontend, Project_backend } from './containers';

const App = () => {
  return (
    <div className="App">
        <div className="gradiant__bg">
            <Navbar/>
            <Header/>
         </div>
        <Technologies/>
        <Project_frontend/>
        <Project_backend/>
        <Contacts/>
        <Footer/>
    </div>
  )
}

export default App;