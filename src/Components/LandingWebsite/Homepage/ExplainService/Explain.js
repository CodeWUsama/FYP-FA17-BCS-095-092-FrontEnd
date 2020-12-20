import React, { Component } from 'react';
import classes from './Explain.module.css';

export default class Explain extends Component{
    render() {
        return (
            <div>
                <div className={classes.rootDiv}>
                    <div className={classes.leftComp}>
                        <p className={classes.head}>Build Your Online Presence Now!</p>
                        <button className={classes.btt}>Get Started</button>
                    </div>
                    <div className={classes.rightComp}>
                    <p className={classes.desc}>Design and build your own high-quality websites. Whether you’re promoting your business, showcasing your work, opening your store or starting a blog—you can do it all with the Digital Sudio.</p>
                    </div>
                </div>
             </div>
        );
    }
}