import React from 'react';

import './Team.css';

function Team () {
  return (
    <section className="mb-4">
      <div className="container mb-4 pb-4">
        <h2 className="is-size-4 has-text-centered my-4">Desenvolvido de pessoas para pessoas</h2>
        <p className="has-text-centered">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, incidunt praesentium fugiat placeat corporis adipisci. Obcaecati temporibus, autem libero facilis sapiente ex! Atque repellendus temporibus, tenetur ducimus quae iste laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima incidunt temporibus, iure ullam amet laborum reprehenderit explicabo natus ut porro dolorum odio quia id consectetur delectus. Iusto distinctio assumenda repudiandae.
        </p>
      </div>
      <div className="members columns is-mobile is-multiline is-centered">
        <div className="column is-narrow">
          <div class="card">
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="https://media-exp1.licdn.com/dms/image/C5603AQECQwv4g9LohQ/profile-displayphoto-shrink_800_800/0/1643858429793?e=1652918400&v=beta&t=xA5QjiTnnPjSdW95L_4Z4o_hNjCmHa7AynwdniGoPdo" alt="Placeholder image" />
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">Gabriel Santos Cardoso</p>
                  <p class="subtitle is-6">@eng-gabrielscardoso</p>
                </div>
              </div>

              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a href="#">#css</a> <a href="#">#responsive</a>
                <br />
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-narrow">
          <div class="card">
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="https://media-exp1.licdn.com/dms/image/C5603AQECQwv4g9LohQ/profile-displayphoto-shrink_800_800/0/1643858429793?e=1652918400&v=beta&t=xA5QjiTnnPjSdW95L_4Z4o_hNjCmHa7AynwdniGoPdo" alt="Placeholder image" />
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">Fabiana Pantoja Barreto</p>
                  <p class="subtitle is-6">@tst-fabianapbarreto</p>
                </div>
              </div>

              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a href="#">#css</a> <a href="#">#responsive</a>
                <br />
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
