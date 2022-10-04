import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.component';
import Hero from './components/Hero.component';
import CarouselComponent from './components/Carousel.component';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import About from './pages/About.page';
import Contacts from './pages/Contacts.page';
import Portfolio from './pages/Portfolio.page';
import Technologies from './pages/Technologies.page';
import Footer from './components/Footer.component'

function App() {
  return (
    <Router>
      <NavBar />
      <About />
      <Portfolio />
      <Technologies />
      <Contacts />
      <Hero />
      <Container>
        <Col></Col>
        <Col>
          {/* <Row><About/></Row> */}
          {/* <Row><Portfolio></Portfolio></Row> */}
          <Row></Row>
        </Col>
        <Col></Col>
      </Container>
      <Footer />
      <Routes>
        <Route path='/'></Route>

        <Route path='/about' element={<About />}></Route>

        <Route path='/portfolio' element={<Portfolio />}></Route>

        <Route path='/technologies' element={<Technologies />}></Route>

        <Route path='/contacts' element={<Contacts />}></Route>
        <Route path="*" element={<Link to="/"/>} />
      
      </Routes>
    </Router>
  );
}

export default App;
