import React from 'react';
import ReactDOM from 'react-dom';
// import axios from 'axios';

import './App.css';

function App() {
  return (
    <div class="container">
      <h1> Search for books!</h1>
      <form>
        <div class="form-group">
          <input type="text" className="form-control"
            placeholder=" search for books"
          />
        </div>
        <button type="submit" className="btn btn-danger"> Search</button>
      </form>


    </div >

  );
}

export default App;
