import React from 'react'
import './About.css'
import AboutMe from '../../Assets/About.jpeg'
import { FaWhatsappSquare } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { SiFacebook } from 'react-icons/si'
import { SiGmail } from 'react-icons/si'
import { AiFillGithub } from 'react-icons/ai'
import { GiGraduateCap } from 'react-icons/gi'
import { GiCharacter } from 'react-icons/gi'

const About = () => {
  return (
    <div>
      <div className='header'>
        <center>
          <h1>ABOUT <span className='me'>ME</span></h1>
        </center>
        <div className='main-content'>
          <img src={AboutMe} alt='me'></img>
          <div className='whatsapp'>
            <h4><a href='https://api.whatsapp.com/send?phone=6281292479388'><span><FaWhatsappSquare /></span>0812-9247-9388</a></h4>
          </div>
          <div className='medsos'>
          <div className='instagram'>
            <h4><a href='https://instagram.com/bdrx19' target='_blank'><span><AiFillInstagram /></span>bdrx19</a></h4>
          </div>
          <div className='facebook'>
            <h4><a href=''><span><SiFacebook /></span>Aufa_7</a></h4>
          </div>
          <div className='gmail'>
            <h4><a href=''><span><SiGmail /></span>fikri</a></h4>
          </div>
          <div className='github'>
            <h4><a href=''><span><AiFillGithub /></span>Evst</a></h4>
          </div>
          </div>
        </div>
        <div className='school'>
          <h3><span><GiGraduateCap /></span>Pendidikan</h3>
          <ul>
            <li>SD: 2012-2018</li>
            <li>SMP: 2018-2021</li>
            <li>SMK: KELAS 11</li>
          </ul>
        </div>
        <div className='karakter'>
          <h3><span><GiCharacter /></span>Karakter</h3>
          <ul>
            <li>Baik</li>
            <li>Sopan</li>
            <li>Dermawan</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About