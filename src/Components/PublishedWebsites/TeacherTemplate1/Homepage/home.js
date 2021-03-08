import React, { Component } from 'react';
import classes from './home.module.css'
import Front from './front';
import Calendar from './calendar';
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contactme';

export default class Myscreen extends Component {
    state = {
        fronttextEditor: false,
        fronttext: {},
        fronttext2Editor: false,
        fronttext2: {},
        footerEditor: false,
        footer: {},
        footercontactEditor: false,
        footercontact: {},
        mailEditor: false,
        mail: {},
        linkedinEditor: false,
        linkedin: {},
        showEditor: false,
    }

    _isMounted = false;
    componentDidMount() {
        this._isMounted = true;

        fetch("http://localhost:8080/t1td/getTeacherData?id=" + localStorage.getItem("id"), {
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
                        fronttext: resultData.data.fronttext,
                        fronttext2: resultData.data.fronttext2,
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
                <div className={classes.content} style={{ width: "100%" }}>
                    <div className={classes.topdiv}>

                        <Front
                            fronttext={this.state.fronttext}   
                            fronttext2={this.state.fronttext2}
                        />
                        <div className={classes.calendar} style={{ display: 'flex', justifyContent: 'center', marginTop: 600 }} >
                            <Calendar />
                        </div>
                        <div style={{ color: 'white' }}>.</div>
                        <div style={{ color: 'white' }}>.</div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Contact
                                footercontact={this.state.footercontact}
                                mail={this.state.mail}
                                linkedin={this.state.linkedin}
                            />
                        </div>
                        <Footer
                            footer={this.state.footer}
                            footercontact={this.state.footercontact}
                            mail={this.state.mail}
                            linkedin={this.state.linkedin}
                        />
                    </div>
                </div>
            </div>
        );
    }
}