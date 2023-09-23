import React from 'react'
import Hobies1 from '../../Assets/Hobies1.jpeg'
import Hobies2 from '../../Assets/Hobies2.jpeg'
import Hobies3 from '../../Assets/Hobies3..jpeg'
import { Container, Row, Col } from 'react-bootstrap'
import './Hobies.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
 
const Hobies = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div className='bg'>
      <Container>
        <Row className='col' data-aos="fade-right" data-aos-duration="1000">
          <Col className='mt-4'>
            <img src={Hobies1} alt='MobileLegends' className='hobies1'></img>
            <p className='text-one'>Mobile Legends</p>
          </Col>
          <Col className='mt-4' data-aos="fade-right" data-aos-duration="1500">
            <img src={Hobies2} alt='Pubg Mobile' className='hobies2'></img>
            <p className='text-two'>Pubg Mobile</p>
          </Col>
          <Col className='mt-4' data-aos="fade-right" data-aos-duration="2000"> 
            <img src={Hobies3} alt='Codm Mobile' className='hobies2'></img>
            <p className='text-three'>Codm Mobile</p>
          </Col>
        </Row>
      </Container>
      <h1 data-aos="fade-up">Hello</h1>
    </div>
  )
}

export default Hobies