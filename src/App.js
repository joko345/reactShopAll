import './App.css';
import Headerindo from './components/headerFooter/header';
import Content from './components/Content/contentWeb';
import Footer from './components/headerFooter/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";

  function App() {
  useEffect(() => {}, []);

    
  const [data, setData] = useState([]);

  const onSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const input = form.nama;
    
    console.log('listnya =',input.value);

    const shoppingData = [data, input.value].flat();
    setData(shoppingData);

    console.log('shopping data =',shoppingData)
    console.log('data =', data);

    form.reset();
  };

  const onDelete = (value) => {
    console.log('value', value);

    const dataBaru = data.filter((val) => val !== value); 
    //val=data yang dipilih, selain val data lain tidak dihapus
    setData(dataBaru);
  }

  return (
    <main >
    <h1 className='d-flex justify-content-center'>Let's Find <span className='yellowText'> the Best Food </span> for you</h1>
    <form className="formBody" onSubmit={onSubmit}>
    <br/>
    <input name='nama' id='nama' required={true} type='text'/>
    <button>submit</button>
    </form>
    <br/>
    <ul className='my-shopping-list '>
      {data.length <= 0 && 
      <div className='d-flex justify-content-center'>Shopping list kamu kosong</div>}
      {/* for loop list berdasarkan data yan g di input dan membuat index array otomatis */}
            {data.map((value, index) => (
            <li key={index}>
              <span>{value}</span>
              <button onClick={() => onDelete(value)}>hapus</button>
              </li>
          ))}
    </ul>
          <div className='nav'>
            <div className='nav-Content'>
              <div>{data.length} items </div>
              <button onClick={()=> setData([])}>hapus semua</button>
            </div>
            </div>
    </main>
  );
}
<style>
</style>
export default App;
