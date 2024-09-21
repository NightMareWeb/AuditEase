import React, { useState, useEffect } from 'react';
import './App.css'; // Ensure you have the right CSS

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to handle smooth scroll to login section
  const scrollToLogin = () => {
    const loginSection = document.getElementById('login-section');
    if (loginSection) {
      loginSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error('Login section not found');
    }
  };

  return (
    <div>
      <div className={`navbar ${isScrolled ? 'shrink' : ''}`}>
        <img src="auditEase.png" alt="Logo" className="logo" />
        <button className="login-btn" onClick={scrollToLogin}>
          <h1>Login</h1>
        </button>
      </div>

      <div className='rect'>
        <div className='name'>
          <h1>AuditEase</h1>
        </div>
        <div className='tagline'>
          <h2>WHERE EVENT MANAGEMENT MEETS INNOVATION</h2>
        </div>

        {/* Background images inside the rect */}
        <div className='background-images'>
          <div className="tilting-image image1">
            <img src="design.png" alt="Background 1" />
          </div>
          <div className="tilting-image image2">
            <img src="design.png" alt="Background 2" />
          </div>
          <div className="tilting-image image3">
            <img src="design.png" alt="Background 2" />
          </div>
        </div>

        <div className='start'>
          <button className="getstarted">
            <h1>Get Started</h1>
          </button>
        </div>
      </div>

      <div className="scrolling-text">
        <div className="text-content">
          <span>Gravitas'24 | Gravitas'24 | Gravitas'24 | Gravitas'24 | </span>
        </div>
      </div>

      <div className='lead'>
        <h1>Leaderboard</h1>
        <img src="lead.jpg" alt="leader" className="logo" />
      </div>

      <div className='bo' id="login-section">
        <div className='login'>
          <div className='l'>Login With a Role</div>
          <div><button className='chead'>Login as Club Head</button></div>
          <div><button className='coord'>Login as Club Coordinator</button></div>
          <div><button className='cadmi'>Login as Admin</button></div>
        </div>
      </div>

      <footer className='footer'>
        <div className='contact-us'>
          <h2>Contact Us</h2>
          <p>Email: <a href="mailto:contact@auditease.com">contact@auditease.com</a></p>
          <p>Phone: +1-234-567-890</p>
          <div className='social-icons'>
            <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
              <img src="instagram.png" alt="Instagram" className="social-icon" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
