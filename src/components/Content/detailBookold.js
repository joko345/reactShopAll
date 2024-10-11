import { Helmet } from 'react-Helmet';
import { useEffect, useState } from "react";
import ReactiveButton from 'reactive-button';
import { useContext } from 'react';
import { CartContext } from '../../cartContext';
import './Content.css';
import './bootstrap.min.css';

import book1 from '../bg/book1.jpg'; 
import book2 from '../bg/book2.jpg'; 
import book3 from '../bg/book3.jpg'; 
import book4 from '../bg/book4.jpg'; 
import book5 from '../bg/book5.jpg'; 
import book6 from '../bg/book6.jpg'; 
import book7 from '../bg/book7.jpg'; 
import book8 from '../bg/book8.jpg';

export default function DetailBook() { 
    const { cart, setCart } = useContext(CartContext);
    const [reactButton, setButton] = useState('idle'); // Set initial button state to 'idle'
    const [books, setBooks] = useState([]); 
    const [data, setData] = useState([]);
    const [firstName, setFirstName] = useState('');
    
    const [currentBook, setCurrentBook] = useState({
        id: "",
        judul: "",
        konten: "",
        detail: "",
        harga: 0,
    });

    useEffect(() => {
        const fetchBooks = () => {
            
            const bookData = require('../../db.json'); // Ambil data buku dari db.json
            const storedBookId = localStorage.getItem('bookId'); // Ambil bookId dari localStorage
            const storedFirstName = localStorage.getItem('firstName');
            if (storedFirstName) {
                setFirstName(storedFirstName);
            }
            if (storedBookId) {
                // Cari buku yang sesuai dengan id yang disimpan di localStorage
                const foundBook = bookData.kontenBook.find(b => b.id === storedBookId);
                if (foundBook) {
                    setCurrentBook(foundBook); // Set currentBook dengan data buku yang ditemukan
                }
            }
        };

        fetchBooks();
    }, []);

    // Fungsi untuk memilih gambar berdasarkan idBook
    const getBookImage = (idBook) => {
        switch (idBook) {
            case "1":
                return book1;
            case "2":
                return book2;
            case "3":
                return book3;
            case "4":
                return book4;
            case "5":
                return book5;
            case "6":
                return book6;
            case "7":
                return book7;
            case "8":
                return book8;
            default:
                return book1; // Gambar default jika tidak ditemukan
        }
    };
    const addToCart = (event) => {
        event.preventDefault();
        // Add the current book to the cart data
        setData(prevData => [...prevData, currentBook]);
        setCart(prevCart => [...prevCart, currentBook]);
    };

    const onClickHandler = () => {
        setButton('loading'); // Set button state to loading
        setTimeout(() => {
            setButton('success'); // Ubah state button jadi success setelah loading selesai
        }, 1000);
    };

    const totalPrice = firstName ? (currentBook.harga * 0.8 * data.length).toFixed(2) : (currentBook.harga * data.length).toFixed(2);

    return (
        <>
            <Helmet>
                <title>Detail Book</title>
            </Helmet>

            <div className="news_section layout_padding">
                <div className="container"> 
                    <div className="row">
                        <div className="col-sm-12">
                            <h1 className="news_taital">{currentBook.judul}</h1>        
                            <p className="news_text">{currentBook.konten}</p>
                        </div>
                    </div>
                    <div className="news_section_2">
                        <div className="row">
                            <div className="col-md-6"> 
                                <div className="news_img">
                                    <img src={getBookImage(currentBook.id)} alt="Book Cover" /> {/* Gambar berdasarkan idBook */}
                                </div>
                                <div className='empty'></div>
                            </div>
                            <div className="col-md-6">
                                <h1 className="give_taital">About Author</h1> 
                                <ReactiveButton 
                                    color="yellow"
                                    className= 'reactButton' 
                                    buttonState={reactButton}
                                    idleText="Favorit"
                                    loadingText="Loading"
                                    successText="Done"
                                    onClick={onClickHandler}
                                />
                                <p className="ipsum_text">{currentBook.detail}</p>
                                <h5 className="raised_text">
                                    Price: ${currentBook.harga} <span className="goal_text">Member: ${(currentBook.harga * 0.8).toFixed(2)}</span> 
                                </h5>
                                <div className="donate_btn_main"> 
                                    <div className="readmore_btn"> 
                                        <a href="#">Buy Now</a>
                                    </div>
                                    <div className="readmore_btn_1">
                                        <a href="#" onClick={addToCart}>Add To Cart</a>
                                    </div><br/>
                                </div>
                               <p className='totalPrice'>Total Price: ${totalPrice} for {data.length} items</p>
                            </div>
                            <div className="empty"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
