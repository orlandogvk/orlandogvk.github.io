import React from 'react';
import Image from 'react-bootstrap/Image';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedin, faWhatsapp, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Container,Row,Col} from 'react-bootstrap';
import fotoyo  from './fotomia.jpeg';
import ControlledCarousel from '../carrousel/carrousel-component.jsx';
import './header-style.css';


function Cabecera(){
    return(
    <Container>
        <Row>
                <Col xs={12} md={3} className="fondo">
                <Image src={fotoyo} thumbnail  roundedCircle className="foto" />
                <div className="personalinfo">
                <div className="personalinfo">
                    <div><FontAwesomeIcon icon={faEnvelope} /><span> orlandog79@gmail.com </span></div> 
                    <div><FontAwesomeIcon icon={faWhatsapp} /><span> +573136330597 </span></div>
                </div>
                    <p>Contactame por:</p>

                    <div className="socialnet">
                    <a href="https://twitter.com/orlandog79" target="_blank"> <FontAwesomeIcon size="lg" color="black" icon={faTwitter}/><span> </span> </a>
                    <a href="https://www.facebook.com/orlando.gavik" target="_blank"> <FontAwesomeIcon size="lg" color="black" icon={faFacebookF}/><span> </span> </a>
                    <a href="https://www.linkedin.com/in/orlando-rodríguez-prada-842a9a37" target="_blank"> <FontAwesomeIcon size="lg" color="black" icon={faLinkedin}/><span> </span> </a>
                    <a href="https://github.com/orlandogvk" target="_blank"> <FontAwesomeIcon size="lg" color="black" icon={faGithub}/><span> </span> </a>
                    </div>
                </div>
                </Col>
                <Col xs={12} md={9}>
                <ControlledCarousel />
                </Col>    
        </Row>
    </Container>
    );
}

export default Cabecera;