import './App.css';
import Headerindo from './components/headerFooter/header';
import Content from './components/Content/contentWeb';
import Footer from './components/headerFooter/footer';
import NotFound from './404'; 
import Home from './components/Content/home';
import Contact from './components/Content/contact';
import AboutUs from './components/Content/aboutUs';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";

function App() {
  useEffect(() => {}, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} /> {/* Ganti indexpath dengan index */}
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} /> 
        {/* <Route path="*" element={<PageNotFound />} />  */}
      </Route>
    </Routes>
  );
}

function Layout() {//layout konten
  return (
    <>
      <header>
        <Link to="/">Home</Link><br />
        <Link to="/about-us">About Us</Link><br />
        <Link to="/contact">Contact</Link><br />
      </header>
      <Outlet /> 
{/* outlet memungkinan child dirender diluar fungsi utama dan menampilkan konten yang ditunjuk route*/}
    </>
  );
}
//fungsi untuk halaman route

// function PageNotFound() {
//   return (
//     <section>
//       <h1>Page not found</h1>
//     </section>
//   );
// }

export default App;
