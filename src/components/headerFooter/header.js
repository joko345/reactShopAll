  import { Link, useNavigate } from "react-router-dom";
  import { useEffect, useState } from "react";
  import 'bootstrap/dist/css/bootstrap.min.css'; // Pastikan Bootstrap terpasang

  export default function Header() {
    const [firstName, setFirstName] = useState('');
    const [showDropdown, setShowDropdown] = useState(false); // Untuk menampilkan dropdown
    const navigate = useNavigate(); // Menggunakan useNavigate untuk navigasi
    const [data, setData] = useState([]);

    useEffect(() => {
      // Ambil nilai firstName dari localStorage saat komponen dimuat
      const storedFirstName = localStorage.getItem('firstName');
      if (storedFirstName) {
        setFirstName(storedFirstName);
      }
    }, []);

    const handleSelect = (action) => {
      if (action === "profile") {
        if (firstName) {
          navigate('/profile'); // Jika sudah login, arahkan ke halaman Profile
        } else {
          navigate('/login'); // Jika belum login, arahkan ke halaman Login
        }
      } else if (action === "favorites") {
        navigate('/favorites'); // Arahkan ke halaman Favorites
      } else if (action === "logout") {
        // Proses logout
        localStorage.removeItem('firstName'); // Hapus informasi login
        setFirstName(''); // Reset state
        navigate('/login'); // Arahkan ke halaman Login setelah logout
      }
    };

    

    const toggleDropdown = () => {
      setShowDropdown(!showDropdown); // Toggle untuk menampilkan atau menyembunyikan dropdown
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
            <span className="nav">{firstName ? firstName : 'Guest'}
            </span>
          </div>
          <nav className="nav">
            <Link to="/">Home</Link>
      
            <Link to="/about-us">Cart <span class="badge badge-primary badge-pill">{data.length}</span></Link>     
            {/* <Link to="/about-us">About Us</Link> */}
            <Link to="/daftar">Register</Link>

            <div className="dropdown" style={{ display: 'inline-block' }}>
              <button
                className="btn btn-dark btn-sm dropdown-toggle "
                onClick={toggleDropdown}
                aria-expanded={showDropdown}
              >
                {firstName ? 'Account' : 'Login'}
              </button>

              {showDropdown && (
                <ul className="dropdown-menu show" style={{ display: 'block' }}>
                  {firstName ? (
                    <>
                      <li className="dropdown-item btn btn-secondary btn-sm" onClick={() => handleSelect('profile')}>Profile</li>
                      <li className="dropdown-item btn btn-secondary btn-sm" onClick={() => handleSelect('favorites')}>Favorites</li>
                      <li className="dropdown-item btn btn-secondary btn-sm" onClick={() => handleSelect('logout')}>Logout</li>
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
