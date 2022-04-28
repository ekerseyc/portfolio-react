import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const styles = {
  footer: {
    backgroundColor: "white",
  }
}

export default function Footer() {
  return (
    <>
      <footer className="text-center col-12" style={styles.footer}>
        <div className="row text-center text-secondary py-4">
          <div className='text-center'>
            <span className="fs-2 me-4">
              <a className="col-12 text-decoration-none text-primary" href="https://github.com/ekerseyc"><FaGithub /></a>
            </span>
            <span className="fs-2 me-4">
              <a className="col-12 text-decoration-none text-primary" href="https://linkedin.com/in/ekerseyc"><FaLinkedin /></a>
            </span>
            <span className="fs-2 me-4">
              <a className="col-12 text-decoration-none text-primary" href="https://twitter.com/eckcode"><FaTwitter /></a>
            </span>

          </div>

        </div>
      </footer>



    </>
  );

}