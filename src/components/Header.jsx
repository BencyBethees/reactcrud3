import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { GiOlive } from "react-icons/gi";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand style={{ color: "pink" }} href="#home">
            <h4>
              <b>
                <i>
                  Olive events <GiOlive />
                </i>
              </b>
            </h4>
          </Navbar.Brand>
          <Nav className="me-5">
            <Link
              style={{ textDecoration: "none" }}
              className="text-light me-4"
              to={"/"}
            >
              Home
            </Link>
             <Link
              style={{ textDecoration: "none" }}
              className="text-light me-4"
              to={"/events"}
            >
              Events
            </Link>
             <Link
              style={{ textDecoration: "none" }}
              className="text-light me-4"
              to={"/addevents"}
            >
              Addevents
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              className="text-light me-4"
              to={"/about"}
            >
              About
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              className="text-light me-4"
              to={"/contact"}
            >
              Contact
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
