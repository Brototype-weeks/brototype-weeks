import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faInstagram,faTwitter,faYoutube } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <div>
    <section className="footer">
      <div className='Icon-row'>
        <FontAwesomeIcon className='Icon' icon={faFacebook} size="1x" />
        <FontAwesomeIcon className='Icon' icon={faInstagram} size="1x" />
        <FontAwesomeIcon className='Icon' icon={faTwitter} size="1x" />
        <FontAwesomeIcon className='Icon' icon={faYoutube} size="1x" />
      </div>
      <div className="footer-row">
        <div className="footer-col">
         
          <ul className="links">
            <li><a href="#"><small>Audio Description</small></a></li>
            <li><a href="#"><small>Investor Relations</small></a></li>
            <li><a href="#"><small>Legal Notices</small></a></li>
          </ul>
         <button className='footer-button'>Service Code</button>
         <p className='number'>@1997-2024 Netflix, Inc</p>
        </div>

        <div className="footer-col">
       
          <ul className="links">
            <li><a href="#"><small>Help Center</small></a></li>
            <li><a href="#"><small>Jobs</small></a></li>
            <li><a href="#"><small>Cookie Preferences</small></a></li>
            
            
          </ul>
        </div>

        <div className="footer-col">
          
          <ul className="links">
            <li><a href="#"><small>Gift Cards</small></a></li>
            <li><a href="#"><small>Terms of Use</small></a></li>
            <li><a href="#"><small>Corporate Information</small></a></li>
          
          </ul>
        </div>
        <div className="footer-col">
          
          <ul className="links">
            <li><a href="#"><small>Media Centre</small></a></li>
            <li><a href="#"><small>Privacy</small></a></li>
            <li><a href="#"><small>Contact Us</small></a></li>
          
          </ul>
        </div>

        

        
        {/* <div className="footer-col">
         
          <p>
            Subscribe to our newsletter for a weekly dose
            of news, updates, helpful tips, and
            exclusive offers.
          </p>
          <form action="#">
           
            <button type="submit">SUBSCRIBE</button>
          </form>
          <div className="icons">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-github"></i>
          </div>
        </div> */}
      </div>
    </section>




      </div>
  )
}

export default Footer