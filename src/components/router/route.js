// src/components/router/AppRouter.js
import { Routes, Route } from "react-router-dom";
import Home from '../Content/home'; // Pastikan path ini benar
import YourCart from '../Content/cart'; // Pastikan path ini benar
import Register from '../../loginRegister/daftar'; // Pastikan path ini benar
import Login from '../../loginRegister/login'; // Pastikan path ini benar
import NotFound from '../../404'; // Pastikan path ini benar
import Listbook from '../Content/bookList'
import BookDetail from '../Content/detailBook'

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<YourCart />} />
      <Route path="/daftar" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/book" element={<Listbook />} />
      <Route path="/bookrinci" element={<BookDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
