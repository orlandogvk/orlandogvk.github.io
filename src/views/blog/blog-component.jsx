import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './blog-style.css';
import Imagen from './construccion.jpg';

function Myblog(){
    return(
        <div className="blogcontainer">
            <div><h3>Lo siento el blog está construcción</h3></div>
            <img src={Imagen} alt="logoconst"/>
            <div><Button variant="primary" as={Link} to="/">Ir a inicio</Button></div>
        </div>
    )
}

export default Myblog;