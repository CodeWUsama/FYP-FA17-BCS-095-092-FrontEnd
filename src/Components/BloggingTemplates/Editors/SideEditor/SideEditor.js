import React, { Component } from 'react';
import classes from './SideEditor.module.css';

export default class SideEditor extends Component {

    render() {

        let innerContent =
            <div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                    <p className={classes.edPannel}>Editor Panel</p>
                    <p onClick={this.props.editorHandler} className={classes.close}>Close</p>
                </div>
                <p className={classes.edPannelText}>Please click the component to edit them.</p>
            </div>

        if (this.props.children) {
            innerContent = this.props.children;
        }

        return (
            <div className={classes.rootCont}>
                {innerContent}
            </div>
        );
    }
}