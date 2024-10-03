import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Jangan lupa import stylesheet untuk toastify
import { Helmet } from 'react-Helmet'
import { useEffect, useState } from "react";
import '../index.css';
import usersData from '../db.json';

<Helmet>
<title>
    register
</title>
</Helmet>
function App() {
  const [user, setUser] = useState({
    nick: '',
    pass: ''
  });

  // autofill
  const handleInputChange = (e) => {
    const { id, value } = e.target; // event menarget id class
    setUser(prevUser => ({
      ...prevUser,
      [id]: value // Memperbarui nilai berdasarkan id input
    }));
  };

  const handleRegister = () => {
    // Mengambil data dari db.json
    const users = usersData.users; // Mengambil data pengguna dari db.json
    const foundUser = users.find(nama => nama.nick === user.nick);

    if (foundUser) {
      // Jika pengguna sudah ada
      toast.error('Username sudah terdaftar'); // Menampilkan notifikasi error
      console.error('Username sudah terdaftar');
    } else {
      // Jika pengguna baru, simpan ke database (db.json)
      const newUser = {
        nick: user.nick,
        pass: user.pass,
        firstName: user.nick // Atau Anda bisa meminta nama depan dari pengguna
      };

      // Simulasikan penyimpanan data baru (ini hanya untuk demo, Anda perlu mengganti ini dengan logika penyimpanan yang sesuai)
      usersData.users.push(newUser); // Menambahkan pengguna baru ke array users
      toast.success('Registrasi berhasil!'); // Menampilkan notifikasi sukses
      console.log('Registrasi berhasil!', newUser);
      // Reset form setelah registrasi
      setUser({ nick: '', pass: '' });
    }
  };

  return (
    
    <div className='position-absolute top-50 start-50 translate-middle '>
      <div className="w-full max-w-xs">
        <form className="rounded px-8 pt-6 pb-8 mb-4 mt-20">
          <div className="mb-4 text-center">

            <h1>daftar</h1>
            <label className="block text-gray-700 text-sm font-bold mx-2 mb-1" htmlFor="nick">
              Username
            </label>
            <input 
              className="shadow-sm appearance-none border rounded py-2 px-2 text-gray-700 leading-none w-full" 
              id="nick" 
              type="text" 
              placeholder="Username" 
              value={user.nick}
              onChange={handleInputChange} // Menangani perubahan input
              style={{ width: '100%' }}
            />
          </div>

          <div className="mb-4 text-center">
            <label className="block text-gray-700 text-sm font-bold mx-2 mb-1" htmlFor="pass">
              Password
            </label>
            <input 
              className="shadow-sm appearance-none border rounded py-2 px-2 text-gray-700 leading-none w-full" 
              id="pass" 
              type="password" 
              placeholder="******************" 
              value={user.pass}
              onChange={handleInputChange} // Menangani perubahan input
              style={{ width: '100%' }}
            />
            <br /><br />
            <a className="align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
              Forgot Password?
            </a>
          </div>

          <div className="flex justify-between text-center mb-6 mx-2">
            <button 
              className="mx-2 btn btn-primary" 
              type="button"
              onClick={handleRegister} // Menambahkan event onClick untuk registrasi
            >
              Sign Up
            </button>
            <button className="btn btn-primary" type="button" onClick={handleRegister}> {/* Anda bisa menambahkan fungsi untuk login */}
              Sign In
            </button>
          </div>
          
        </form>
        <div className="flex-grow" />
        <p className="text-center text-gray-500 text-xs mb-10 mt-auto">
          &copy;2020 Acme Corp. All rights reserved.
        </p>
      </div>
      <ToastContainer theme='dark' position="top-center" autoClose="1000"/> 
    </div>
  );
}

export default App;
