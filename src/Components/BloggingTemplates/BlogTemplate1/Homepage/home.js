import React, { Component } from 'react';
import classes from './home.module.css';
import Home from './homeComp';
import SideEditor from './../ReusableComponents/SideEditor/SideEditor';
import TextEditor from '../../../Editors/TextEditor/TextEditor';
import Recipe from '../recipe/Recipe';
import Gallery from '../gallery/Gallery';
import Footer from '../footer/Footer';

export default class Front extends Component {
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
                        hometext: resultData.data.hometext,
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
    hometextEditor = () => {

        this.setState({
            hometextEditor: true,
            showEditor: true
        });
    }

    changehometext = (newName, newSize, newFamily, newColor, newbold, newitalic, underline, align) => {
        if (newSize === '') {
            newSize = 0;
        }
        this.setState({
            hometext: {
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

    saveChangesHandler = () => {
        fetch("http://localhost:8080/b1td/updateData", {
            method: "POST",
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token'),
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                id: localStorage.getItem("id"),
                hometext: this.state.hometext,
                footer: this.state.footer,
                footercontact: this.state.footercontact,
                linkedin: this.state.linkedin,
                mail: this.state.mail,
            })
        })
            .then(result => {
                return result.json();
            }).then(resultData => {
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {

        console.log("Hi");

        let textEditor = <SideEditor editorHandler={this.editorHandler} />

        if (this.state.hometextEditor === true) {
            textEditor = <TextEditor closeHandler={() => { this.setState({ hometextEditor: false }) }} changeHandler={(newName, newSize, newFamily, newColor, newbold, newitalic, underline, align) => this.changehometext(newName, newSize, newFamily, newColor, newbold, newitalic, underline, align)} data={this.state.hometext} />
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

        return (
            <div className={classes.rootCont}>
                <div> {textEditor} </div>
                <div className={this.state.showEditor ? classes.spacer : ''} />
                <div className={classes.content} style={this.state.showEditor ? { width: "65%", marginTop: 50 } : { width: "100%", marginTop: 50 }}>
                    <div className={classes.rootDiv}>
                        <div className={classes.toplayer}>
                            <Home
                                hometext={this.state.hometext}
                                hometextEditor={this.hometextEditor}
                            />
                            <Recipe />
                            <Gallery />
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
                    <div style={{ display: 'flex', justifyContent: "center" }}>
                        <button style={{ bottom: 30 }} className={classes.saveBt} onClick={this.saveChangesHandler}>Save Changes</button>
                    </div>
                </div>
            </div>
        );
    }
}