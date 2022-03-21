import React from 'react';

import './Home.css';

import Banner from '../../components/Banner/Banner';
import Headline from '../../components/Headline/Headline';
import Team from '../../components/Team/Team';
import Footer from '../../components/Footer/Footer';

function Home () {
  return (
    <div className="home">
      <Banner mainTitle="Sistemas Próprios Para Empresas Autênticas" subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend commodo ipsum, vitae malesuada nisi convallis eget." />
      <Headline />
      <Team />
      <Footer />
    </div>
  );
}

export default Home;
