import { Helmet } from 'react-Helmet';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import './Content.css';
import book1 from '../bg/book1.jpg'; 
import book2 from '../bg/book2.jpg'; 
import book3 from '../bg/book3.jpg'; 
import book4 from '../bg/book4.jpg'; 
import book5 from '../bg/book5.jpg'; 
import book6 from '../bg/book6.jpg'; 
import book7 from '../bg/book7.jpg'; 
import book8 from '../bg/book8.jpg'; 

export default function Home() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = () => {
      const bookData = require('../../db.json');
      setBooks(bookData.kontenBook);
    };
    fetchBooks();
  }, []);

  const getBookImage = (id) => {
    switch (id) {
      case "1": return book1;
      case "2": return book2; 
      case "3": return book3; 
      case "4": return book4;
      case "5": return book5; 
      case "6": return book6;
      case "7": return book7; 
      case "8": return book8;
      default: return null; 
    }
  };

  const handleBookClick = (id) => {//simpan berdasarkan id book yang di klik
    // Store the clicked book ID in local storage
    localStorage.setItem('bookId', id);
    navigate(`/bookrinci`); // Redirect to the detail page
  };

  return (
    <section>
      <Helmet><title>Home Page</title></Helmet>

      <div className='w3-row-padding w3-center' id="food">
        {books.slice(0, 4).map((book) => (
          <div key={book.id} className='w3-quarter' onClick={() => handleBookClick(book.id)}>
            <img className='imgBook1' src={getBookImage(book.id)} alt={`Cover of ${book.judul}`} />
            <h1 className='flex'>
              {book.judul.length > 34 ? book.judul.slice(0, 34) + '...' : book.judul}
            </h1>
            <p className='textTest'>
              {book.konten.length > 120 ? book.konten.slice(0, 120) + '...' : book.konten}
            </p>
          </div>
        ))}
      </div>

      {books.length > 4 && <hr />}

      <div className='w3-row-padding w3-center' id="food">
        {books.slice(4).map((book) => (
          <div key={book.id} className='w3-quarter' onClick={() => handleBookClick(book.id)}>
            <img className='imgBook1' src={getBookImage(book.id)} alt={`Cover of ${book.judul}`} />
            <h1 className='flex'>
              {book.judul.length > 34 ? book.judul.slice(0, 34) + '...' : book.judul}
            </h1>
            <p className='textTest'>
              {book.konten.length > 120 ? book.konten.slice(0, 120) + '...' : book.konten}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
