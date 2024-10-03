import './index.css';
import Headerindo from './components/headerFooter/header';
import Content from './components/Content/contentWeb';
import Footer from './components/headerFooter/footer';
import NotFound from './404'; 
import Home from './components/Content/home';
import AboutUs from './components/Content/aboutUs';
import Login from './loginRegister/login';
import Register from './loginRegister/daftar';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom"; // Import Router

function App() {
  useEffect(() => {}, []);

  return (
    <Router> {/* Gunakan Router di sini */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/daftar" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

function Layout() {
  return (
    <>
      <header>
        <Link to="/">Home</Link><br />
        <Link to="/about-us">About Us</Link><br />
        <Link to="/daftar">Register</Link><br />
        <Link to="/login">Login</Link><br />
      </header>
      <Outlet /> 
    </>
  );
}

export default App;
