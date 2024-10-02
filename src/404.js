// components/404.js
import React from 'react';
import Helmet from 'react-Helmet'

function NotFound() {
  return (
    <section>
        <Helmet>
            <title>
                404 Page Not Found
            </title>
        </Helmet>
      <h1>404 - Page Not Found</h1>
    </section>
  );
}

export default NotFound; // Pastikan Anda mengekspor NotFound
