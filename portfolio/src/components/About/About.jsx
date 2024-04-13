import React from 'react'
import './About.css'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import { Link } from 'react-router-dom';
import XIcon from '@mui/icons-material/X';

const About = () => {
  return (
    <div className='about'>
      <img src="/my_image.png" alt="My Image" className="my_image" />
      <div className="profileDetails">
        <h2 className='myName'>GOVARDAN N A</h2>
        <p className='summary'>
          I'm a passionate Web Developer and Python Programmer. Completed a 3-month Data Analyst internship at VDart. Proficient in Python, HTML, CSS, JavaScript, and Java. Keen on cloud computing and machine learning, always learning for growth.
        </p>
        <div className="icons">
          <Link to={'https://api.whatsapp.com/send?phone=919003980804'} target='_blank'><WhatsAppIcon style={{ fill: '#05ffb0' }} /></Link>
          <Link to={'https://www.instagram.com/govardan.n.a'} target='_blank'><InstagramIcon style={{ fill: '#ff0051' }} /></Link>
          <Link to={'https://www.linkedin.com/in/govardanna'} target='_blank'><LinkedInIcon style={{ fill: '#0a66c2' }} /></Link>
          <Link to={'https://github.com/GOVARDAN-N-A'} target='_blank'><GitHubIcon style={{ fill: 'white' }} /></Link>
          <Link to={'mailto:e1215024govardancse@gmail'} target='_blank'><AttachEmailIcon style={{ fill: '#28add2' }} /></Link>
          <Link to={'https://twitter.com/GOVARDAN_N_A'} target='_blank'><XIcon style={{ fill: '#ffffff' }} /></Link>
        </div>
      </div>
    </div>
  )
}

export default About;
