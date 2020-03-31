import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import './quiensoy-style.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Quiensoy(){
    return(
        <Container>
                <Row className="bodycont">
                    <Col xs={12} md={12}>
                        <Card className="text-center">
                                <Card.Body>
                                    <Card.Header>Acerca de mi</Card.Header>
                                    <Card.Title>¿Quién soy?</Card.Title>
                                    <Card.Text>
                                            <p>Soy Ingeniero en telecomunicaciones y esudiante de Academlo, con poca experiencia en desarrollo web, pero con un alto grado de curiosidad por el mundo del software.  
                                            Y de igual manera el conocimiento de las nuevas tendencias tecnológicas, de la ciencia en todas sus facetas y la geopolitica que es una de mis áreas favoritas. 
                                            De igual forma disfruto del arte, de la naturaleza y espacios tranquilos y apacibles donde me gusta estar para meditar y reflexionar y también
                                            compartir con amigos y familiares.</p>
                                          
                                            <p>También estoy en el ejercicio de mejoramiento del idioma inglés y de como aprender a redactar y escribir textos, los cuales pienso poner en práctica
                                            para el desarrollo del blog.</p>
                                           
                                    </Card.Text>
                                <Button variant="primary" as={Link} to="/">Ir a inicio</Button>
                                </Card.Body>
                               
                        </Card>
                    </Col>    
                </Row>
                <Row className="bodycont">
                    <Col xs={12} md={12}>
                        <Card className="text-center">
                                <Card.Body>
                                    <Card.Header>Proyectos en los que he trabajado</Card.Header>
                                    <Card.Title>Proyectos</Card.Title>
                                    <Card.Text>
                                    <p>Aquí se listan algunos: </p>
                                    <Card >
                                            <ListGroup variant="flush">
                                                <ListGroup.Item variant='secondary'>Desarrollo de un sistema de información básico en Java para una constructora usando una base de datos en mySQL.
                                                <a href="#"> Código aquí.</a></ListGroup.Item>
                                                <ListGroup.Item>Desarrollo de una plataforma web para prestar servicios generales (SEMPHOG) usando PHP y Materialize CSS, usando una base de datos en mySQL.
                                                <a href="#"> Código Proximamente.</a></ListGroup.Item>
                                                <ListGroup.Item variant='secondary'>Diseño de la interfaz de un sitio web usando HTML-CSS3 de una agencia de turismo.
                                                <a href="#"> Código aquí.</a></ListGroup.Item>
                                                <ListGroup.Item>Aplicación de un gestor de tareas realizado en React JS
                                                <a href="#"> Código aquí.</a></ListGroup.Item>
                                                <ListGroup.Item variant='secondary'>Aplicación de un gestor de tareas realizado en React JS-React Router.
                                                <a href="#"> Código aquí.</a></ListGroup.Item>
                                                <ListGroup.Item>Los demás han sido desarrollo de ejercicios netamente académicos participando en algunos concursos, usando los lenguajes de programación C, C++ y Python, junto con
                                                    herramientas de fundamentos de desarrollo como lo son LPP y Pseint.
                                                </ListGroup.Item>
                                            </ListGroup>
                                    </Card>
                                            <br></br>                              
                                           <p><strong>Nota:</strong> Si desea observar los códigos relaizados en estos últimos lenguajes podrá acceder a ellos por medio de mi cuenta en Github, la cual podrá acceder en la sección de Inicio.</p> 
                                    </Card.Text>
                                <Button variant="primary" as={Link} to="/">Ir a inicio</Button>
                                </Card.Body>
                               
                        </Card>
                    </Col>    
                </Row>
        </Container>
    )
}

export default Quiensoy;