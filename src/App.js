import './index.css';
import NotFound from './404'; 
import Home from './components/Content/home';
import YourCart from './components/Content/cart';
import Login from './loginRegister/login';
import Register from './loginRegister/daftar';
import AppRouter from './components/router/route';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
import Header from './components/headerFooter/header';
import { CartProvider } from './cartContext';
import Footer from './components/headerFooter/footer';
import { useLocation } from 'react-router-dom'; // Import useLocation

function App() {
    useEffect(() => {}, []);
    
    const location = useLocation(); // Mendapatkan lokasi saat ini
    const isBookDetail = location.pathname === '/bookrinci'; // Periksa apakah saat ini di BookDetail

    return (
        <>
          <CartProvider>
            <Header />
            <AppRouter />
            </CartProvider>
            {/* {!isBookDetail && <Footer />}  */}
            {/* Tampilkan footer jika bukan di BookDetail */}
        </>
    );
}

export default App;
