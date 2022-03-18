import React from 'react';

import './Home.css';

import Banner from '../../components/Banner/Banner';
import Headline from '../../components/Headline/Headline';
import Team from '../../components/Team/Team';
import Footer from '../../components/Footer/Footer';

function Home () {
  return (
    <div className="home">
      <Banner />
      <Headline />
      <Team />
      <Footer />
    </div>
  );
}

export default Home;
