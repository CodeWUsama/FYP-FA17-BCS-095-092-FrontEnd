import React, { Component } from 'react';
import Footer from '../../Footer/Footer';
import Template from '../Dashboard/Template/Template';
import classes from "./CreateWebsite.module.css";

export default class CreateWeb extends Component {

    render() {
        return (
            <div>
                <p className={classes.welcome}>Categories and Templates</p>

                <div className={classes.sectionTemp}>
                    <p className={classes.head}>Food and Eating</p>
                    <hr />
                    <div className={classes.tempsCont}>
                        <Template name="Desi Restaurant" category="F1" admin={false} user={false} view={true} />
                    </div>
                </div>

                <div className={classes.sectionTemp}>
                    <p className={classes.head}>Shopping and store</p>
                    <hr />
                    <div className={classes.tempsCont}>
                        <Template name="Fashion Style" category="S1" admin={false} user={false} view={true} />
                    </div>
                </div>

                <div className={classes.sectionTemp}>
                    <p className={classes.head}>Blogging and Articles</p>
                    <hr />
                    <div className={classes.tempsCont}>
                        <Template name="Blogging on Tips" category="B1" admin={false} user={false} view={true} />
                    </div>
                </div>

                <div className={classes.sectionTemp}>
                    <p className={classes.head}>Teacher and Researcher Portfolio</p>
                    <hr />
                    <div className={classes.tempsCont}>
                        <Template name="Desi Restaurant" category="NA" admin={false} user={false} view={true} />
                    </div>
                </div>

                <div className={classes.sectionTemp}>
                    <p className={classes.head}>Doctor Portfolio</p>
                    <hr />
                    <div className={classes.tempsCont}>
                        <Template name="Desi Restaurant" category="NA" admin={false} user={false} view={true} />
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}