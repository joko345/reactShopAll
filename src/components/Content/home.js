import { Helmet } from 'react-helmet';
import { useEffect, useState } from "react";
import './Content.css';
import book1 from '../bg/book1.jpg'; 
import book2 from '../bg/book2.jpg'; 
import book3 from '../bg/book3.jpg'; 

export default function Home() {
  const [books, setBooks] = useState([]); // Ubah menjadi array untuk menyimpan banyak buku

  useEffect(() => {
    // Ambil data kontenBook dari db.json
    const fetchBooks = () => {
      const bookData = require('../../db.json'); // Mengambil data dari db.json
      setBooks(bookData.kontenBook); // Simpan data ke state
    };

    fetchBooks();
  }, []);

  const getBookImage = (id) => {
    switch (id) {
      case "1":
        return book1;
      case "2":
        return book2; 
      case "3":
        return book3; 
      default:
        return null; 
    }
  };

  return (
    <section>
      <Helmet>
        <title>Home Page</title>
      </Helmet>

      <div className='w3-row-padding w3-center' id="food">
        {books.map((book) => ( // Looping untuk menampilkan setiap buku
          <div key={book.id} className='w3-quarter'>
            <img className='imgBook1' src={getBookImage(book.id)} alt={`Cover of ${book.judul}`} /> {/* Menampilkan gambar sesuai id */}
            <h1 className='flex'>
              {book.judul.length > 34  //jika kata lebih dari 34 potong dan ganti "..."
                ? book.judul.slice(0, 34) + '...'
                : book.judul}
            </h1>
            <p className='textTest'>
              {book.judul.length > 34  
                ? book.konten.length > 120  
                  ? book.konten.slice(0, 120) + '...' 
                  : book.konten 
                : book.konten.length > 184 
                  ? book.konten.slice(0, 184) + '...' 
                  : book.konten} 
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
