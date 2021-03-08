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
                                    <a href="/TeacherWebsite/" style={{ color: 'grey', }}>HOME</a>
                                </MDBNavItem>
                                <p style={{ color: 'white' }}>.....</p>
                                <MDBNavItem>
                                    <a href="/TeacherWebsite/#/research" style={{ color: 'grey' }}>VIEW RESEARCHES</a>
                                </MDBNavItem>
                                <p style={{ color: 'white' }}>.....</p>
                                <MDBNavItem>
                                    <a href="/TeacherWebsite/#/calendar" style={{ color: 'grey' }}>MEETING REQUEST </a>
                                </MDBNavItem>
                                <p style={{ color: 'white' }}>.....</p>
                                <MDBNavItem>
                                    <a href="/TeacherWebsite/#/contact" style={{ color: 'grey', }}>CHAT</a>
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