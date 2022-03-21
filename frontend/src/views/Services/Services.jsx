import React from 'react';

import './Services.css';

import Banner from '../../components/Banner/Banner';
import OurServices from '../../components/OurServices/OurServices';
import Footer from '../../components/Footer/Footer';

function Services () {
  return (
    <div className="services">
      <Banner mainTitle="Serviços de qualidade pelo melhor custo-benefício" subTitle="Prestamos o melhor em atendimento ao cliente, redação criativa e científica, design, desenvolvimento web e também consultoria." />
      <OurServices />
      <Footer />
    </div>
  );
}

export default Services;
