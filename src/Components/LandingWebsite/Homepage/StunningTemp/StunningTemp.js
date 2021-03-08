import React, { Component } from 'react';
import classes from './StunningTemp.module.css';
import B1 from "./../../User/Dashboard/Template/b1.jpg";
import F1 from "./../../User/Dashboard/Template/f1.jpg";
import S1 from "./../../User/Dashboard/Template/s1.JPG";
import T1 from "./../../User/Dashboard/Template/t1.png";

export default class StunningTemp extends Component {
    render() {
        return (
            <div>
                <div className={classes.rootDiv}>
                    <div className={classes.headCont}>
                        <p className={classes.head}>Stunning Templates</p>
                        <p className={classes.desc}>Start with free HTML website templates and bring your vision to life.</p>
                    </div>

                    <div className={classes.templatesCont}>

                        <div className={classes.templateCont}>
                            <img alt="Health Wellness" className={classes.tempImg} src={S1} />
                            <p className={classes.tempHead}>Shopping and Fashion</p>
                            <p className={classes.tempSubHead}>Shop Store</p>
                        </div>

                        <div className={classes.templateCont}>
                            <img alt="Health Wellness" className={classes.tempImg} src={F1} />
                            <p className={classes.tempHead}>Food Restaurant</p>
                            <p className={classes.tempSubHead}>Eating Store</p>
                        </div>

                        <div className={classes.templateCont}>
                            <img alt="Health Wellness" className={classes.tempImg} src={B1} />
                            <p className={classes.tempHead}>Article and Blogging</p>
                            <p className={classes.tempSubHead}>Food Blogger</p>
                        </div>

                        <div className={classes.templateCont}>
                            <img alt="Health Wellness" className={classes.tempImg} src={T1} />
                            <p className={classes.tempHead}>Teaching and Research</p>
                            <p className={classes.tempSubHead}>Teacher's Portfolio</p>
                        </div>

                        <div className={classes.templateCont}>
                            <img alt="Health Wellness" className={classes.tempImg} src="https://static.wixstatic.com/media/311dce_c71c67b4e6ca4d57a4029bc8c72ddb91~mv2.jpg/v1/fill/w_369,h_270,al_c,q_80,usm_0.66_1.00_0.01/Group%2051.webp" />
                            <p className={classes.tempHead}>Doctor and Medication</p>
                            <p className={classes.tempSubHead}>Doctor's Portfolio</p>
                        </div>

                        <div className={classes.templateCont}>
                            <img alt="Health Wellness" className={classes.tempImg} src="https://static.wixstatic.com/media/311dce_c71c67b4e6ca4d57a4029bc8c72ddb91~mv2.jpg/v1/fill/w_369,h_270,al_c,q_80,usm_0.66_1.00_0.01/Group%2051.webp" />
                            <p className={classes.tempHead}>Article and Blogging</p>
                            <p className={classes.tempSubHead}>Blogger</p>
                        </div>

                    </div>

                    <a className={classes.aTag} href="/url" > View All Templates</a>

                </div>
            </div>
        );
    }
}