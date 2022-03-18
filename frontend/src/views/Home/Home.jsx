import React from 'react';

import './Home.css';

import Banner from '../../components/Banner/Banner';
import Headline from '../../components/Headline/Headline';
import Footer from '../../components/Footer/Footer';

function Home () {
  return (
    <div className="home">
      <Banner />
      <Headline />
      <Footer />
    </div>
  );
}

export default Home;
