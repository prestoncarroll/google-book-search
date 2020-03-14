import React, { useState } from 'react';
import axios from 'axios';


const APIKEY = "AIzaSyB1-g38wEt_Oropb69u87KvY740kGkMiCc";


function Home() {
    const [book, setBook] = useState("")
    const [books, setBooks] = useState([])
    const [cart, setCart] = useState([])

    //put api key above

    function handleChange(event) {

        const book = event.target.value;
        setBook(book);

    }

    function handleSubmit(event) {
        event.preventDefault();

        if (book) {
            axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + APIKEY + "&maxResults=35")
                .then(data => {
                    console.log(data.data.items)
                    setBooks(data.data.items);
                })

        }

    }

    function handleCart(event) {



        console.log(event.currentTarget.book)
    }


    return (


        <div className="container">
            <h1> Search for books! </h1>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" onChange={handleChange}
                        className="form-control"
                        placeholder=" search for books"
                    />
                </div>
                <button type="submit" className="btn btn-danger"> Search</button>
            </form>


            {books.map(book => (

                <div key={book.id}  >
                    <a target="_blank" href={book.volumeInfo.previewLink || ''} >
                        <img src={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail ? book.volumeInfo.imageLinks.thumbnail : ''}
                            alt={book.title} />

    




                        {/* <Link to="">Home</Link> */}
                    </a>



                    <button book={book} onClick={handleCart} className="btn btn-caution"> add to cart</button>
                </div>



            ))}



        </div >

    );
}

export default Home;

