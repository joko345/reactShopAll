import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from '../Content/home'; // Pastikan path ini benar
import AboutUs from '../Content/aboutUs'; // Pastikan path ini benar
import Register from '../../loginRegister/daftar'; // Pastikan path ini benar
import Login from '../../loginRegister/login'; // Pastikan path ini benar
import NotFound from '../../404'; // Pastikan path ini benar

export default function Header() {
  return (
    <>
      <header>
        <ul>
          <li>
            <img
              src="https://images.pexels.com/users/avatars/116286/buenosia-carol-263.jpeg?auto=compress&fit=crop&h=130&w=130&dpr=1"
              alt="cats coming"
            />
            <br />
            <br />
            <span>Pastry Bakery</span>
            <br />
            Good Pastry for a good day
          </li>
        </ul>
        <nav>
          <Link to="/">Home</Link><br />
          <Link to="/about-us">About Us</Link><br />
          <Link to="/daftar">Register</Link><br />
          <Link to="/login">Login</Link><br />
        </nav>
      </header>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/daftar" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
