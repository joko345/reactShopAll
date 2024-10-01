
import './App.css';
import Headerindo from './components/headerFooter/header';
import Content from './components/Content/contentWeb';
import Footer from './components/headerFooter/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect, useRef } from "react";

function App() {
  const [profile, setProfile] = useState("null");

  useEffect(() => { 
  }, []);

function Item({ name, isPacked }) {
    // if (isPacked) {//jika true berikan centang
    //   return <li className="item">{name} ✅</li>;
    // }
    // return <li className="item"> {name} {isPacked && '✅'} </li>///jika true berikan centang  
  let itemName = name;
  if (isPacked) {
    itemName = `${name} ✅`;
  }

  return <li className='item'>{itemName}</li>;
}


  return (
    <section>
      <br/>
      <h1 className="d-flex justify-content-center"> Ride Biking</h1>
      <ul >
        <Item isPacked={true} name="Space suit"/>
        <Item isPacked={true} name="Helmet suit"/>
        <Item isPacked={false} name="Photo suit"/>
      </ul>
    </section>
  );
}

export default App;
