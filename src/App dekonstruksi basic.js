import './App.css';
import Headerindo from './components/headerFooter/header';
import Content from './components/Content/contentWeb';
import Footer from './components/headerFooter/footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App( { library } ) {
  const onSubmit = () => {
    console.log('submit form')
  };

  const data = {
    nama: 'Joko',
    alamat: 'Depok',
    sekolah: {
      name: "Smp3",
      alamat: "depok2"
    },
  };

  const arrayCoba = [
    'Jony',
    'Budy',
    'Geralt'
  ]
  console.log(arrayCoba[1])

  const [namaSatu, namaDua, ...sisa] = arrayCoba;//dekonstruktur array
  console.log("nama array satu ==", namaSatu)
  console.log("nama array dua ==", namaDua)
  console.log("nama array sisa ==", sisa)

  const { nama, alamat, sekolah : {name: namaSekolah, alamat: alamatSekolah }} = data //dikelompokkan 
  console.log("nama: " + nama, "alamat: " + alamat, namaSekolah, alamatSekolah)

  return (
    <div className="App">
      <h1>belajar { library }</h1>
      <Headerindo/>
      <Content/>
      <Footer/>
      <button className="btn btn-primary" onClick={() => {
        console.log('submit form')
      }}>Submit</button>
      
      <br/>
      
      <button className="btn btn-secondary" 
      onClick={onSubmit}
      >Submit dengan onSubmit
      </button>
    </div>
  );
}

export default App;
