import React, { useState } from 'react';
import classes from "./intro.module.css";
import Avatar from "./avatar.png";

const Intro = (props) => {
    return (
        <div className={classes.rootCont}>

            <div className={classes.headCont}>
                <div className={classes.imgCont}>
                    <img src={Avatar} className={classes.avatarImg} />
                </div>
                <div>
                    <p className={classes.headlineL}
                        onClick={props.nameHandler}
                        style={{
                            fontSize: props.name.fontSize,
                            fontFamily: props.name.fontFamily,
                            color: props.name.fontColor,
                            fontWeight: props.name.bold ? "bold" : "normal",
                            textDecoration: props.name.underline ? "underline" : "none",
                            fontStyle: props.name.italic ? "italic" : "normal",
                            textAlign: props.name.align
                        }}
                    >Hi, I am {props.name.text}</p>
                    <p className={classes.headlineM}
                        onClick={props.name1Handler}
                        style={{
                            fontSize: props.introF2.fontSize,
                            fontFamily: props.introF2.fontFamily,
                            color: props.introF2.fontColor,
                            fontWeight: props.introF2.bold ? "bold" : "normal",
                            textDecoration: props.introF2.underline ? "underline" : "none",
                            fontStyle: props.introF2.italic ? "italic" : "normal",
                            textAlign: props.introF2.align
                        }}
                    >{props.introF2.text}</p>
                    <p className={classes.headlineS}
                        onClick={props.name2Handler}
                        style={{
                            fontSize: props.introF3.fontSize,
                            fontFamily: props.introF3.fontFamily,
                            color: props.introF3.fontColor,
                            fontWeight: props.introF3.bold ? "bold" : "normal",
                            textDecoration: props.introF3.underline ? "underline" : "none",
                            fontStyle: props.introF3.italic ? "italic" : "normal",
                            textAlign: props.introF3.align
                        }}
                    >{props.introF3.text}</p>
                </div>
            </div>

            <div className={classes.about}>
                <div className={classes.aboutTextCont}>
                    <p className={classes.aboutTextHead}  >Specialities</p>

                    <p className={classes.aboutTextDesc}
                        onClick={props.sk1Handler}
                        style={{
                            fontSize: props.specialities.fontSize,
                            fontFamily: props.specialities.fontFamily,
                            color: props.specialities.fontColor,
                            fontWeight: props.specialities.bold ? "bold" : "normal",
                            textDecoration: props.specialities.underline ? "underline" : "none",
                            fontStyle: props.specialities.italic ? "italic" : "normal",
                            textAlign: props.specialities.align
                        }}
                    >{props.specialities.text}</p>
                </div>
                <div className={classes.aboutTextCont}>
                    <p className={classes.aboutTextHead}  >Phone</p>
                    <p className={classes.aboutTextDesc}
                        onClick={props.sk2Handler}
                        style={{
                            fontSize: props.phone.fontSize,
                            fontFamily: props.phone.fontFamily,
                            color: props.phone.fontColor,
                            fontWeight: props.phone.bold ? "bold" : "normal",
                            textDecoration: props.phone.underline ? "underline" : "none",
                            fontStyle: props.phone.italic ? "italic" : "normal",
                            textAlign: props.phone.align
                        }}
                    >{props.phone.text}</p>
                </div>
                <div className={classes.aboutTextCont}>
                    <p className={classes.aboutTextHead}  >Email</p>
                    <p className={classes.aboutTextDesc}
                        onClick={props.sk3Handler}
                        style={{
                            fontSize: props.email.fontSize,
                            fontFamily: props.email.fontFamily,
                            color: props.email.fontColor,
                            fontWeight: props.email.bold ? "bold" : "normal",
                            textDecoration: props.email.underline ? "underline" : "none",
                            fontStyle: props.email.italic ? "italic" : "normal",
                            textAlign: props.email.align
                        }}
                    >{props.email.text}</p>
                </div>
            </div>

        </div>

    );
}

export default Intro;