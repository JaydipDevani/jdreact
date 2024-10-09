import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" data-bs-theme="light" className='d-flex justify-content-between px-4 fw-bold'>
                <div>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                </div>
                <div>
                    <Nav className="me-auto">
                        
                        <Link to="/"  className="text-decoration-none">
                            <Nav.Link href="#home" className='fw-bolder fs-5 d-flex align-items-center text-decoration-none'>Home</Nav.Link>
                        </Link>
                        <Link to="/about" className="text-decoration-none">
                            <Nav.Link href="#features" className='fw-bolder fs-5 d-flex align-items-center'>About</Nav.Link>
                        </Link>
                        <Link to="/ricksupport" className="text-decoration-none">
                            <Nav.Link href="#pricing"><button className='fw-bold fs-6 px-2 py-1 font-13 rounded border border-warning bg-light btn-hover'>Support Us</button></Nav.Link>
                        </Link>
                    </Nav>
                </div>
            </Navbar>
    </div>
  )
}

export default Header
