import React from "react";
import logo from "../assets/IMAGE/logo.svg";
import { FaRegUserCircle } from "react-icons/fa";
import "../assets/CSS/Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div>
        <Navbar className='nav-color' variant='light' expand='lg'>
          <div className='conts'>
            <Navbar.Brand href='/' className='nav-brand'>
              <img src={logo} alt='Logo' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='ms-auto'>
                <Nav.Link as={Link} to={"/"} className='nav-link'>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to={"/Bantuan"} className='nav-link'>
                  Bantuan
                </Nav.Link>
                <Nav.Link as={Link} to={"/Login"} className='nav-link login'>
                  Login
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
    </>
  );
}

export default NavBar;
