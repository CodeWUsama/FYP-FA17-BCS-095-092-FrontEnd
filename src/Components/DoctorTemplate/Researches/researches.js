import React, { useState } from 'react';
import Research from '../ReusableStuff/ResearchTemplate/Research';
import classes from "./researches.module.css";
import Footer from "./../Footer/Footer"
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import IconButton from '@material-ui/core/IconButton';

const Researches = () => {
    return (
        <>
            <p style={{ fontSize: 50, textAlign: 'center', color: 'white', backgroundColor: "#fc9464", margin: 0, paddingTop: 30 }}>All Researches</p>
            <div className={classes.researchesCont}>
                <IconButton color="primary" aria-label="upload picture" component="span"  style={{height:450}}>
                    <AddCircleOutlineIcon style={{ color: 'white', fontSize: 300 }} />
                </IconButton>
                <Research></Research>
                <Research></Research>
                <Research></Research>
                <Research></Research>
                <Research></Research>
                <Research></Research>
            </div>
            <Footer />
        </>
    );
}

export default Researches;