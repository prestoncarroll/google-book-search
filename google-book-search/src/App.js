import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cart from "./components/pages/Cart";
import Home from "./components/pages/Home";

// import Cart from '..src/Cart';


import './App.css';

function App() {

  // const [book, setBook] = useState("")
  // const [result, setResult] = useState([])
  // const [apiKey, setApiKey] = useState("AIzaSyB1-g38wEt_Oropb69u87KvY740kGkMiCc")
  // //put api key above

  // function handleChange(event) {

  //   const book = event.target.value;
  //   setBook(book);

  // }

  // function handleSubmit(event) {
  //   event.preventDefault();


  //   axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + apiKey + "&maxResults=35")
  //     .then(data => {
  //       console.log(data.data.items)
  //       setResult(data.data.items);
  //     })

  // }


  return (

    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />

      </div>
    </Router>


    //     <div className="container">
    //       <h1> Search for books! </h1>

    //       <form onSubmit={handleSubmit}>
    //         <div className="form-group">
    //           <input type="text" onChange={handleChange}
    //             className="form-control"
    //             placeholder=" search for books"
    //           />
    //         </div>
    //         <button type="submit" className="btn btn-danger"> Search</button>
    //       </form>


    //       {result.map(book => (
    //         <a target="_blank" href={book.volumeInfo.previewLink || ''} >
    //           <img src={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail ? book.volumeInfo.imageLinks.thumbnail : ''}
    //             alt={book.title} />




    //           {/* <Link to="">Home</Link> */}
    //           <button type="submit" className="btn btn-caution"> add to cart</button>
    //         </a>


    //       ))}



    //     </div >

  );
}

export default App;
