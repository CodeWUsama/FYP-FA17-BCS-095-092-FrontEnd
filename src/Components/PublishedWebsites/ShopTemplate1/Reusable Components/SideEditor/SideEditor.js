import React, { Component } from 'react';
import classes from './SideEditor.module.css'

export default class SideEditor extends Component {

    render() {

        let innerContent =
            <div>
                <div className={classes.headCont}>
                    <p style={{color:"white"}}>a</p>
                    <p className={classes.edPannel}>Editor Panel</p>
                    <p onClick={this.props.editorHandler} className={classes.close}>X</p>
                </div>
                <p className={classes.edPannelText}>Please click the component to edit them.</p>
            </div>

        if (this.props.children) {
            innerContent = this.props.children;
        }

        return (
            <div>
                <div style={{ width: "100%", height: "79px", backgroundColor: "transparent" }}></div>
                <div className={classes.rootCont}>
                    {innerContent}
                </div>
            </div>

        );
    }
}