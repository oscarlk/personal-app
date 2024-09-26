import React from 'react'
import LinkedinIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import "../styles/Home.css";

function Home() {
  return (
    <div className = "Home">
      <div className = "about">
        <h2>Hi, My name is Oscar.</h2>
        <div className='prompt'>
          <p>A software developer driven by the potential of technology to redefine human experiences.</p>
          <a href="https://www.linkedin.com/in/oscar-khowong" target="_blank" rel="noopener noreferrer">
                <LinkedinIcon></LinkedinIcon>
          </a>
          <a href="mailto:ok.khowong@gmail.com">
                <EmailIcon></EmailIcon>
          </a>
        </div>
      </div>
      <div className='skills'>
        <h1>Skills + Interests</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Skills</h2>
            <span>
              Python, HTML/CSS, Javascript, C++, Swift, Java, Node.js
              React.js, Docker, Flutter, Figma, Git, Jira
            </span>
          </li>
          <li className='item'>
            <h2>Interests</h2>
            <span>
              Pickleball, Swimming, Basketball, Fantasy Football, Legos
            </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home