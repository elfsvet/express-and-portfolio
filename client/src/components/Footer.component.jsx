import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <Navbar bg='dark' variant='dark' expand='md'>
      <Container>
        <Navbar.Text>
          Copyright&copy; {new Date().getFullYear()} All rights reserved
        </Navbar.Text>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link href='#about'>About</Nav.Link>

            <Nav.Link href='#portfolio'>Portfolio</Nav.Link>

            <Nav.Link href='#technologies'>Technologies</Nav.Link>

            <Nav.Link href='#contacts'>Contacts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Footer;
