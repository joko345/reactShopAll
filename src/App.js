import './index.css';
import NotFound from './404'; 
import Home from './components/Content/home';
import AboutUs from './components/Content/aboutUs';
import Login from './loginRegister/login';
import Register from './loginRegister/daftar';
import AppRouter from './components/router/route';
import bg from './components/bg/bg.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
import { Routes, Route, Outlet } from "react-router-dom"; 
import Header from './components/headerFooter/header'; // Import Header

function App() {
  useEffect(() => {}, []);

  return (
<>
      {/* <div style={{ 
        backgroundImage: `url(/bg.jpg)`, // Tidak perlu menggunakan jalur relatif di folder public
        backgroundSize: 'cover',         // Pastikan gambar memenuhi area
        backgroundAttachment: 'fixed',   // Agar gambar tetap saat di-scroll
        minHeight: '100vh',              // Pastikan gambar menutupi seluruh halaman
      }}> */}
        {/* Konten Anda */}
        <Header />
        <AppRouter />
      {/* </div> */}
    </>
  );
}

export default App;
