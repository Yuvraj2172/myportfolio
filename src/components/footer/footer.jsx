import React from 'react'
import {AiOutlineFacebook,AiOutlineInstagram,AiOutlineTwitter} from 'react-icons/ai';
import './footer.css'
const footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo' >Yuvraj</a>
      <ul className='permalinks' >
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://twitter.com"> <AiOutlineTwitter/> </a>
        <a href="https://instagram.com"> <AiOutlineInstagram/> </a>
        <a href="https://facebook.com"><AiOutlineFacebook/></a>
      </div>
      <div className="footer_copyright">
        <small>
          &copy; YUVRAJ SONI
        </small>
      </div>
    </footer>
  )
}

export default footer
