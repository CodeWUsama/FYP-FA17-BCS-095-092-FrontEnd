import React, { Component } from 'react';
import Intro from './IntroSection/Intro';
import ServicesSection from './ServicesSection/ServicesSection';
import TopDishes from './TopDishes/TopDishes';
import LatestEditions from './Latest Editions/LatestEditions';
import ContactUs from './ContactUs/ContactUs'
import Footer from '../Footer/Footer';
import SideEditor from '../SideEditor/SideEditor';
import TextEditor from "./../../../Editors/TextEditor/TextEditor";
import classes from "./Home.module.css"

export default class Home extends Component {

    _isMounted = false;

    state = {
        storeName: {},
        introText: {},
        servicesDescription: {},
        s1Heading: {},
        s1Desc: {},
        s2Heading: {},
        s2Desc: {},
        s3Heading: {},
        s3Desc: {},
        dishes: [],
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
        flex: {}
    }

    async componentDidMount() {
        window.scrollTo(0, 0);
        this._isMounted = true;
        console.log(this.props.id);
        await fetch("http://localhost:8080/f1td/getHomeData?id=" + this.props.id, {
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
                        dishes: resultData.data.dishes,
                        adminName: resultData.data.adminName,
                        adminMessage: resultData.data.adminMessage,
                        footer: resultData.data.footer,
                        flex: resultData.data.flex
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
            <div className={classes.rootCont}>
                <div className={classes.content} style={{ width: "100%" }}>
                    <Intro
                        storeName={this.state.storeName}
                        introText={this.state.introText}
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
                    <TopDishes
                        dishes={this.state.dishes}
                        flex={this.state.flex.flexTopDishes}
                    />
                    <LatestEditions
                        dishes={this.state.dishes}
                    />
                    <ContactUs
                        adminName={this.state.adminName}
                        adminMessage={this.state.adminMessage}
                    />
                    <Footer
                        footer={this.state.footer}
                    />
                </div>
            </div>
        );
    }

}