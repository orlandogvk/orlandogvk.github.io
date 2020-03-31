import React from 'react';
import { Navbar,Nav,NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbar-component.css';
import miperfil from './perfiltarjeta.jpg';


function NavbarComponent(){
    return (
        <Navbar bg="light" expand="lg" className="barra">
            <Navbar.Brand  as={Link} to="/"><img src={miperfil} alt="Orlando Rodriguez"></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link as={Link} to="/quiensoy">¿Quién soy?</Nav.Link>
            <Nav.Link as={Link} to="/skills">Habilidades</Nav.Link>
            <NavDropdown title="Más" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to={"/blog"}>Blog</NavDropdown.Item>
           {/*<NavDropdown.Divider />*/}
            </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );

}

export default NavbarComponent;

