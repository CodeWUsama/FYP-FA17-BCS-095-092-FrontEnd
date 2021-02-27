import React from 'react';
import { Component } from 'react';
import Footer from '../Footer copy/Footer';
import Contact from '../LandingPage/Contact/contact';

export default class ContactUs extends Component {

    state = {
        footer: {
            aboutUs: {},
            phone: {},
            email: {},
            phone: {},
            whatsapp: {},
            address: {}
        },
    }

    async componentDidMount() {
        this._isMounted = true;
        await fetch("http://localhost:8080/s1td/getHomeData?id=" + localStorage.getItem("id"), {
            method: "GET",
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token'),
                "Content-Type": 'application/json'
            },
        })
            .then(result => {
                return result.json();
            }).then(resultData => {
                if (this._isMounted) {
                    this.setState({
                        footer: resultData.data.footer
                    });
                }
            })
            .catch(err => {
                console.log(err);
            })
    }


    render() {
        return (
            <div style={{ paddingTop: 120 }}>
                <Contact />
                <Footer footer={this.state.footer} />
            </div>
        );
    }

}