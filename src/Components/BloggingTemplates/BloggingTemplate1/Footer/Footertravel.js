import React, { Component } from 'react';
import classes from './Footertravel.module.css';
import Fb from './facebook.png';
import Twitter from './twitter.png';
import Insta from './instagram.png';
import Mail from './email.png';
import Phone from './phone.png';
import Whatsapp from './whatsapp.png';

export default class Footertravel extends Component {
    render() {
        return (
            <div className={classes.rootCont}>
                <div className={classes.div1}>
                    <p className={classes.abtHead}>About Us</p>
                    <p className={classes.abtText}>We welcome our dear customers with bottom of our heart. Food Spices presets you with our delicious menu cooked by our experienced cooks. To satisfy our valuable customers with quality food is our key.</p>
                    <div className={classes.accCont}>
                        <img alt="icon" className={classes.accIcon} src={Fb} />
                        <img alt="icon" className={classes.accIcon} src={Twitter} />
                        <img alt="icon" className={classes.accIcon} src={Insta} />
                    </div>
                </div>
                <div className={classes.div2}>
                    <p className={classes.abtHead}>Quick Links</p>
                    <div className={classes.linksCont}>
                        <a href="/home" className={classes.links}> Home</a>
                        <a href="/recipe" className={classes.links}> Articles</a>
                        <a href="/" className={classes.links}> Gallery </a>
                        <a href="/" className={classes.links}> Contact</a>
                        <a href="/about" className={classes.links}> About</a>
                    </div>
                </div>

                <div className={classes.div4}>
                    <p className={classes.abtHead}>Have a Question?</p>
                    <div className={classes.contactLink}>
                        <img alt="icon" className={classes.contactIcon} src={Phone} />
                        <p className={classes.contactText}>0332323234</p>
                    </div>
                    <div className={classes.contactLink}>
                        <img alt="icon" className={classes.contactIcon} src={Mail} />
                        <p className={classes.contactText}>blogger@gmail.com</p>
                    </div>
                    <div className={classes.contactLink}>
                        <img alt="icon" className={classes.contactIcon} src={Whatsapp} />
                        <p className={classes.contactText}>0332323234</p>
                    </div>
                </div>
            </div>
        );
    }
}