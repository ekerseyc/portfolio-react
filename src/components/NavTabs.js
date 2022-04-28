import React, { useState } from 'react';
import classNames from 'classnames';
import ProfilePic from '../components/images/emily.png'

function NavTabs({ currentPage, handlePageChange }) {
  const [showNav, setShowNav] = useState(false);
  const navBarStyle = classNames({
    "collapse": true,
    "navbar-collapse": true,
    "show": showNav,
  });
  return (
    <>
      <header className='text-center'>
        <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
          <div className='container-fluid'>
              <img src={ProfilePic} style={{width: 150, height: 150, borderRadius: 150/ 2}} alt='' />
              <h1 style={{padding: 30, color: 'white'}}>Emily Kersey</h1>
            <button 
              className='navbar-toggler' 
              type='button' 
              data-bs-toggle='collapse'
              data-bs-target='#navbarColor01' 
              aria-controls='navbarColor01' 
              aria-expanded={showNav} 
              aria-label='Toggle navigation'
              onClick={() => setShowNav(prev => !prev)}
            >
              <span className='navbar-toggler-icon'></span>
            </button>

            <div className={navBarStyle}>
              <ul className='navbar-nav me-auto'>
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
