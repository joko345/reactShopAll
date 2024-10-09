import { Helmet } from 'react-helmet';
import { useEffect, useState } from "react";
import ReactiveButton from 'reactive-button';
import './Content.css';
import './bootstrap.min.css'; 
import book1 from '../bg/book1.jpg'; 

export default function DetailBook() { 
    const [reactButton, setButton] = useState('idle'); // Set initial button state to 'idle'
    const [books, setBooks] = useState([]); 
    const [data, setData] = useState([]);
    const [firstName, setFirstName] = useState('');
    
    const [currentBook, setCurrentBook] = useState({
        judul: "",
        konten: "",
        detail: "",
        harga: 0,
    });

    useEffect(() => {
        const fetchBooks = () => {
            const bookData = require('../../db.json'); // fetch data buku
            setBooks(bookData.kontenBook); 
            const foundBook = bookData.kontenBook.find(b => b.id === "1"); // Change "1" with the appropriate ID
            setCurrentBook(foundBook);

            const storedFirstName = localStorage.getItem('firstName');
            if (storedFirstName) {
                setFirstName(storedFirstName);
            }
        };
  
        fetchBooks();
    }, []);
      
    const addToCart = (event) => {
        event.preventDefault();
        // Add the current book to the cart data
        setData(prevData => [...prevData, currentBook]);
    };

    const onClickHandler = () => {
        setButton('loading'); // Set button state to loading
        setTimeout(() => {
            setButton('success'); // Change button state to success after 2 seconds
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
                                    <img src={book1} alt="News" />
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
