import React from 'react';
import { Component } from 'react';
import classes from "./AboutUs.module.css";
import Background from "./trusted.JPG";

export default class AboutUs extends Component {
    render() {
        return (
            <div className={classes.abtUsCont}>
                <div className={classes.abtLeft}>
                    <img src={Background} className={classes.img} alt="Image" />
                </div>
                <div className={classes.abtRight}>
                    <p
                        onClick={this.props.sectionNameHandler}
                        className={classes.head}
                        style={{
                            fontSize: this.props.sectionName.fontSize,
                            fontFamily: this.props.sectionName.fontFamily,
                            color: this.props.sectionName.fontColor,
                            fontWeight: this.props.sectionName.bold ? "bold" : "normal",
                            textDecoration: this.props.sectionName.underline ? "underline" : "none",
                            fontStyle: this.props.sectionName.italic ? "italic" : "normal",
                            textAlign: this.props.sectionName.align
                        }}
                    >
                        {this.props.sectionName.text}
                    </p>

                    <div style={{ display: 'flex', justifyContent: "center" }}>
                        <p onClick={this.props.sectionDescHandler}
                            className={classes.desc}
                            style={{
                                fontSize: this.props.sectionDesc.fontSize,
                                fontFamily: this.props.sectionDesc.fontFamily,
                                color: this.props.sectionDesc.fontColor,
                                fontWeight: this.props.sectionDesc.bold ? "bold" : "normal",
                                textDecoration: this.props.sectionDesc.underline ? "underline" : "none",
                                fontStyle: this.props.sectionDesc.italic ? "italic" : "normal",
                                textAlign: this.props.sectionDesc.align
                            }}
                        >
                            {this.props.sectionDesc.text}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}