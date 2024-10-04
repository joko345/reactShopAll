import './index.css';
import NotFound from './404'; 
import Home from './components/Content/home';
import AboutUs from './components/Content/aboutUs';
import Login from './loginRegister/login';
import Register from './loginRegister/daftar';
import AppRouter from './components/router/route';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
import { Routes, Route, Outlet } from "react-router-dom"; 
import Header from './components/headerFooter/header'; // Import Header

function App() {
  useEffect(() => {}, []);

  return (
    <>
      <Header />
      <AppRouter /> 
    </>
  );
}

export default App;
