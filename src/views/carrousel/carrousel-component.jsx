import React from 'react';
import foto1 from './office.jpg';
import foto2 from './proyecto2.jpg';
import foto3 from './blog.jpg';
import Carousel from 'react-bootstrap/Carousel';
import './carrousel-style.css';
import Pdf from "./cv.pdf";

function ControlledCarousel() {
    const [index, setIndex] = React.useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
      <Carousel className="fondoslider" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={foto1}
            alt="First slide"
          />
          <Carousel.Caption >
            <h3>Hola, soy Orlando Rodríguez</h3>
            <div className="cvlink">
                <a  href = {Pdf} target = "_blank">Mi C.V</a>
            </div>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={foto2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Mis proyectos</h3>
            <p>Me gusta construir cosas</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={foto3}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Me gusta escribir</h3>
            <p>
              Visita mi blog proximamente.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  export default ControlledCarousel;