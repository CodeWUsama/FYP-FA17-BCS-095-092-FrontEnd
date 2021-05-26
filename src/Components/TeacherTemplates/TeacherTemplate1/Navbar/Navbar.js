import React, { Component } from "react";
import { MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBContainer } from "mdbreact";
import { HashRouter as Router } from 'react-router-dom';


class NavbarPage extends Component {
    state = {
        collapseID: ""
    };

    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));

    render() {
        return (
            <Router>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <MDBNavbar color="default-color" light expand="md" style={{ marginTop: "20px" }}>
                        <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
                        <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
                            <MDBNavbarNav left>
                                <MDBNavItem >
                                    <a href="/T1/   " style={{ color: 'grey', }}>HOME</a>
                                </MDBNavItem>
                                <p style={{ color: 'white' }}>.....</p>
                                <MDBNavItem>
                                    <a href="/T1/#/research" style={{ color: 'grey' }}>RESEARCHES</a>
                                </MDBNavItem>
                                <p style={{ color: 'white' }}>.....</p>
                                <MDBNavItem>
                                    <a href="/T1/#/calendar" style={{ color: 'grey' }}>REQUEST </a>
                                </MDBNavItem>
                                <p style={{ color: 'white' }}>.....</p>
                                <MDBNavItem>
                                    <a href="/T1/#/contact" style={{ color: 'grey', }}>CHAT</a>
                                </MDBNavItem>
                                <p style={{ color: 'white' }}>.....</p>
                                <MDBNavItem>
                                    <a href="/T1/#/request" style={{ color: 'grey', }}>MEETING REQUESTS</a>
                                </MDBNavItem>
                                <p style={{ color: 'white' }}>.....</p>
                                <MDBNavItem>
                                    <a href="/T1/#/meeting" style={{ color: 'grey', }}>CALENDAR</a>
                                </MDBNavItem>
                                <p style={{ color: 'white' }}>.....</p>
                                <MDBNavItem>
                                    <a href="/T1/#/notifi" style={{ color: 'grey', }}>MESSEGES</a>
                                </MDBNavItem>
                                <p style={{ color: 'white' }}>.....</p>
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBNavbar>
                </div>
            </Router>
        );
    }
}

export default NavbarPage;