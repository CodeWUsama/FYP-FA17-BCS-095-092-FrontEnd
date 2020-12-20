import React, { Component } from 'react';
import classes from './ServicesSection.module.css';
import easyIcon from './easy.png';
import cheapIcon from './price.png';
import payIcon from './pay.png'

export default class ServicesSection extends Component {

    render() {
        return (
            <div className={classes.rootCont}>

                <div className={classes.headCont}>
                    <p className={classes.headText}>Highlighted Features</p>
                    <p className={classes.servicesText} style={{ fontSize: 15, fontFamily: "sans-serif", color: "#5c3d03" }}>
                        Our purpose is to make a website process easy and simple for layman using self learnable interfaces and easy payment gateways. 
                    </p>
                </div>

                <div className={classes.servicesCont}>
                    <div className={classes.serviceCont}>
                        <div className={classes.iconRootCont}>
                            <div className={classes.iconCont}>
                                <img className={classes.serviceIcon} src={easyIcon} alt="easy-interface" />
                            </div>
                        </div>
                        <p className={classes.serviceHeading} style={{ fontSize: 23, fontFamily: "Josefin Sans", color: "black"}}>
                            Easy Workflow
                        </p>
                        <p className={classes.serviceDesc} style={{ fontSize: 16, fontFamily: "sans-serif", color: "#5c3d03" }}>
                            You just have to select the template, customize the default text, choose the subdomain and publish it.
                        </p>
                    </div>

                    <div className={classes.serviceCont}>
                        <div className={classes.iconRootCont}>
                            <div className={classes.iconCont}>
                                <img className={classes.serviceIcon} src={cheapIcon} alt="Cheap-Icon" />
                            </div>
                        </div>
                        <p className={classes.serviceHeading} style={{ fontSize: 23, fontFamily: "Josefin Sans", color: "black"}}>
                            Cheap Rates
                        </p>
                        <p className={classes.serviceDesc} style={{ fontSize: 16, fontFamily: "sans-serif", color: "#5c3d03" }}>
                            We provide you with cheap packages starting from 500 PKR for a single website including template and subdomain. 
                        </p>
                    </div>

                    <div className={classes.serviceCont}>
                        <div className={classes.iconRootCont}>
                            <div className={classes.iconCont}>
                                <img className={classes.serviceIcon} src={payIcon} alt="Cheap-Icon" />
                            </div>
                        </div>
                        <p className={classes.serviceHeading} style={{ fontSize: 23, fontFamily: "Josefin Sans", color: "black"}}>
                            Payment Gateways
                        </p>
                        <p className={classes.serviceDesc} style={{ fontSize: 16, fontFamily: "sans-serif", color: "#5c3d03" }}>
                            You can pay us through very accessible payment methods like JazzCash and EasyPaisa, Credit Card isn't required at all.
                        </p>
                    </div>


                </div>
            </div>
        );
    }
}