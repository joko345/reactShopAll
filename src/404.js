// components/404.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Helmet from 'react-Helmet';
import './index.css';

function NotFound() {
  return (
    <section>
        <Helmet>
            <title>
                404 Page Not Found
            </title>
        </Helmet>
      <p className='position-absolute top-50 start-50 translate-middle fs-1'>404 - Page Not Found</p>
    </section>
  );
}

export default NotFound; // Pastikan Anda mengekspor NotFound
