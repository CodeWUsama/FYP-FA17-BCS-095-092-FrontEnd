import React, { Component } from 'react';
import classes from './home.module.css'
import SideEditor from '../ReusableComponents/SideEditor/SideEditor';
import TextEditor from '../../../Editors/TextEditor/TextEditor';
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

        fetch("http://localhost:8080/t1td/getTeacherData", {
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
    editorHandler = () => {
        this.setState({ showEditor: false });
    }
    fronttextEditor = () => {
        this.setState({
            fronttextEditor: true,
            showEditor: true
        });
    }

    changefronttext = (newName, newSize, newFamily, newColor, newbold, newitalic, underline, align) => {
        if (newSize === '') {
            newSize = 0;
        }
        this.setState({
            fronttext: {
                text: newName,
                fontSize: parseInt(newSize),
                fontFamily: newFamily,
                fontColor: newColor,
                bold: newbold,
                italic: newitalic,
                underline: underline,
                align: align,
            }
        });
    }

    fronttext2Editor = () => {
        this.setState({
            fronttext2Editor: true,
            showEditor: true
        });
    }

    changefronttext2 = (newName, newSize, newFamily, newColor, newbold, newitalic, underline, align) => {
        if (newSize === '') {
            newSize = 0;
        }
        this.setState({
            fronttext2: {
                text: newName,
                fontSize: parseInt(newSize),
                fontFamily: newFamily,
                fontColor: newColor,
                bold: newbold,
                italic: newitalic,
                underline: underline,
                align: align,
            }
        });
    }
    changefooter = (newName, newSize, newFamily, newColor, newbold, newitalic, underline, align) => {
        if (newSize === '') {
            newSize = 0;
        }
        this.setState({
            footer: {
                text: newName,
                fontSize: parseInt(newSize),
                fontFamily: newFamily,
                fontColor: newColor,
                bold: newbold,
                italic: newitalic,
                underline: underline,
                align: align,
            }
        });
    }

    footerEditor = () => {
        this.setState({
            footerEditor: true,
            showEditor: true
        });
    }

    mailEditor = () => {
        this.setState({
            mailEditor: true,
            showEditor: true
        });
    }

    changemail = (newName, newSize, newFamily, newColor, newbold, newitalic, underline, align) => {
        if (newSize === '') {
            newSize = 0;
        }
        this.setState({
            mail: {
                text: newName,
                fontSize: parseInt(newSize),
                fontFamily: newFamily,
                fontColor: newColor,
                bold: newbold,
                italic: newitalic,
                underline: underline,
                align: align,
            }
        });
    }

    linkedinEditor = () => {
        this.setState({
            linkedinEditor: true,
            showEditor: true
        });
    }

    changelinkedin = (newName, newSize, newFamily, newColor, newbold, newitalic, underline, align) => {
        if (newSize === '') {
            newSize = 0;
        }
        this.setState({
            linkedin: {
                text: newName,
                fontSize: parseInt(newSize),
                fontFamily: newFamily,
                fontColor: newColor,
                bold: newbold,
                italic: newitalic,
                underline: underline,
                align: align,
            }
        });
    }

    changefootercontact = (newName, newSize, newFamily, newColor, newbold, newitalic, underline, align) => {
        if (newSize === '') {
            newSize = 0;
        }
        this.setState({
            footercontact: {
                text: newName,
                fontSize: parseInt(newSize),
                fontFamily: newFamily,
                fontColor: newColor,
                bold: newbold,
                italic: newitalic,
                underline: underline,
                align: align,
            }
        });
    }

    footercontactEditor = () => {
        this.setState({
            footercontactEditor: true,
            showEditor: true
        });
    }


    render() {
        let textEditor = <SideEditor editorHandler={this.editorHandler} />

        if (this.state.fronttextEditor === true) {
            textEditor = <TextEditor closeHandler={() => { this.setState({ fronttextEditor: false }) }} changeHandler={(newName, newSize, newFamily, newColor, newbold, newitalic, underline, align) => this.changefronttext(newName, newSize, newFamily, newColor, newbold, newitalic, underline, align)} data={this.state.fronttext} />
        }

        if (this.state.fronttext2Editor === true) {
            textEditor = <TextEditor closeHandler={() => { this.setState({ fronttext2Editor: false }) }} changeHandler={(newName, newSize, newFamily, newColor, newbold, newitalic, underline, align) => this.changefronttext2(newName, newSize, newFamily, newColor, newbold, newitalic, underline, align)} data={this.state.fronttext2} />
        }

        if (this.state.footerEditor === true) {
            textEditor = <TextEditor closeHandler={() => { this.setState({ footerEditor: false }) }} changeHandler={(newName, newSize, newFamily, newColor, newbold, newitalic, underline, align) => this.changefooter(newName, newSize, newFamily, newColor, newbold, newitalic, underline, align)} data={this.state.footer} />
        }

        if (this.state.footercontactEditor === true) {
            textEditor = <TextEditor closeHandler={() => { this.setState({ footerEditor: false }) }} changeHandler={(newName, newSize, newFamily, newColor, newbold, newitalic, underline, align) => this.changefootercontact(newName, newSize, newFamily, newColor, newbold, newitalic, underline, align)} data={this.state.footercontact} />
        }

        if (this.state.mailEditor === true) {
            textEditor = <TextEditor closeHandler={() => { this.setState({ mailEditor: false }) }} changeHandler={(newName, newSize, newFamily, newColor, newbold, newitalic, underline, align) => this.changemail(newName, newSize, newFamily, newColor, newbold, newitalic, underline, align)} data={this.state.mail} />
        }

        if (this.state.linkedinEditor === true) {
            textEditor = <TextEditor closeHandler={() => { this.setState({ linkedinEditor: false }) }} changeHandler={(newName, newSize, newFamily, newColor, newbold, newitalic, underline, align) => this.changelinkedin(newName, newSize, newFamily, newColor, newbold, newitalic, underline, align)} data={this.state.linkedin} />
        }


        if (this.state.showEditor === false) {
            textEditor = null;
        }

        function gotocalendar(e) {
            e.preventDefault();
            window.location = '/calendar';
        }
        function gotocontact(e) {
            e.preventDefault();
            window.location = '/contact';
        }
        return (
            <div className={classes.rootCont}>
                <div> {textEditor} </div>
                <div className={this.state.showEditor ? classes.spacer : ''} />
                <div className={classes.content} style={this.state.showEditor ? { width: "65%" } : { width: "100%" }}>
                    <div className={classes.topdiv}>

                        <Front
                            fronttext={this.state.fronttext}
                            fronttextEditor={this.fronttextEditor}
                            fronttext2={this.state.fronttext2}
                            fronttext2Editor={this.fronttext2Editor}
                        />
                        <div className={classes.calendar} style={{ display: 'flex', justifyContent: 'center' }} onClick={gotocalendar}>
                            <Calendar />
                        </div>
                        <div style={{ color: 'white' }}>.</div>
                        <div style={{ color: 'white' }}>.</div>
                        <div onClick={gotocontact} style={{ display: 'flex', justifyContent: 'center' }}>
                            <Contact
                                footercontact={this.state.footercontact}
                                footercontactEditor={this.footercontactEditor}
                                mail={this.state.mail}
                                mailEditor={this.mailEditor}
                                linkedin={this.state.linkedin}
                                linkedinEditor={this.linkedinEditor}
                            />
                        </div>
                        <Footer
                            footer={this.state.footer}
                            footerEditor={this.footerEditor}
                            footercontact={this.state.footercontact}
                            footercontactEditor={this.footercontactEditor}
                            mail={this.state.mail}
                            mailEditor={this.mailEditor}
                            linkedin={this.state.linkedin}
                            linkedinEditor={this.linkedinEditor}
                        />
                    </div>
                </div>
            </div>
        );
    }
}