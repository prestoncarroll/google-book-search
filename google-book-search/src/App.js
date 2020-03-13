import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import './App.css';

function App() {

  const [book, setBook] = useState("")
  const [result, setResult] = useState([])
  const [apiKey, setApiKey] = useState("")
  //put api key above

  function handleChange(event) {

    const book = event.target.value;
    setBook(book);

  }

  function handleSubmit(event) {
    event.preventDefault();


    axios.get("https://www.googleapis.com/books/v1/volumes?q=avengers" + book + "&key=" + apiKey + "&maxResults=35")
      .then(data => {
        console.log(data.data.items)
        setResult(data.data.items);
      })

  }


  return (
    <div className="container">
      <h1> Search for books!</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" onChange={handleChange}
            className="form-control"
            placeholder=" search for books"
          />
        </div>
        <button type="submit" className="btn btn-danger"> Search</button>
      </form>


      {result.map(book => (
        <a target="_blank" href={book.volumeInfo.previewLink || ''} >
          <img src={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail ? book.volumeInfo.imageLinks.thumbnail : ''}
            alt={book.title} />
        </a>

      ))}


    </div >

  );
}

export default App;
