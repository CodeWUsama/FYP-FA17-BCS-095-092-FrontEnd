import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav"
import classes from "./Navbar.module.css";
import { Route, HashRouter as Router } from 'react-router-dom';
import Home from '../Homepage/home';
import Researches from '../Researches/researches';
import Contact from '../Contact/contact';

const MyNavbar = () => {
    return (
        <Router>
            <Navbar sticky="top" expand="lg" style={{ backgroundColor: "#fc9464", paddingLeft: "3%", paddingRight: "3%", top: 80 }}>
                <Navbar.Brand style={{ color: "white", fontSize: 30, fontFamily: "revert", fontWeight: "bold", }} href="#home">USAMA.</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="justify-content-center">
                        <Nav.Link style={{ color: "white", fontSize: 20 }} href="/d1/#/">Home</Nav.Link>
                        <Nav.Link style={{ color: "white", fontSize: 20 }} href="/d1/#/researches">Researches</Nav.Link>
                        <Nav.Link style={{ color: "white", fontSize: 20 }} href="/d1/#/chat">Chat</Nav.Link>
                        <Nav.Link style={{ color: "white", fontSize: 20 }} href="/d1/#/admin">Admin</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <button className={classes.meetings}>Let's Meet</button>
                </Navbar.Collapse>
            </Navbar>
            <Route path="/" exact component={Home} />
            <Route path="/researches" exact component={Researches} />
            <Route path="/chat" exact component={Contact} />

        </Router>
    );
}

export default MyNavbar;