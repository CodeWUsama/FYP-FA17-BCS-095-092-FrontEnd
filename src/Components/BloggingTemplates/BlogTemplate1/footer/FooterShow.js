import React, { Component } from 'react';
import classes from './Footer.module.css';
import Fb from './facebook.png';
import Twitter from './twitter.png';
import Insta from './instagram.png';
import Mail from './email.png';
import Linkedin from './linkedin.png';
import Whatsapp from './whatsapp.png';

export default class Footer extends Component {
    state = {
        hometextEditor: false,
        footerEditor: false,
        footer: {},
        footercontactEditor: false,
        footercontact: {},
        mailEditor: false,
        mail: {},
        linkedinEditor: false,
        linkedin: {},
        showEditor: false,

        hometext: {},

    }
    _isMounted = false;
    componentDidMount() {
        this._isMounted = true;

        fetch("http://localhost:8080/b1td/getTecData?id=" + localStorage.getItem("id"), {
            method: "GET",
            headers: {
                "Content-Type": 'application/json'
            },
        })
            .then(result => {
                return result.json();
            }).then(resultData => {
                if (this._isMounted) {
                    this.setState({
                        footer: resultData.data.footer,
                        footercontact: resultData.data.footercontact,
                        linkedin: resultData.data.linkedin,
                        mail: resultData.data.mail,
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

                <div className={classes.div1}>
                    <p className={classes.abtHead}>About Us</p>
                    <p

                    > {this.state.footer.text} </p>
                    <div className={classes.accCont}>
                        <img alt="icon" className={classes.accIcon} src={Fb} />
                        <img alt="icon" className={classes.accIcon} src={Twitter} />
                        <img alt="icon" className={classes.accIcon} src={Insta} />
                    </div>
                </div>
                <div className={classes.div2}>
                    <p className={classes.abtHead}>Site</p>
                    <div className={classes.linksCont}>
                        <a href="/home" className={classes.links}> Home</a>
                        <a href="/recipe" className={classes.links}> RECIPES</a>
                        <a href="/gallery" className={classes.links}> Gallery </a>
                        <a href="/contact" className={classes.links}> Contact</a>
                    </div>
                </div>

                <div className={classes.div4}>
                    <p className={classes.abtHead}>CONTACT</p>
                    <div className={classes.contactLink}>
                        <img alt="icon" className={classes.contactIcon} src={Linkedin} />
                        <p
                            className={classes.contactText}
                        > {this.state.linkedin.text} </p>
                    </div>
                    <div className={classes.contactLink}>
                        <img alt="icon" className={classes.contactIcon} src={Mail} />
                        <p
                            className={classes.contactText}
                        > {this.state.mail.text} </p>  </div>
                    <div className={classes.contactLink}>
                        <img alt="icon" className={classes.contactIcon} src={Whatsapp} />
                        <p
                            className={classes.contactText}
                        > {this.state.footercontact.text} </p>   </div>
                </div>
            </div>
        );
    }
}