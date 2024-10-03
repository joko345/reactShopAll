// components/404.js
import React from 'react';
import Helmet from 'react-helmet';
import './index.css';

function NotFound() {
  return (
    <section>
        <Helmet>
            <title>
                404 Page Not Found
            </title>
        </Helmet>
      <p className='page404'>404 - Page Not Found</p>
    </section>
  );
}

export default NotFound; // Pastikan Anda mengekspor NotFound
