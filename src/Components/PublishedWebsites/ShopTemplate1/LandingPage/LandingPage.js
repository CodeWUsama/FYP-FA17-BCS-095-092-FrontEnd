import Home from "./Home/Home";
import NewArrivals from "./NewArrivals/NewArrivals"
import React from 'react';
import ServicesSection from "./ServicesSection/ServicesSection";
import AboutUs from "./AboutUs/AboutUs";
import Contact from "./Contact/contact";
import Footer from "../Footer copy/Footer";
import { Component } from "react";
import classes from "./LandingPage.module.css";

export default class LandingPage extends Component {

    _isMounted = false;

    state = {
        storeNameEditor: false,
        introTextEditor: false,
        servicesDescEditor: false,
        s1HEditor: false,
        s1DEditor: false,
        s2HEditor: false,
        s2DEditor: false,
        s3HEditor: false,
        s3DEditor: false,
        sectionNameEditor: false,
        sectionDesc: false,
        aboutUsEditor: false,
        addressEditor: false,
        phoneEditor: false,
        emailEditor: false,
        whatsappEditor: false,
        showEditor: true,
        storeName: {},
        introText: {},
        introText: {},
        servicesDescription: {},
        s1Heading: {},
        s1Desc: {},
        s2Heading: {},
        s2Desc: {},
        s3Heading: {},
        s3Desc: {},
        sectionName: {},
        sectionDesc: {},
        footer: {
            aboutUs: {},
            phone: {},
            email: {},
            phone: {},
            whatsapp: {},
            address: {}
        },
        products: []
    }

    async componentDidMount() {
        window.scrollTo(0, 0);
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
                        storeName: resultData.data.name,
                        introText: resultData.data.intropara,
                        servicesDescription: resultData.data.servicesDescription,
                        s1Heading: resultData.data.s1Heading,
                        s1Desc: resultData.data.s1Desc,
                        s2Heading: resultData.data.s2Heading,
                        s2Desc: resultData.data.s2Desc,
                        s3Heading: resultData.data.s3Heading,
                        s3Desc: resultData.data.s3Desc,
                        sectionName: resultData.data.sectionName,
                        sectionDesc: resultData.data.sectionDesc,
                        footer: resultData.data.footer,
                        products: resultData.data.products
                    });
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {

        return (
            <div className={classes.rootCont}>
                <div className={classes.content} style={{ width: "100%" }}>
                    <Home
                        storeName={this.state.storeName}
                        published={this.props.published}
                        introText={this.state.introText}
                    />
                    <NewArrivals
                        products={this.state.products}
                    />
                    <ServicesSection

                        servicesDescription={this.state.servicesDescription}


                        s1H={this.state.s1Heading}


                        s1D={this.state.s1Desc}


                        s2H={this.state.s2Heading}

                        s2D={this.state.s2Desc}

                        s3H={this.state.s3Heading}

                        s3D={this.state.s3Desc}

                    />
                    <AboutUs

                        sectionName={this.state.sectionName}

                        sectionDesc={this.state.sectionDesc}

                    />
                    <Contact />
                    <Footer
                        footer={this.state.footer}
                    />
                </div>
            </div>
        );
    }
}