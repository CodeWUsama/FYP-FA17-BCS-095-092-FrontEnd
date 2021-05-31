import React, { useState } from 'react';
import Research from '../../ReusableStuff/ResearchTemplate/Research';
import classes from "./researches.module.css";

const LatestResearches = (props) => {

    let renderResearches=()=>props.researches.map(research => {
        return <Research title={research.title} description={research.description} key={Math.random()} details={research.details}/>
    });
    
    return (
        <div className={classes.rootCont}>
            <p className={classes.head}>Latest Researches</p>
            <div className={classes.researchesCont}>
                {renderResearches()}
            </div>
        </div>
    );
}

export default LatestResearches;