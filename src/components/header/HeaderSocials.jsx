import React from 'react'
import {BsGithub,BsLinkedin} from 'react-icons/bs';
import {FaDev} from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className='header_socials' >
       <a href="https://linkedin.com" target="_blank"> <BsLinkedin/> </a>
       <a href="https://github.com" target="_blank"><BsGithub/></a>
       <a href="https://dev.to" target="_blank"><FaDev/></a>
    </div>
  )
}

export default HeaderSocials
