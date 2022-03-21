import React from 'react';
import { Link } from 'react-router-dom';

import './OurServices.css';

function OurServices () {
  return (
    <section className="our-services p-4">
      <h2 className="is-size-4 has-text-centered has-text-link mb-4">
        Conheça nossos serviços
        <br />
        <i className="fa fa-angle-down animate__animated animate__bounceIn animate__infinite"></i>
      </h2>
      <div className="wrapper-services columns is-centered is-multiline">
        <div className="column is-3 is-3-fullhd is-3-desktop is-6-tablet is-12-mobile">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">Consultoria empresarial</p>
                </div>
              </div>

              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
              </div>
            </div>
          </div>
        </div>
        <div className="column is-3 is-3-fullhd is-3-desktop is-6-tablet is-12-mobile">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">Design e identidade visual</p>
                </div>
              </div>

              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
              </div>
            </div>
          </div>
        </div>
        <div className="column is-3 is-3-fullhd is-3-desktop is-6-tablet is-12-mobile">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">Desenvolvimento web</p>
                </div>
              </div>

              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
              </div>
            </div>
          </div>
        </div>
        <div className="column is-3 is-3-fullhd is-3-desktop is-6-tablet is-12-mobile">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">Redação científica e criativa</p>
                </div>
              </div>

              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
              </div>
            </div>
          </div>
        </div>
        <div className="column is-3 is-3-fullhd is-3-desktop is-6-tablet is-12-mobile">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">Atendimento ao cliente e marketing digital</p>
                </div>
              </div>

              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
              </div>
            </div>
          </div>
        </div>
        <div className="column is-3 is-3-fullhd is-3-desktop is-6-tablet is-12-mobile">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">Outros serviços</p>
                </div>
              </div>

              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="is-size-5 has-text-centered has-text-link">
        Interessou-se por algum? Entre em contato agora mesmo.
        <br />
        <Link to="/contato">
          <button className="contact-me button has-text-light my-2">Agendar contato</button>
        </Link>
      </p>
    </section>
  );
}

export default OurServices;