import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav"
import Books from "./pages/Books"
import {BrowserRouter as Router, Route} from "react-router-dom"
function App() {
  return (
    <div> 
      <Nav />
      <Router>
           <Route exact path = "/" component= {Books}  /> 
      </Router>
    </div>
  );
}

export default App;
