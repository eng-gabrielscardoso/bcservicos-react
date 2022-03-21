import React from 'react';

import './Contact.css';

import Banner from '../../components/Banner/Banner';
import ContactUs from '../../components/ContactUs/ContactUs';
import Footer from '../../components/Footer/Footer';

function Contact () {
  return (
    <div className='contact'>
      <Banner mainTitle="Entre em contato hoje mesmo" subTitle="Contato 24/7 para fornecer o melhor em atendimento e qualidade de serviço para nossos clientes." />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Contact;
