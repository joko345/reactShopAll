
import './App.css';
import Headerindo from './components/headerFooter/header';
import Content from './components/Content/contentWeb';
import Footer from './components/headerFooter/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect, useRef } from "react";

function App() {
  const [profile, setProfile] = useState("null");

  const fetchData = async () => {//async await
    const data = await fetch('https://api.github.com/users/joko345')
    const userProfile = await data.json();

    setProfile(userProfile);
  }

  useEffect(() => { 
  //   fetch('https://api.github.com/users/joko345').then((response) => response.json()
  // ).then((data) => setProfile(data)); //promse chaining
  fetchData();
  }, []);

  if (!profile) return "loading data profile ...";

  return (
    <div className="App">
      <br/>
      <h2>belajar </h2>
      <hr/>
      <form className='form'>
        <div>
          <label htmlFor="nama">Nama Siswa : &nbsp;</label>
          <input 
          id="nama" /> 
          {/* menggunakan value useState */}
          <button>submit</button>
          <div>value {profile.created_at}</div>
          <div><img src={profile.avatar_url}/>
          </div>
    
        </div>
        <br/>
        <div>
        </div>
      </form>
    </div>
  );
}

export default App;
