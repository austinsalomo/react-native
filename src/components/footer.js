import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faYoutube, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCode } from "@fortawesome/free-solid-svg-icons";

function footer() {
  return (
    <div className="container-footer">
      <section className="footer-paragraph">
        <p className="footer-paragraph-heading">
        Code Reengineering
        </p>
        <p className="footer-paragraph-text">
          Tugas Code Reenginering yang dibuat oleh Austin Ordell Salomo 2301921931
          <br/>
          Untuk mata kuliah Code Reengineering
          <br/>
          dengan dosen pengajar D6665 - Rezki Yunanda, S.Kom., M.Kom.
        </p>
        
      </section>
      <div className="footer-links">
      <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/'>How it works</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
        </div>
        <section class='social-media'>
          <div class='social-media-wrap'>
              <div class='footer-logo'>
                <Link to='/' className='social-logo'>
                  Smell Code <FontAwesomeIcon icon={faCode} />
                  </Link>
                  <small class='website-rights'>SmellCode © 2024</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <FontAwesomeIcon icon={faYoutube} />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
            <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
            <FontAwesomeIcon icon={faLinkedin} />
            </Link>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}

export default footer;
