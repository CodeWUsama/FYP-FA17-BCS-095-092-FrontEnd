import React from 'react';
import { Component } from 'react';
import Footer from '../Footer copy/Footer';
import Contact from '../LandingPage/Contact/contact';

export default class ContactUs extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div style={{ paddingTop: 120 }}>
                <Contact />
                <Footer />
            </div>
        );
    }

}