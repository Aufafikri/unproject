import Carousel from 'react-bootstrap/Carousel';
import React from 'react'
import HomeBG from '../../Assets/HomeBG.jpg'
import Home1 from '../../Assets/home1.jpg'
import Home2 from '../../Assets/home2.jpg'
import Home3 from '../../Assets/home3.jpg'
import '../Home/Home.css'

const Home = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={HomeBG}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 className='sub'>Selamat Datang Di Website Saya</h1>
        </Carousel.Caption>
        <Carousel.Caption>
        <h4 className='judul'>Enjoy Dibawa Santuy 👌</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Home1}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Experience</h3>
          <p>Suka Menaiki Gunung Di Malam Hari</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Home2}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Full Stack Developer</h3>
          <p>Suka Bermain Di Frontend Dan Backend</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Home3}
          alt="Fourth slide"
        />

        <Carousel.Caption>
          <h3>Gamers</h3>
          <p>
            Suka Bermain Game Apa Saja
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home