import React from 'react';
import { Link } from 'react-router-dom';

import './Headline.css';

import device from '../../static/images/device.png';

function Headline () {
  return (
    <section className="headline">
      <div className="columns my-0">
        <div className="column is-half is-offset-one-quarter">
          <div className="is-flex is-justify-content-space-between is-align-items-center">
            <div className="headline-main has-text-light">
              <h2 className="is-capitalized is-size-4">Desenvolvemos sistemas únicos</h2>
              <p className="my-2">
                Somos especialistas no desenvolvimento de
                <ul className="specialities">
                  <li>Sites</li>
                  <li>Lojas virtuais</li>
                  <li>ERP's</li>
                </ul>
              </p>
              <Link to="/contato">
                <button className="button mb-2 contact-me">Entre em contato</button>
              </Link>
            </div>
            <div className="headline-image is-hidden-touch">
              <img className="device" src={ device } alt="Device responsiviness" title="Implementando sistemas Responsivos" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Headline;
