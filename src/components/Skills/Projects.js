import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Project1 from '../../Assets/Projects-1.png'
import Project2 from '../../Assets/Projects-2.png'
import './Projects.css'

const Projects = () => {
  const ProjectOne = () => {
    window.location.href = process.env.REACT_APP_PROJECTS_1
  }

  const ProjectTwo = () => {
    window.location.href = process.env.REACT_APP_PROJECTS_2
  }
  return (
    <div>
      <div className='row'>
        <Card className='card' style={{ width: '20rem' }}>
          <Card.Img class="gambar" variant="top" src={Project1} />
          <Card.Body>
            <Card.Title className='title'>Project-1</Card.Title>
            <Card.Text className='text'>
              Ini Adalah website project pertama yang saya buat dan upload di online
            </Card.Text>
            <Button onClick={ProjectOne} variant="primary" className='btn'>Jika Ingin Lihat</Button>
          </Card.Body>
        </Card>
        <Card className='card2' style={{ width: '20rem' }}>
          <Card.Img class="gambar" variant="top" src={Project2} />
          <Card.Body>
            <Card.Title className='title'>Project-1</Card.Title>
            <Card.Text className='text'>
              Ini Adalah website project pertama yang saya buat dan upload di online
            </Card.Text>
            <Button onClick={ProjectTwo} variant="primary" className='btn'>Jika Ingin Lihat</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Projects;