import React from 'react';

import './Footer.css';

function Footer () {
  return (
    <footer>
      <div className="is-flex is-justify-content-space-between is-fullwidth has-background-dark p-4 my-auto">
        <span className="has-text-light my-auto">&copy;Todos os direitos reservados</span>
        <span>
          <a className="has-text-light is-size-4 mr-2" href="https://github.com/eng-gabrielscardoso" target="_blank">
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
          <a className="has-text-light is-size-4" href="https://linkedin.com/in/eng-gabrielscardoso" target="_blank">
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
