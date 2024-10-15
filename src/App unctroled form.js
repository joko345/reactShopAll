//uncontrol form, form tidak bisa dimodify
//uncontrol form, form tidak bisa dimodify
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";

function App() {
  
  useEffect(() => {
    // Logic to run on component mount or updates
  }, []);

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
      {/* <h1>belajar </h1> */}
      {/* <Headerindo/>
      <Content/>
      <Footer/> */}
      {/* <button className="btn btn-secondary" 
      onClick={onSubmit}
      >Submit 2
      </button> */}

      <br/>
      <h2>belajar </h2>
      <hr/>
      <form className='form' onSubmit={onSubmit}>
        <div>
          <label htmlFor="nama">Nama Siswa : &nbsp;</label>
          <input id="nama" name="nama" type="text"/> 
          {/* dengan id saat nama siswa ditekan cursor akan ke input */}
          <button>submit</button>
        </div>
        <br/>
        <div>
          <label htmlFor="warna">Warna favorit : &nbsp;</label>
          <input id="warna" name="warna" type="text"/> 
          {/* dengan id saat nama siswa ditekan cursor akan ke input */}
          <button>submit</button>
        </div>
        <br/>
        <div>
          <label htmlFor="palet">Color Palatte : &nbsp;</label>
          <input id="palet" name="palet" type="color"/> 
          {/* dengan id saat nama siswa ditekan cursor akan ke input */}
          <button>submit</button>
        </div>
        {/* <div className="input-group mb-3 justify-content-center">
          <input type="text" className="form-control-sm" />
          <button className="btn btn-danger btn-sm" onClick={onSubmit}>
            Submit 3
          </button>
        </div> */}
      </form>
    </div>
  );
}

export default App;
