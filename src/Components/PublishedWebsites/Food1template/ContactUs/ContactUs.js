import React from 'react';
import { Component } from 'react';
import Footer from '../Footer/Footer';
import ContactUs from "./../Homepage/ContactUs/ContactUs";

export default class contactUs extends Component {

    state = {
        adminName: {},
        adminMessage: {},
        footer: {
            aboutUs: {},
            phone: {},
            email: {},
            phone: {},
            whatsapp: {},
            address: {}
        },
    }
    _isMounted = false;
    async componentDidMount() {
        this._isMounted = true;
        await fetch("http://localhost:8080/f1td/getHomeData?id=" + localStorage.getItem("id"), {
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
                        adminName: resultData.data.adminName,
                        adminMessage: resultData.data.adminMessage,
                        footer: resultData.data.footer,
                    });
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <div style={{ marginTop: "150px" }}>
                <ContactUs
                    adminName={this.state.adminName}
                    adminMessage={this.state.adminMessage}
                />
                <Footer
                    footer={this.state.footer}
                />
            </div>
        );
    }
}