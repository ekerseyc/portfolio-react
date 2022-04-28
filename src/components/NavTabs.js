import React from 'react';
import './styles/bootstrap.min.css';
import ProfilePic from '../components/images/emily.png'

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <>
      <header className='text-center'>
        <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
          <div className='container-fluid'>
              <img src={ProfilePic} style={{width: 150, height: 150, borderRadius: 150/ 2}} alt='' />
              <h1 style={{paddingLeft: 30, color: 'white'}}>Emily Kersey</h1>
            <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarColor01' aria-controls='navbarColor01' aria-expanded='false' aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon'></span>
            </button>

            <div className='collapse navbar-collapse'>
              <ul className='navbar-nav me-auto' style={{position: 'absolute', right: 0, paddingRight:10}}>
                <li className='nav-item'>
                  <a
                    href='#home'
                    onClick={() => handlePageChange('Home')}

                    className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                  >
                    Home
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    href='#about'
                    onClick={() => handlePageChange('About')}
                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                  >
                    About
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    href='#portfolio'
                    onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                  >
                    Portfolio
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    href='#contact'
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavTabs;
