import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './skills-style.css';
import img1 from './analisys.jpg';
import img2 from './software.jpg';
import img3 from './database.jpg';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Skills(){
    return(
      <div  className="hard-skills">
          <div><h3>Habilidades</h3></div>
          <CardGroup>
          <Card bg="light">
            <Card.Img variant="top" src={img1} />
            <Card.Body>
              <Card.Title>Análisis y planeación</Card.Title>
              <Card.Text>
                Conocimientos básicos de análisis en levantamiento de requisitos bajo el estándar UML,
                utilizando diferentes herramientas de recolección de información.
                Conocimiento básico de SCRUM para la ejecución de proyectos de software, identificando los
                diferentes roles que allí se implementan. 
              </Card.Text>
            </Card.Body>
          
          </Card>
          <Card>
            <Card.Img variant="top" src={img2} />
            <Card.Body>
              <Card.Title>Lenguajes de programación</Card.Title>
              <Card.Text>
                Conocimientos fundamentales en C++, Python, Java y en el área de desarrollo web HTML5 con frameworks
                como Materialize y Bootstrap en el CSS. De igual forma conocimientos básicos de React JS y React-Router.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={img3} />
            <Card.Body>
              <Card.Title>Bases de datos y S.O</Card.Title>
              <Card.Text>
                Fundamentos de análisis de bases de datos (aplicando el modelo E-R) relacionales con conocimientos básicos de SQL bajo SGBD como mySQL y no
                relacionales como MongoDB. Y conocimientos básicos de Linux y sistemas de virtualización como VMWare y VirtualBox.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        <br></br>
        <div><Button variant="primary" as={Link} to="/">Ir a inicio</Button></div>
      </div>
    )
}
export default Skills;