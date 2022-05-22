import React from 'react';
import { FaPaperclip } from 'react-icons/fa';

export default function About() {
  return (
    <div style={{ padding: 15 }}>
      <div className='container'>
        <h2>About</h2>
        <p>
          I graduated from West Virginia University with a degree in International Studies. Using that degree, I taught English as a Foreign Language in South Korea for four years. Due to COVID-19, I moved back to the USA and started pursuing a passion I've had since middle school: web development. Web Development has changed a lot since I last actively coded in university, so I am enjoying learning all the new languages and techniques in a full stack web development bootcamp.
        </p>
        <p>
          My current hobbies are travelling, <a href="http://postcrossing.com/user/dpahfl" target="_blank" rel="noopener noreferrer">postcard collecting</a>, playing video games, and reading.
        </p>
        <p>
          I am currently playing Final Fantasy XIV Online, Noble Fates, Animal Crossing: New Horizons, and Rune Factory 5.
        </p>
        <p>
          I am currently reading <i>Code Girls: The Untold Story of the American Women Code Breakers of World War II</i> by Liza Mundy and a large assortment of webcomics.
        </p>
        <span className="fs-2 me-4">
        <a href='.../.../components/images/resume.pdf' style={{textDecoration: 'none'}}><FaPaperclip /> Resume.pdf</a>
            </span>
      </div>
    </div>
  );
}
 
