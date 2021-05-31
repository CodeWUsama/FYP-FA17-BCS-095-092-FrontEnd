import React, { useState } from 'react';
import classes from "./services.module.css";
import WorkIcon from '@material-ui/icons/Work';
import ComputerIcon from '@material-ui/icons/VideoCall';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

const Services = (props) => {

    return (
        <div className={classes.rootCont}>
            <p className={classes.head}>Highlighted Services</p>
            <div className={classes.researchesCont}>
                <div className={classes.research}>
                    <div style={{ display: "flex", width: "100%", justifyContent: "center" }}><WorkIcon className={classes.icon} style={{ fontSize: 80 }} /></div>
                    <p onClick={props.sh1Handler}
                        style={{
                            fontSize: props.s1h.fontSize,
                            fontFamily: props.s1h.fontFamily,
                            color: props.s1h.fontColor,
                            fontWeight: props.s1h.bold ? "bold" : "normal",
                            textDecoration: props.s1h.underline ? "underline" : "none",
                            fontStyle: props.s1h.italic ? "italic" : "normal",
                            textAlign: props.s1h.align
                        }}
                        className={classes.rHead}>{props.s1h.text}</p>
                    <div style={{ display: "flex", flexDirection: "column", height: 200, justifyContent: "space-between" }}>
                        <p onClick={props.sd1Handler}
                            style={{
                                fontSize: props.s1d.fontSize,
                                fontFamily: props.s1d.fontFamily,
                                color: props.s1d.fontColor,
                                fontWeight: props.s1d.bold ? "bold" : "normal",
                                textDecoration: props.s1d.underline ? "underline" : "none",
                                fontStyle: props.s1d.italic ? "italic" : "normal",
                                textAlign: props.s1d.align
                            }}
                            className={classes.rDesc}>{props.s1d.text}</p>
                    </div>
                </div>
                <div className={classes.research}>
                    <div style={{ display: "flex", width: "100%", justifyContent: "center" }}><LocalHospitalIcon className={classes.icon} style={{ fontSize: 80 }} /></div>
                    <p onClick={props.sh2Handler}
                    style={{
                        fontSize: props.s2h.fontSize,
                        fontFamily: props.s2h.fontFamily,
                        color: props.s2h.fontColor,
                        fontWeight: props.s2h.bold ? "bold" : "normal",
                        textDecoration: props.s2h.underline ? "underline" : "none",
                        fontStyle: props.s2h.italic ? "italic" : "normal",
                        textAlign: props.s2h.align
                    }}
                    className={classes.rHead}>{props.s2h.text}</p>
                    <div style={{ display: "flex", flexDirection: "column", height: 200, justifyContent: "space-between" }}>
                        <p onClick={props.sd2Handler}
                        style={{
                            fontSize: props.s2d.fontSize,
                            fontFamily: props.s2d.fontFamily,
                            color: props.s2d.fontColor,
                            fontWeight: props.s2d.bold ? "bold" : "normal",
                            textDecoration: props.s2d.underline ? "underline" : "none",
                            fontStyle: props.s2d.italic ? "italic" : "normal",
                            textAlign: props.s2d.align
                        }}
                        className={classes.rDesc}>{props.s2d.text}</p>
                    </div>
                </div>
                <div className={classes.research}>
                    <div style={{ display: "flex", width: "100%", justifyContent: "center" }}><ComputerIcon className={classes.icon} style={{ fontSize: 80 }} /></div>
                    <p className={classes.rHead}  onClick={props.sh3Handler}
                    style={{
                        fontSize: props.s3h.fontSize,
                        fontFamily: props.s3h.fontFamily,
                        color: props.s3h.fontColor,
                        fontWeight: props.s3h.bold ? "bold" : "normal",
                        textDecoration: props.s3h.underline ? "underline" : "none",
                        fontStyle: props.s3h.italic ? "italic" : "normal",
                        textAlign: props.s3h.align
                    }}
                    >{props.s3h.text}</p>
                    <div style={{ display: "flex", flexDirection: "column", height: 200, justifyContent: "space-between" }}>
                        <p onClick={props.sd3Handler}
                        style={{
                            fontSize: props.s3d.fontSize,
                            fontFamily: props.s3d.fontFamily,
                            color: props.s3d.fontColor,
                            fontWeight: props.s3d.bold ? "bold" : "normal",
                            textDecoration: props.s3d.underline ? "underline" : "none",
                            fontStyle: props.s3d.italic ? "italic" : "normal",
                            textAlign: props.s3d.align
                        }}
                        className={classes.rDesc}>{props.s3d.text}</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Services;