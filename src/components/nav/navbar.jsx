import React from "react";
import "./navbar.css";
import { useState } from "react";
import { AiFillHome, AiOutlineUser, AiOutlineContacts,AiOutlineMessage,AiOutlineBook } from "react-icons/ai";
import {MdMiscellaneousServices} from 'react-icons/md';
const Navbar = () => {
  const [activeTab, setActiveTab] = useState('#');
  return (
    <nav>
      <a href="#" className={activeTab === '#' ? 'active' : '' } >
        <AiFillHome />
      </a>
      <a href="#about" className={activeTab === '#about' ? 'active' : '' } onClick={()=>{setActiveTab('#about')}} >
        <AiOutlineUser />
      </a>
      <a href="#experience" className={activeTab === '#experience' ? 'active' : '' } onClick={()=>{setActiveTab('#experience')}} >
        <AiOutlineBook />
      </a>
      <a href="#services" className={activeTab === '#services' ? 'active' : '' } onClick={()=>{setActiveTab('#services')}} >
        <MdMiscellaneousServices />
      </a>
      <a href="#contact" className={activeTab === '#contact' ? 'active' : '' } onClick={()=>{setActiveTab('#contact')}} >
        <AiOutlineContacts />
      </a>
    </nav>
  );
};

export default Navbar;
