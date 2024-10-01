import './App.css';
import Headerindo from './components/headerFooter/header';
import Content from './components/Content/contentWeb';
import Footer from './components/headerFooter/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
function App() {
  useEffect(() => {}, []);

  function Item({ name, isPacked }) {
    let itemName = name;
    if (isPacked) {
      itemName = `${name} ✅`;
    }
    return <li className='item'>{itemName}</li>;
  }

  return (
    <section>
      <Headerindo/>
      <Content/>
      <Footer/>  
    </section>
  );
}
<style>
  {/* // */}
</style>
export default App;
