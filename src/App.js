import React from 'react';
import './App.css';
import {Container,Row,Col} from 'react-bootstrap';
import NavbarComponent from './components/navbar/navbar-component.jsx';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cabecera from './views/header/header-component.jsx';
import Skills from './views/skills/skills-component.jsx';
import NotFoundPage from './views/404/404-view.jsx';
import Quiensoy from './views/quiensoy/quiensoy-component.jsx';
import Blog from './views/blog/blog-component.jsx';

class App extends React.Component {

  render(){
    return (
      <BrowserRouter>
          <Container className="container">
            <Row noGutters={true}>
              <Col  md={12} lg={12}   className="navbar-container">
                  <NavbarComponent /> 
              </Col>
            
              <Col  md={12} lg={12}>
              <Switch>
                  <Route exact path="/">
                    <Cabecera/>
                  </Route>
                  <Route exact path="/skills">
                  <Skills/>
                  </Route>
                  <Route exact path="/quiensoy">
                  <Quiensoy/>
                  </Route>
                  <Route exact path="/blog">
                  <Blog/>
                  </Route>
                  <NotFoundPage/> 
                  <Route >
                  <NavbarComponent /> 
                  </Route>
  
              </Switch>
              </Col>
            </Row>
          </Container>
      </BrowserRouter>
    );


    
  }
  
}

export default App;
