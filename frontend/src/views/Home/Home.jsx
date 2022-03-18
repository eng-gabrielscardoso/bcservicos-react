import React from 'react';

import './Home.css';

import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';

function Home () {
  return (
    <div className="home">
      <Banner />
      <Footer />
    </div>
  );
}

export default Home;
