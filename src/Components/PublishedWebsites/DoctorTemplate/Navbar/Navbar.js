import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav"
import classes from "./Navbar.module.css";
import { Route, HashRouter as Router } from 'react-router-dom';
import Home from '../Homepage/home';
import Researches from '../Researches/researches';
import Contact from '../Contact/contact';
import Admin from "../Admin/Dashboard/Dashboard"
import Messages from "./../Admin/ContactRequests/contactrequests"
import Appoint from '../Appointment/appoint';
import AppointmentRequests from '../Admin/AppointmentRequests/appReqs';

const MyNavbar = (props) => {
    return (
        <Router>
            <Navbar sticky="top" expand="lg" style={props.published?{ backgroundColor: "#fc9464", paddingLeft: "3%", paddingRight: "3%" }:{backgroundColor: "#fc9464", paddingLeft: "3%", paddingRight: "3%", top: 80}}>
                <Navbar.Brand style={{ color: "white", fontSize: 30, fontFamily: "revert", fontWeight: "bold", }} href="#home">WELCOME.</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="justify-content-center">
                        <Nav.Link style={{ color: "white", fontSize: 20 }} href="/DoctorWebsite/#/">Home</Nav.Link>
                        <Nav.Link style={{ color: "white", fontSize: 20 }} href="/DoctorWebsite/#/researches">Researches</Nav.Link>
                        <Nav.Link style={{ color: "white", fontSize: 20 }} href="/DoctorWebsite/#/chat">Chat</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <button className={classes.meetings} onClick={()=>{window.location.href="/DoctorWebsite/#/appointment"}}>Appointment</button>
                </Navbar.Collapse>
            </Navbar>

            <Route path="/" exact component={Home} />
            <Route path="/researches" exact component={Researches} />
            <Route path="/chat" exact children={<Contact footer/>} />
            <Route path="/admin" exact component={Admin} />            
            <Route path="/appointment" exact component={Appoint} />                      

        </Router>
    );
}

export default MyNavbar;