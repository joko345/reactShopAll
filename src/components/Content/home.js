import { Helmet } from 'react-Helmet'
import img from '../bg/wood.webp'
import cart1 from '../bg/cart1.png'
import book11 from '../bg/book1.jpg'
import './Content.css';

export default function Home() {
    return (
      <section>

        <Helmet>
            <title>
                home page
            </title>
        </Helmet>
 
        <div className='w3-row-padding w3-padding-16 w3-center' id="food">
          <div className='w3-quarter'>
          <img src={book11} alt='img1'/>
          <h1 className='flex'>Elden Ring: Official Art Book Volume I</h1>
           <p className='textTest'>Volume I features key art from the game’s opening movie, concept and development 
            art of the large open-world and claustrophobic dungeons, and the game’s many characters and armors.
              This translated English art book contains the same content found in the Japanese edition.</p>
              </div>
              <div className='w3-quarter'>
          <img src={book11} alt='img1'/>
          <h1 className='flex'>Elden Ring: Official Art Book Volume I</h1>
           <p className='textTest'>Volume I features key art from the game’s opening movie, concept and development 
            art of the large open-world and claustrophobic dungeons, and the game’s many characters and armors.
              This translated English art book contains the same content found in the Japanese edition.</p>
              </div>
        </div>
        
        {/* <div className="p-4 p-md-4 text-white rounded bg-dark borderHome" >
              <h1 className="flex">
              Buy More
              </h1>
              <img src={cart1} className='imgOrc' alt='img1'/>
              <p className="lead my-3">
              Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities. For more complex implementations, custom CSS may be necessary.
              </p>
            </div>
            
            <div className="p-4 p-md-4 text-white rounded bg-success borderHome">
              <h1 className="flex">
              Updates
              </h1>
              <img src={cart1} className='imgOrc' alt='img1'/>
              <p className="lead my-3">
              Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities. For more complex implementations, custom CSS may be necessary.
              </p>
            </div>

           <div className="p-4 p-md-4 text-white rounded bg-secondary borderHome">
              <h1 className="flex">
              History
              </h1>
              <img src={cart1} className='imgOrc' alt='img1'/>
              <p className="lead my-3">
              Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities. For more complex implementations, custom CSS may be necessary.
              </p>
            </div> */}
        </section>
    );
  }
