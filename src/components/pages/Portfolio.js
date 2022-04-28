import React from 'react';
import TagAlong from '../../components/images/tagalong.png';
import TBT from '../../components/images/tbt.png';
import WeatherWidget from '../../components/images/weather.png';
import Quiz from '../../components/images/quiz.png';
import Notetaker from '../../components/images/notetaker.png';


export default function Blog() {
  return (

    <div style={{ padding: 15 }}>
      <div className='container'>
        <h2>Portfolio</h2>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <div className="card overflow-hidden m-3">
              <div className="card-header text-white bg-primary">Tag Along - A Discord Calendar App</div>
              <div style={{ width: '100%', textAlign: 'center' }}>
                <img src={TagAlong} style={{ paddingTop: '5px' }} width="1000px" alt='Tag Along'></img>
              </div>
              <div className="card-body">
                <p className="card-text">Tech Used: Javascript, Bootstrap, Handlebars, Discord.js
                </p>
                <a href="https://limitless-cove-90207.herokuapp.com/login" target="_blank" rel='noreferrer' className='card-link'>Deployed App</a>&nbsp;
                <a href="https://github.com/kevinlam11/tag_along" target="_blank" rel='noreferrer' className='card-link'>Github Repo</a>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6'>
            <div className="card overflow-hidden m-3">
              <div className="card-header text-white bg-primary">Taste Bud Travels</div>
              <div style={{ width: '100%', textAlign: 'center' }}>
                <img src={TBT} style={{ paddingTop: '5px' }} width="1000px" alt='Taste Bud Travels'></img>
              </div>
              <div className="card-body">
                <p className="card-text">Tech Used: Javascript, Bootstrap, API
                </p>
                <a href="https://carring10.github.io/international-dishes/" target="_blank" rel='noreferrer' className='card-link'>Deployed App</a>&nbsp;
                <a href="https://github.com/carring10/international-dishes/" target="_blank" rel='noreferrer' className='card-link'>Github Repo</a>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6'>
            <div className="card overflow-hidden m-3">
              <div className="card-header text-white bg-primary">Weather Widget</div>
              <div style={{ width: '100%', textAlign: 'center' }}>
                <img src={WeatherWidget} style={{ paddingTop: '5px' }} width="1000px" alt='Weather Widget'></img>
              </div>
              <div className="card-body">
                <p className="card-text">Tech Used: Javascript, Bootstrap, API
                </p>
                <a href="https://ekerseyc.github.io/weather" target="_blank" rel='noreferrer' className='card-link'>Deployed App</a>&nbsp;
                <a href="https://github.com/ekerseyc/weather/" target="_blank" rel='noreferrer' className='card-link'>Github Repo</a>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6'>
            <div className="card overflow-hidden m-3">
              <div className="card-header text-white bg-primary">Javascript Quiz</div>
              <div style={{ width: '100%', textAlign: 'center' }}>
                <img src={Quiz} style={{ paddingTop: '5px' }} width="1000px" alt='JavaScript Quiz'></img>
              </div>
              <div className="card-body">
                <p className="card-text">Tech Used: Javascript, Bootstrap
                </p>
                <a href="https://ekerseyc.github.io/code-quiz/" target="_blank" rel='noreferrer' className='card-link'>Deployed App</a>&nbsp;
                <a href="https://github.com/ekerseyc/code-quiz/" target="_blank" rel='noreferrer' className='card-link'>Github Repo</a>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6'>
            <div className="card overflow-hidden m-3">
              <div className="card-header text-white bg-primary">Notetaker App</div>
              <div style={{ width: '100%', textAlign: 'center' }}>
                <img src={Notetaker} style={{ paddingTop: '5px' }} width="1000px" alt='JavaScript Quiz'></img>
              </div>
              <div className="card-body">
                <p className="card-text">Tech Used: Javascript, Bootstrap
                </p>
                <a href="https://ekerseyc.github.io/code-quiz/" target="_blank" rel='noreferrer' className='card-link'>Deployed App</a>&nbsp;
                <a href="https://github.com/ekerseyc/code-quiz/" target="_blank" rel='noreferrer' className='card-link'>Github Repo</a>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6'>
            <div className="card overflow-hidden m-3">
              <div className="card-header text-white bg-primary">Universalis E-Commerce Backend</div>
              <div className="card-body">
                <p className="card-text">Tech Used: SQL, Sequelize, Express, Insomnia
                </p>
                <a href="https://github.com/ekerseyc/universalis" target="_blank" rel='noreferrer' className='card-link'>Github Repo</a>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6'>
            <div className="card overflow-hidden m-3">
                <div className="card-header text-white bg-primary">Social API 5000</div>
                <div className="card-body">
                  <p className="card-text">Tech Used: mongoose, node.JS, Express, Insomnia
                  </p>
                  <a href="https://github.com/ekerseyc/social-api-5000" target="_blank" rel='noreferrer' className='card-link'>Github Repo</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
