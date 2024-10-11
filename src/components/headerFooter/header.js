import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { CartContext } from '../../cartContext';
import axios from 'axios'; // pastikan axios terpasang
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
    const { cart } = useContext(CartContext);
    const [firstName, setFirstName] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();
    const [cartLength, setCartLength] = useState(0);

    // Fungsi untuk menangani penambahan item ke cart berdasarkan id
    const handleCart = async (id) => {
        try {
            const response = await axios.get('http://localhost:2002/cartKonten'); // ambil cart dari API
            const cartDb = response.data;

            const foundCart = cartDb.find(item => item.id === id); // cari item berdasarkan id

            if (foundCart) {
                const updatedCart = {
                    ...foundCart,
                    countCart: (parseInt(foundCart.countCart) || 0) + 1 // tambahkan jumlah item
                };

                // Update jumlah item di cart berdasarkan id
                await axios.put(`http://localhost:2002/cartKonten/${id}`, updatedCart);
            }
        } catch (error) {
            console.error('Error updating cart:', error);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('firstName'); // Remove firstName from localStorage
        setFirstName(''); // Clear firstName from state
        navigate('/'); // Redirect to the home page or login page
    };

    useEffect(() => {
        // Ambil nilai firstName dari localStorage saat komponen dimuat
        const storedFirstName = localStorage.getItem('firstName');
        if (storedFirstName) {
            setFirstName(storedFirstName);
        }

        // Update cart length based on local storage
        const cartData = JSON.parse(localStorage.getItem('cart')) || [];
        const totalCount = cartData.reduce((total, item) => total + item.countCart, 0);
        setCartLength(totalCount);
    }, []);
    
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <>
            <header className="header pala">
                <div className="logo">
                    <img
                        src="https://images.pexels.com/users/avatars/116286/buenosia-carol-263.jpeg?auto=compress&fit=crop&h=130&w=130&dpr=1"
                        alt="cats coming"
                        className="img1"
                    />
                    <span className="nav">Welcome </span>
                    <span className="nav">{firstName ? firstName : 'Guest'}</span>
                </div>
                <nav className="nav">
                    <Link to="/">Home</Link>
                    <Link to="/cart">
                        Cart <span className="badge badge-primary badge-pill">{cart.length}</span>
                    </Link>
                    <Link to="/daftar">Register</Link>

                    <div className="dropdown" style={{ display: 'inline-block' }}>
                        <button
                            className="btn btn-dark btn-sm dropdown-toggle"
                            onClick={toggleDropdown}
                            aria-expanded={showDropdown}
                        >
                            {firstName ? 'Account' : 'Login'}
                        </button>

                        {showDropdown && (
                            <ul className="dropdown-menu show" style={{ display: 'block' }}>
                                {firstName ? (
                                    <>
                                        <li className="dropdown-item btn btn-secondary btn-sm" onClick={() => navigate('/profile')}>Profile</li>
                                        <li className="dropdown-item btn btn-secondary btn-sm" onClick={() => navigate('/favorites')}>Favorites</li>
                                        <li className="dropdown-item btn btn-secondary btn-sm" onClick={handleLogout}>Logout</li>
                                    </>
                                ) : (
                                    <li className="dropdown-item" onClick={() => navigate('/login')}>Login</li>
                                )}
                            </ul>
                        )}
                    </div>
                </nav>
            </header>
        </>
    );
}
