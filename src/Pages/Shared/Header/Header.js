import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
// import logo from '../../../images/logo.png';

const Header = () => {
  const [user] = useAuthState(auth);

  const handelLogout = () => {
    signOut(auth);
  }
    return (
        <div>
            <Navbar sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
               <Navbar.Brand as = {Link} to ="/">
                    {/* <img src= {logo} alt="header-logo" /> */}
               </Navbar.Brand>
             <Navbar.Toggle aria-controls="responsive-navbar-nav" />
             <Navbar.Collapse id="responsive-navbar-nav">
             <Nav className="me-auto">
               <Nav.Link as = {Link} to ="/home">Home</Nav.Link>
               <Nav.Link as = {Link} to ="/about">About</Nav.Link>
             </Nav>
             <Nav>
                {
                  user? <button onClick={handelLogout}>Logout</button> : <Nav.Link as = {Link} to ="/login">Login</Nav.Link>
                }
             </Nav>
           </Navbar.Collapse>
       </Container>
      </Navbar>
        </div>
    );
};

export default Header;