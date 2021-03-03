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
                <MDBContainer>

                    <MDBNavbar color="default-color" light expand="md" style={{ marginTop: "20px", marginLeft: '15%' }}>
                        <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
                        <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
                            <MDBNavbarNav left>
                                <MDBNavItem >
                                    <a href="/T1/" style={{ color: 'grey', }}>HOME</a>
                                </MDBNavItem>
                                <p style={{ color: 'white' }}>.....</p>
                                <MDBNavItem>
                                    <a href="/T1/#/research" style={{ color: 'grey' }}>RESEARCH</a>
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
                                    <a href="/T1/#/meeting" style={{ color: 'grey', }}>MEETINGS</a>
                                </MDBNavItem>
                                <p style={{ color: 'white' }}>.....</p>
                                <MDBNavItem>
                                    <a href="/T1/#/notifi" style={{ color: 'grey', }}>NOTIFICATIONS</a>
                                </MDBNavItem>
                                <p style={{ color: 'white' }}>.....</p>
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBNavbar>
                </MDBContainer>
            </Router>
        );
    }
}

export default NavbarPage;