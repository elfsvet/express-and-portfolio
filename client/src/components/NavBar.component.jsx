import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {Avatar } from '@mui/material';
const NavBar = () => {
  return (
    <Navbar bg='dark' variant='dark' expand="md">
      <Container>
        <Navbar.Brand as={Link} to=''>
        <Avatar alt="Remy Sharp" src="/images/stepan.jpg" />
          Stepan Matysik
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='ms-auto'>
            <Nav.Link href='#about'>
              About
            </Nav.Link>

            <Nav.Link href='#portfolio'>
              Portfolio
            </Nav.Link>

            <Nav.Link href='#technologies'>
              Technologies
            </Nav.Link>

            <Nav.Link  href='#contacts'>
              Contacts
            </Nav.Link>
        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
