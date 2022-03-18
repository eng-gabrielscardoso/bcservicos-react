import React from 'react';

import './Banner.css';

import Navbar from '../Navbar/Navbar';

function Banner () {
  return (
    <div className="banner">
      <header>
        <Navbar />
        <div className="head">
          <div className="columns is-mobile is-centered m-4">
            <div className="column is-5-desktop is-12-mobile has-text-light">
              <h2 className="is-size-2">Sistemas próprios para empresas autênticas</h2>
              <p>
                Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
              </p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Banner;