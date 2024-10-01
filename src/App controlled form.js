
import './App.css';
import Headerindo from './components/headerFooter/header';
import Content from './components/Content/contentWeb';
import Footer from './components/headerFooter/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect, useRef } from "react";

function App() {
  const [nama, setNama] = useState("");

  useEffect(() => {
    console.log("nama = ", nama);
    if (nama.length < 3 ) {
      console.error("nama harus lebih dari 3 huruf")
    }
  }, [nama]);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log('onSubmit')

    const form = event.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    console.log(formJson);
  };

  return (
    <div className="App">
      <br/>
      <h2>belajar </h2>
      <hr/>
      <form className='form' onSubmit={onSubmit}>
        <div>
          <label htmlFor="nama">Nama Siswa : &nbsp;</label>
          <input 
          id="nama" 
          value={nama} 
          onChange={(e) => setNama(e.target.value)}/> 
          {/* menggunakan value useState */}
          <button>submit</button>
          <div>nama yang diinput adalah {nama}</div>
          {nama.length > 0 && nama.length < 3 && (
          <div className='alert alert-primary' role="alert">nama kurang dari 4 karakter</div>
        )}
        </div>
        <br/>
        <div>
        </div>
      </form>
    </div>
  );
}

export default App;
