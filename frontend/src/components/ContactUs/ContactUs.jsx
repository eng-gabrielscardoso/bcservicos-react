import React from 'react';

import './ContactUs.css';

import DesktopMap from '../Maps/DesktopMap';
import MobileMap from '../Maps/MobileMap';

function ContactUs () {
  return (
    <section className="contact-us p-4">
      <div className="wrapper-contact-us is-flex">
        <div className="contact-form has-text-light">
          <h2 className="is-size-4">Entre em contato</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni iste sunt earum optio vitae et sint ea maiores ratione, a eligendi quibusdam distinctio quis doloribus dolorem debitis! Atque, quae rerum.
          </p>
          <form className="mt-2" method="POST">
            <div class="field">
              <div class="control">
                <input class="input" type="text" placeholder="Nome completo *" aria-label="Informe o seu nome" required />
              </div>
            </div>
            <div class="field">
              <div class="control has-icons-left has-icons-right">
                <input class="input is-danger" type="email" placeholder="E-mail válido *" aria-label="Informe um e-mail válido" required />
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                  <i class="fa fa-exclamation-triangle"></i>
                </span>
              </div>
              <p class="help is-danger">E-mail inválido</p>
            </div>
            <div class="field">
              <div class="control">
                <textarea class="textarea" placeholder="Informe a sua mensagem *" aria-label="Informe a sua mensagem" required></textarea>
              </div>
            </div>
            <div class="field">
              <div class="control">
                <label class="checkbox has-text-light">
                  <input type="checkbox" />
                  Eu concordo com os termos de uso <a href="#" className="has-text-link">termos e condições</a>
                </label>
              </div>
            </div>
            <div class="field is-grouped">
              <div class="control">
                <button class="button is-link contact-us">Enviar</button>
              </div>
            </div>
          </form>
        </div>
        <div className="contact-map">
          <h2 className="is-size-4 has-text-light mb-4">Faça-nos uma visita</h2>
          <div className="wrapper-contact-map is-hidden-mobile">
            <DesktopMap />
          </div>
          <div className="wrapper-contact-map is-hidden-tablet">
            <MobileMap />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
