import { useSpring, animated } from 'react-spring';
import React from 'react';
import classes from "./Home.module.css";

export default function AnimatedText(props) {
    const styleProps = useSpring({ opacity: 1, marginTop: "0px", from: { opacity: 0, marginTop: "-500px" }, config: { duration: 800 } })
    return <animated.div style={styleProps}>
        <div className={classes.explainCont}>
            <p
                style={{
                    fontSize: props.storeName.fontSize,
                    fontFamily: props.storeName.fontFamily,
                    color: props.storeName.fontColor,
                    fontWeight: props.storeName.bold ? "bold" : "normal",
                    textDecoration: props.storeName.underline ? "underline" : "none",
                    fontStyle: props.storeName.italic ? "italic" : "normal",
                    textAlign: props.storeName.align
                }}
                onClick={props.storeNameEditor} className={classes.head}>{props.storeName.text}</p>
            <p  
                onClick={props.introTextEditor}
                className={classes.explain}
                style={{
                    fontSize: props.introText.fontSize,
                    fontFamily: props.introText.fontFamily,
                    color: props.introText.fontColor,
                    fontWeight: props.introText.bold ? "bold" : "normal",
                    textDecoration: props.introText.underline ? "underline" : "none",
                    fontStyle: props.introText.italic ? "italic" : "normal",
                    textAlign: props.introText.align
                }}
            >
                {props.introText.text}
            </p>
            <button className={classes.viewButton}>View Products</button>
        </div>
    </animated.div>
}