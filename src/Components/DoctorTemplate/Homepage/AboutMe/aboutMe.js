import React from 'react';
import { Component } from 'react';
import classes from "./aboutMe.module.css";
import Background from "./doctor.jpg"

export default class AboutMe extends Component {
    render() {
        return (
            <div className={classes.abtUsCont}>
                <div className={classes.abtLeft}>
                    <img src={Background} className={classes.img} alt="Image" />
                </div>
                <div className={classes.abtRight}>
                    <p
                        className={classes.head}
                    >
                        About Me
                    </p>

                    <div style={{ display: 'flex', justifyContent: "center" }}>
                        <p onClick={this.props.sectionDescHandler}
                            onClick={this.props.abtHandler}
                            className={classes.desc}
                            style={{
                                fontSize: this.props.aboutme.fontSize,
                                fontFamily: this.props.aboutme.fontFamily,
                                color: this.props.aboutme.fontColor,
                                fontWeight: this.props.aboutme.bold ? "bold" : "normal",
                                textDecoration: this.props.aboutme.underline ? "underline" : "none",
                                fontStyle: this.props.aboutme.italic ? "italic" : "normal",
                                textAlign: this.props.aboutme.align
                            }}
                        >
                            {this.props.aboutme.text}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}