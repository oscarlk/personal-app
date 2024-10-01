import React from 'react'
import LinkedinIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
        <div className = "socialMedia">
            <a href="https://www.linkedin.com/in/oscar-khowong" target="_blank" rel="noopener noreferrer">
                <LinkedinIcon></LinkedinIcon>
            </a>
        </div>
        <p>&copy; 2024 oscarlk.github.io/personal-app</p>
    </div>
  )
}

export default Footer