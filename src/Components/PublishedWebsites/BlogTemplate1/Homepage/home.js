import React, { Component } from 'react';
import classes from './home.module.css';
import Home from './homeComp';
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
    render() {
        return (
            <div className={classes.rootCont}>
                <div className={this.state.showEditor ? classes.spacer : ''} />
                <div className={classes.content} style={this.state.showEditor ? { width: "65%", marginTop: 50 } : { width: "100%", marginTop: 50 }}>
                    <div className={classes.rootDiv}>
                        <div className={classes.toplayer}>
                            <Home
                                hometext={this.state.hometext}
                            />
                            <Recipe />
                            <Gallery />
                            <Footer
                                footer={this.state.footer}

                                footercontact={this.state.footercontact}

                                mail={this.state.mail}

                                linkedin={this.state.linkedin}

                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}