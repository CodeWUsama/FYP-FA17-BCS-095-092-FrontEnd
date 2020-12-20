import React, { Component } from 'react';
import classes from './Footer.module.css';
import Fb from './facebook.png';
import Twitter from './twitter.png';
import Insta from './instagram.png';
import Mail from './email.png';
import Phone from './phone.png';
import Whatsapp from './whatsapp.png';
import Location from './pin.png';

export default class Footer extends Component {
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
                        <a href="/" className={classes.links}> Home</a>
                        <a href="/" className={classes.links}> Menu</a>
                        <a href="/" className={classes.links}> Gallery</a>
                        <a href="/" className={classes.links}> Contact</a>
                        <a href="/" className={classes.links}> About</a>
                        <a href="/" className={classes.links}> Login</a>
                    </div>
                </div>

                <div className={classes.div4}>
                    <p className={classes.abtHead}>Have a Question?</p>
                    <div className={classes.contactLink}>
                        <img alt="icon" className={classes.contactIcon} src={Location} />
                        <p className={classes.contactText}>House P17 Alnoor Colony Near Block 35 Sargodha Pakistan</p>
                    </div>
                    <div className={classes.contactLink}>
                        <img alt="icon" className={classes.contactIcon} src={Phone} />
                        <p className={classes.contactText}>03029531121</p>
                    </div>
                    <div className={classes.contactLink}>
                        <img alt="icon" className={classes.contactIcon} src={Mail} />
                        <p className={classes.contactText}>khawajausama775@gmail.com</p>
                    </div>
                    <div className={classes.contactLink}>
                        <img alt="icon" className={classes.contactIcon} src={Whatsapp} />
                        <p className={classes.contactText}>03029531121</p>
                    </div>
                </div>
            </div>
        );
    }
}