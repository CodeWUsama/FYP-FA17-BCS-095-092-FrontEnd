import React, { Component } from 'react';
import classes from './ContactUs.module.css';
import profileIcon from './profile.png';

export default class ContactUs extends Component {
    render() {
        return (
            <div className={classes.rootCont}>
                <div className={classes.rightCont}>
                    <div className={classes.picCont}>
                        <img alt="profileIcon" src={profileIcon} className={classes.profileIcon} />
                        <p className={classes.adminName}>Usama Bilal (Admin)</p>
                        <p className={classes.adminMsg}>We are trying our best to provide you with the best ever we can. Customer satisfaction is our primary thing which we ensure.</p>
                    </div>
                </div>
                <div className={classes.leftCont}>
                    <form className={classes.contactForm}>
                        <p className={classes.formHead}>Contact Us</p>
                        <input className={classes.formInput} placeholder="Name" />
                        <input className={classes.formInput} placeholder="Email" />
                        <textarea className={classes.formInput} placeholder="Message" />
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <button className={classes.submitButton} type="submit">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}