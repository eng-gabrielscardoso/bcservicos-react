import React from 'react';

import './About.css';

import Banner from '../../components/Banner/Banner';
import AboutUs from '../../components/AboutUs/AboutUs';
import Footer from '../../components/Footer/Footer';

function About () {
  return (
    <div className='about'>
      <Banner mainTitle="Somos mais que uma empresa, somos uma filosofia" subTitle="A BC Serviços acredita não somente na relação de empresa, mas na relação de facilitadores para seus clientes. Empenhada sempre em aliviar as necessidades e fornecer novas soluções aos seus empregadores." />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default About;
