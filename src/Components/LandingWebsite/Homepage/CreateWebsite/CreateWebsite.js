import React, { Component } from 'react';
import classes from './CreateWeb.module.css';

export default class CreateWeb extends Component {
    render() {
        return (
            <div>
                <div className={classes.rootDiv}>
                    <div className={classes.headCont}>
                        <p className={classes.head}>How to Create a Website on Digital Studio</p>
                        <p className={classes.desc}>Follow these simple steps below to create your website now.</p>
                    </div>

                    <ol className={classes.stepsCont}>
                        <li>Signin in to the Digital Studio to quickly start making website.</li>
                        <li>If you are not a member already,create your account in few steps.</li>
                        <li>Click on Create Website Button on your Dashboard.</li>
                        <li>Select your desired category from wide range of categories.</li>
                        <li>In selected category, select your favorite template and click on customize.</li>
                        <li>Customize the default data with your own text, styles and images.</li>
                        <li>Add up your items by adding their details.</li>
                        <li>Save your progress by clicking on save changes button.</li>
                        <li>Publish your website by choosing the desired subdomain.</li>
                    </ol>

                    <a className={classes.aTag} href="/url" > Start Now </a>

                </div>
            </div>
        );
    }
}