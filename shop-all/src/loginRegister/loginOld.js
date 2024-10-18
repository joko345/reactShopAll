import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from '../Content/home'; // Pastikan path ini benar
import AboutUs from '../Content/aboutUs'; // Pastikan path ini benar
import Register from '../../loginRegister/daftar'; // Pastikan path ini benar
import Login from '../../loginRegister/login'; // Pastikan path ini benar
import NotFound from '../../404'; // Pastikan path ini benar
import AppRouter from '../router/route';
import { useEffect, useState } from "react";
export default function Header() {

  const[firstName, setFirstName] = useState('');
  const[Select, setSelect] = useState('Choose Option')

  useEffect(() => {
    // Ambil nilai firstName dari localStorage saat komponen dimuat
    const storedFirstName = localStorage.getItem('firstName');
    if (storedFirstName) {
      setFirstName(storedFirstName);
    }
  }, []);

    
  return (
    <>
      <header className="header">
        <div className="logo">
          <img
            src="https://images.pexels.com/users/avatars/116286/buenosia-carol-263.jpeg?auto=compress&fit=crop&h=130&w=130&dpr=1"
            alt="cats coming"
            className="img1"
          />
          <span>Welcome </span>
          {firstName ? firstName : 'Guest'}
          {/* <h1 className="homep">Home Page</h1> */}
        </div>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/daftar">Register</Link>
          <Link to="/login" className="loginNav">Login</Link>
        </nav>
      </header>
 
    </>
  );
}