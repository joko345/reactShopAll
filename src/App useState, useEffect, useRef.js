import './App.css';
import Headerindo from './components/headerFooter/header';
import Content from './components/Content/contentWeb';
import Footer from './components/headerFooter/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect, useRef } from "react"
 

function App( ) {

  const headingRef = useRef();
  const inputRef =  useRef();
  const [lokasi, setLokasi] = useState("Depok") //useState meng-set value awal
  const [lokasi2, setLokasi2] = useState("Bekasi") 

  useEffect(() => {//berjalan setiap value komponen berubah
    console.log("isi=", lokasi)
  }, [lokasi] )//[lokasi] mengulang pemanggilan lokasi
  

  useEffect(() => {
    console.log("isi kedua=", lokasi2, lokasi) //bisa menjalankan lebih dari 2
    console.log(headingRef.current)//melihat detail komponen dimana ref diletakkan
    headingRef.current.innerHTML = "belajar dengan "
    console.log("h2 height", headingRef.current.clientHeight)
    console.log("h2 name", headingRef.current.clientclassName)
  }, [])//memasukkan bracket kosong [] membuat hanya berjalan sekali
  
  const onSubmit = () => {
    setLokasi("Bandung")//mengubah lokasi
  };

    
  const onSubmit2 = () => {
    inputRef.current.focus();
    setLokasi2("Bekasi")//mengubah lokasi
  };

  return (
    <div className="App">
      <h1>belajar {lokasi}</h1>
      <Headerindo/>
      <Content/>
      <Footer/>
      <button className="btn btn-primary"    
      onClick={() => setLokasi("Bekasi")}
      >Submit</button>
      <button className="btn btn-secondary" 
      onClick={onSubmit}
      >Submit 2
      </button>
   
      <hr/>
      <h2 ref={headingRef}>belajar {lokasi2}</h2>
      <br/>
      <div class="input-group mb-3 justify-content-center">
      <input type="text" className="form-control-sm" ref={inputRef}/>
      <button className="btn btn-danger btn-sm" 
      onClick={onSubmit2}
      >Submit 3
      </button>
      </div>
    </div>
  );
}

export default App;
