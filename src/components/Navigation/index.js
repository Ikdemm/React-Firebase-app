import React from 'react';
import { Link } from 'react-router-dom';
import { AuthUserContext } from '../Session';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';

import { Navbar, Nav, Button } from 'react-bootstrap';
 
const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);
 
const NavigationAuth = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Authentication</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link><Link to={ROUTES.LANDING}>Landing</Link></Nav.Link>
      <Nav.Link><Link to={ROUTES.HOME}>Home</Link></Nav.Link>
      <Nav.Link><Link to={ROUTES.ACCOUNT}>Account</Link></Nav.Link>
    </Nav>
    <Nav>
      <SignOutButton />
    </Nav>
  </Navbar>
  
);
 
const NavigationNonAuth = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Authentication</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link><Link to={ROUTES.LANDING}>Landing</Link></Nav.Link>
      <Nav.Link><Link to={ROUTES.SIGN_IN}>Sign In</Link></Nav.Link>
    </Nav>
    <Nav>
      <SignOutButton />
    </Nav>
  </Navbar>
);
 
export default Navigation;