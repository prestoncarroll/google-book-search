import React from 'react';
// import ReactDOM from 'react-dom';
// import axios from 'axios';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cart from "./components/pages/Cart";
import Home from "./components/pages/Home";




import './App.css';


function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />

      </div>
    </Router>
  )
};





export default App;
