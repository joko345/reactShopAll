import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
import axios from 'axios';

import book1 from '../bg/book1.jpg'; 
import book2 from '../bg/book2.jpg'; 
import book3 from '../bg/book3.jpg'; 
import book4 from '../bg/book4.jpg'; 
import book5 from '../bg/book5.jpg'; 
import book6 from '../bg/book6.jpg'; 
import book7 from '../bg/book7.jpg'; 
import book8 from '../bg/book8.jpg';

export default function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const [bookData, setBookData] = useState([]);

    const getBookImage = (id) => {
        switch (id) {
            case '1': return book1;
            case '2': return book2;
            case '3': return book3;
            case '4': return book4;
            case '5': return book5;
            case '6': return book6;
            case '7': return book7;
            case '8': return book8;
            default: return null;
        }
    };

    useEffect(() => {
        const fetchCartItems = () => {
            const cartData = JSON.parse(localStorage.getItem('cart')) || [];
            setCartItems(cartData);
        };

        const fetchBooks = async () => {
            try {
                const response = await axios.get('http://localhost:2002/cartKonten');
                setBookData(response.data); // Assuming your response contains the book data directly
            } catch (error) {
                console.error("Error fetching books:", error);
            }
        };

        fetchCartItems();
        fetchBooks();
    }, []);

    const updateCart = async (itemId, newCount) => {
        const updatedCart = cartItems.map(item => {
            if (item.id === itemId) {
                return { ...item, countCart: newCount };
            }
            return item;
        });

        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));

        // Find the current book details
        const currentBook = bookData.find(b => b.id === itemId);
        if (currentBook) {
            try {
                // Send the updated count along with other necessary fields if required
                await axios.put(`http://localhost:2002/cartKonten/${itemId}`, {
                    ...currentBook,
                    countCart: newCount // Update countCart here
                });
            } catch (error) {
                console.error("Error updating cart on server:", error);
            }
        }
    };

    return (
        <>
            <Helmet>
                <title>Cart</title>
            </Helmet>
            <h1>Cart</h1>
            <section className="h-100 h-custom" style={{ backgroundColor: '#d2c9ff' }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12">
                            <div className="card card-registration card-registration-2" style={{ borderRadius: '15px' }}>
                                <div className="card-body p-0">
                                    <div className="row g-0">
                                        <div className="col-lg-8">
                                            <div className="p-5">
                                                <div className="d-flex justify-content-between align-items-center mb-5">
                                                    <h1 className="fw-bold mb-0">Shopping Cart</h1>
                                                    <h6 className="mb-0 text-muted">{cartItems.reduce((acc, item) => acc + item.countCart, 0)} items</h6>
                                                </div>
                                                <hr className="my-4" />
                                                {cartItems.map((item) => {
                                                    const currentBook = bookData.find(b => b.id === item.id);
                                                    return (
                                                        <div className="row mb-4 d-flex justify-content-between align-items-center" key={item.id}>
                                                            <div className="col-md-2 col-lg-2 col-xl-2">
                                                                <img src={getBookImage(item.id)} alt="Book Cover" />
                                                            </div>
                                                            <div className="col-md-3 col-lg-3 col-xl-3">
                                                                <h6 className="text-muted">{currentBook ? currentBook.judul : 'Book Not Found'}</h6>
                                                                <h6 className="mb-0">Quantity: {item.countCart}</h6>
                                                                <button onClick={() => updateCart(item.id, item.countCart + 1)}>Increase</button>
                                                                <button onClick={() => updateCart(item.id, Math.max(item.countCart - 1, 1))}>Decrease</button>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                                <hr className="my-4" />
                                                <div className="pt-5">
                                                    <h6 className="mb-0">
                                                        <a href="#!" className="text-body">
                                                            <i className="fas fa-long-arrow-alt-left me-2"></i>Back to shop
                                                        </a>
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 bg-body-tertiary">
                                            <div className="p-5">
                                                <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                                                <hr className="my-4" />
                                                <h5>Total Items: {cartItems.reduce((acc, item) => acc + item.countCart, 0)}</h5>
                                                <button type="button" className="btn btn-dark btn-block btn-lg">Checkout</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
