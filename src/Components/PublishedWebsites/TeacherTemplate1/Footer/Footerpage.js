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

        fetch("http://localhost:8080/t1td/getTecData?id="+localStorage.getItem("id"), {
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
                    style={{
                        fontSize: this.state.footer.fontSize,
                        fontFamily: this.state.footer.fontFamily,
                        color: this.state.footer.fontColor,
                        fontWeight: this.state.footer.bold ? "bold" : "normal",
                        fontStyle: this.state.footer.italic ? "italic" : "normal",
                        textDecoration: this.state.footer.underline ? "underline" : "none",
                        textAlign: this.state.footer.align,
                    }}
                    > {this.state.footer.text} </p>

                   
                </div>


                <div className={classes.div4}>
                    <p className={classes.abtHead}>CONTACT</p>
                    <div className={classes.contactLink}>
                        <img alt="icon" className={classes.contactIcon} src={Linkedin} />
                        <p
                             style={{
                                fontSize: this.state.linkedin.fontSize,
                                fontFamily: this.state.linkedin.fontFamily,
                                color: this.state.linkedin.fontColor,
                                fontWeight: this.state.linkedin.bold ? "bold" : "normal",
                                fontStyle: this.state.linkedin.italic ? "italic" : "normal",
                                textDecoration: this.state.linkedin.underline ? "underline" : "none",
                                textAlign: this.state.linkedin.align,
                            }}
                            className={classes.contactText}
                        > {this.state.linkedin.text} </p>
                    </div>
                    <div className={classes.contactLink}>
                        <img alt="icon" className={classes.contactIcon} src={Mail} />
                        <p
                             style={{
                                fontSize: this.state.mail.fontSize,
                                fontFamily: this.state.mail.fontFamily,
                                color: this.state.mail.fontColor,
                                fontWeight: this.state.mail.bold ? "bold" : "normal",
                                fontStyle: this.state.mail.italic ? "italic" : "normal",
                                textDecoration: this.state.mail.underline ? "underline" : "none",
                                textAlign: this.state.mail.align,
                            }}
                            className={classes.contactText}
                            onClick={this.state.mailEditor}
                        > {this.state.mail.text} </p>  </div>
                    <div className={classes.contactLink}>
                        <img alt="icon" className={classes.contactIcon} src={Whatsapp} />
                        <p
                             style={{
                                fontSize: this.state.footercontact.fontSize,
                                fontFamily: this.state.footercontact.fontFamily,
                                color: this.state.footercontact.fontColor,
                                fontWeight: this.state.footercontact.bold ? "bold" : "normal",
                                fontStyle: this.state.footercontact.italic ? "italic" : "normal",
                                textDecoration: this.state.footercontact.underline ? "underline" : "none",
                                textAlign: this.state.footercontact.align,
                            }}
                            className={classes.contactText}

                        > {this.state.footercontact.text} </p>   </div>
                </div>
            </div>
        );
    }
}