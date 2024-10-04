import { Helmet } from 'react-Helmet'
import orcImg from '../bg/orc2.png'
import cart1 from '../bg/cart1.png'
import './Content.css';

export default function Home() {
    return (
      <section>

        <Helmet>
            <title>
                home page
            </title>
        </Helmet>
 
      
        <div className="p-4 p-md-4 text-white rounded bg-dark borderHome" >
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
            </div>
        </section>
    );
  }
